import "./style.css";

import * as THREE from "three";
import { Renderer } from "./rendering/renderer";

import { chairAssembly, type ChairParams } from "./model/manifold";
import { tableAssembly, type TableParams } from "./model/table";
import { mesh2geometry } from "./model/export";
import { TMFLoader } from "./model/load";
import { Animate, immediate } from "./animate";

import { Dyn } from "twrl";

import { rangeControl, angleControl, selectControl } from "./controls";
import { computePrice, type FurnitureParams } from "./quote/pricing";
import type { MaterialSelection, PricingConfig } from "./quote/materials";
import { DEFAULT_SELECTION } from "./quote/materials";
import { createQuotePanel, updateQuotePanel } from "./quote/quote-panel";
import pricingConfig from "./data/pricing-config.json";

/// CONSTANTS

THREE.Object3D.DEFAULT_UP = new THREE.Vector3(0, 0, 1);

type ProductType = "chair" | "table";

// ── Chair config ─────────────────────────────────────────────────────────

const CHAIR_KEYS = [
  "seatWidth", "seatDepth", "seatHeight", "seatThickness",
  "backrestHeight", "backrestTilt", "legThickness",
  "armrestHeight", "armrestThickness", "radius",
] as const;
type ChairKey = (typeof CHAIR_KEYS)[number];

const CHAIR_DEFAULTS: Record<ChairKey, number> = {
  seatWidth: 440, seatDepth: 360, seatHeight: 450, seatThickness: 20,
  backrestHeight: 520, backrestTilt: 8, legThickness: 30,
  armrestHeight: 0, armrestThickness: 22, radius: 3,
};

const CHAIR_LIMITS: Record<ChairKey, [number, number]> = {
  seatWidth: [300, 600], seatDepth: [300, 550], seatHeight: [380, 520],
  seatThickness: [15, 40], backrestHeight: [200, 700], backrestTilt: [0, 25],
  legThickness: [20, 60], armrestHeight: [0, 300], armrestThickness: [15, 40],
  radius: [0, 20],
};

interface ChairSliderConfig {
  key: ChairKey;
  section: string;
  name: string;
  isAngle?: boolean;
}

const CHAIR_SLIDERS: ChairSliderConfig[] = [
  { key: "seatWidth", section: "Seat", name: "Width" },
  { key: "seatDepth", section: "Seat", name: "Depth" },
  { key: "seatHeight", section: "Seat", name: "Height" },
  { key: "seatThickness", section: "Seat", name: "Thick" },
  { key: "backrestHeight", section: "Backrest", name: "Height" },
  { key: "backrestTilt", section: "Backrest", name: "Tilt", isAngle: true },
  { key: "legThickness", section: "Legs", name: "Thick" },
  { key: "armrestHeight", section: "Armrests", name: "Height" },
  { key: "armrestThickness", section: "Armrests", name: "Thick" },
  { key: "radius", section: "Style", name: "Radius" },
];

// ── Table config ─────────────────────────────────────────────────────────

const TABLE_KEYS = [
  "topWidth", "topDepth", "topThickness", "topRadius",
  "legHeight", "legWidth", "legInset",
] as const;
type TableKey = (typeof TABLE_KEYS)[number];

const TABLE_DEFAULTS: Record<TableKey, number> = {
  topWidth: 1200, topDepth: 800, topThickness: 30, topRadius: 20,
  legHeight: 720, legWidth: 60, legInset: 40,
};

const TABLE_LIMITS: Record<TableKey, [number, number]> = {
  topWidth: [400, 2400], topDepth: [300, 1600], topThickness: [10, 100],
  topRadius: [0, 100], legHeight: [300, 1200], legWidth: [20, 200],
  legInset: [0, 300],
};

interface TableSliderConfig {
  key: TableKey;
  section: string;
  name: string;
}

const TABLE_SLIDERS: TableSliderConfig[] = [
  { key: "topWidth", section: "Top", name: "Width" },
  { key: "topDepth", section: "Top", name: "Depth" },
  { key: "topThickness", section: "Top", name: "Thickness" },
  { key: "topRadius", section: "Top", name: "Corner R" },
  { key: "legHeight", section: "Legs", name: "Height" },
  { key: "legWidth", section: "Legs", name: "Width" },
  { key: "legInset", section: "Legs", name: "Inset" },
];

/// STATE

const currentProduct = new Dyn<ProductType>("chair");

const chairParams: Record<ChairKey, Dyn<number>> = {} as Record<ChairKey, Dyn<number>>;
for (const key of CHAIR_KEYS) chairParams[key] = new Dyn(CHAIR_DEFAULTS[key]);

const tableParams: Record<TableKey, Dyn<number>> = {} as Record<TableKey, Dyn<number>>;
for (const key of TABLE_KEYS) tableParams[key] = new Dyn(TABLE_DEFAULTS[key]);

const materialSelection = new Dyn<MaterialSelection>({ ...DEFAULT_SELECTION });

type PartPositionStatic = Extract<PartPosition, { tag: "static" }>;
type PartPosition =
  | { tag: "static"; position: -1 | 0 | 1 }
  | { tag: "will-move"; startRot: number; startPos: [number, number]; clock: THREE.Clock; lastStatic: PartPositionStatic }
  | { tag: "moving"; startRot: number; startPos: [number, number]; lastStatic: PartPositionStatic; clock: THREE.Clock; x: number };
const partPositioning = new Dyn<PartPosition>({ tag: "static", position: 0 });

/// MODEL

const tmfLoader = new TMFLoader();

function getCurrentFurnitureParams(): FurnitureParams {
  if (currentProduct.latest === "chair") {
    const p: ChairParams = {} as ChairParams;
    for (const key of CHAIR_KEYS) (p as unknown as Record<string, number>)[key] = chairParams[key].latest;
    return { type: "chair", params: p };
  } else {
    const p: TableParams = {} as TableParams;
    for (const key of TABLE_KEYS) (p as unknown as Record<string, number>)[key] = tableParams[key].latest;
    return { type: "table", params: p };
  }
}

function getAnimatedParams(): Record<string, number> {
  const result: Record<string, number> = {};
  if (currentProduct.latest === "chair") {
    for (const key of CHAIR_KEYS) result[key] = chairAnimations[key].current;
  } else {
    for (const key of TABLE_KEYS) result[key] = tableAnimations[key].current;
  }
  return result;
}

async function reloadModel() {
  const animated = getAnimatedParams();
  let model;
  if (currentProduct.latest === "chair") {
    model = await chairAssembly(animated as unknown as ChairParams);
  } else {
    model = await tableAssembly(animated as unknown as TableParams);
  }
  const geometry = mesh2geometry(model);
  geometry.computeVertexNormals();
  mesh.geometry = geometry;
  mesh.clear();
}

function scheduleExport() {
  const fp = getCurrentFurnitureParams();
  let assembly: Promise<import("manifold-3d").Manifold>;
  let basename: string;
  if (fp.type === "chair") {
    const p = fp.params;
    assembly = chairAssembly(p);
    basename = `chair-${p.seatWidth}x${p.seatDepth}x${p.seatHeight}`;
  } else {
    const p = fp.params;
    assembly = tableAssembly(p);
    basename = `table-${p.topWidth}x${p.topDepth}x${p.legHeight}`;
  }
  tmfLoader.load(assembly, basename);
}

// Subscribe to param changes for export
for (const key of CHAIR_KEYS) chairParams[key].addListener(() => { if (currentProduct.latest === "chair") scheduleExport(); });
for (const key of TABLE_KEYS) tableParams[key].addListener(() => { if (currentProduct.latest === "table") scheduleExport(); });
currentProduct.addListener(() => scheduleExport());

/// RENDER

let centerCameraNeeded = true;

const mesh: THREE.Mesh = new THREE.Mesh(
  new THREE.BoxGeometry(100, 100, 10),
  new THREE.Material(),
);

const MESH_ROTATION_DELTA = 0.3;
mesh.rotation.x = -1.1;
mesh.rotation.z = MESH_ROTATION_DELTA;

function centerCamera() {
  const mat = new THREE.Matrix4();
  if (currentProduct.latest === "chair") {
    const rotX = new THREE.Matrix4().makeRotationX(-1.1);
    const rotZ = new THREE.Matrix4().makeRotationZ(0.3);
    mat.multiplyMatrices(rotZ, rotX);
  } else {
    const rotX = new THREE.Matrix4().makeRotationX(-1.1);
    const rotZ = new THREE.Matrix4().makeRotationZ(0.1);
    mat.multiplyMatrices(rotZ, rotX);
  }
  renderer.centerCameraAround(mesh, mat);
}

const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const renderer = new Renderer(canvas, mesh);

let reloadModelNeeded = true;
const rotation = new Animate(0);

const bound = (v: number, [lo, hi]: [number, number]): number =>
  ((v - lo) % (hi - lo)) + lo;

partPositioning.addListener((val) => {
  if (val.tag === "static") rotation.startAnimationTo(val.position);
  else if (val.tag === "moving") {
    const dwdx = 2 / renderer.canvasWidth;
    const v = (val.x - val.startPos[0]) * dwdx - val.startRot;
    rotation.startAnimationTo(bound(v, [-1, 1]), immediate);
  }
});

/// ANIMATIONS

const chairAnimations: Record<ChairKey, Animate> = {} as Record<ChairKey, Animate>;
for (const key of CHAIR_KEYS) {
  chairAnimations[key] = new Animate(CHAIR_DEFAULTS[key]);
  chairParams[key].addListener((v) => chairAnimations[key].startAnimationTo(v));
}

const tableAnimations: Record<TableKey, Animate> = {} as Record<TableKey, Animate>;
for (const key of TABLE_KEYS) {
  tableAnimations[key] = new Animate(TABLE_DEFAULTS[key]);
  tableParams[key].addListener((v) => tableAnimations[key].startAnimationTo(v));
}

/// DOM

const link3mf = document.getElementById("download-3mf") as HTMLAnchorElement;
const linkStl = document.getElementById("download-stl") as HTMLAnchorElement;
const linkObj = document.getElementById("download-obj") as HTMLAnchorElement;
const controls = document.querySelector("#controls") as HTMLDivElement;

const sectionHeader = (text: string): HTMLElement => {
  const el = document.createElement("h3");
  el.className = "section-header";
  el.textContent = text;
  return el;
};

// ── Product selector ─────────────────────────────────────────────────────

const productSelector = document.createElement("div");
productSelector.className = "product-selector";

const btnChair = document.createElement("button");
btnChair.className = "product-btn active";
btnChair.textContent = "Chair";
btnChair.addEventListener("click", () => currentProduct.send("chair"));

const btnTable = document.createElement("button");
btnTable.className = "product-btn";
btnTable.textContent = "Table";
btnTable.addEventListener("click", () => currentProduct.send("table"));

productSelector.append(btnChair, btnTable);
controls.append(productSelector);

// ── Dynamic controls container ───────────────────────────────────────────

const dynamicControls = document.createElement("div");
dynamicControls.id = "dynamic-controls";
controls.append(dynamicControls);

// Generation counter — listeners check this to auto-deactivate after a product switch
let controlGeneration = 0;

function buildChairControls() {
  dynamicControls.innerHTML = "";
  const gen = ++controlGeneration;

  let lastSection = "";
  for (const cfg of CHAIR_SLIDERS) {
    if (cfg.section !== lastSection) {
      dynamicControls.append(sectionHeader(cfg.section));
      lastSection = cfg.section;
    }
    const [min, max] = CHAIR_LIMITS[cfg.key];
    const ctrl = cfg.isAngle
      ? angleControl(cfg.key, { name: cfg.name, min: String(min), max: String(max), sliderMin: String(min), sliderMax: String(max) })
      : rangeControl(cfg.key, { name: cfg.name, min: String(min), max: String(max), sliderMin: String(min), sliderMax: String(max) });
    dynamicControls.append(ctrl.wrapper);

    const dyn = chairParams[cfg.key];
    ctrl.input.value = `${dyn.latest}`;
    ctrl.range.value = `${dyn.latest}`;

    dyn.addListener((v: number) => {
      if (controlGeneration !== gen) return;
      ctrl.input.value = `${Math.round(v)}`;
      ctrl.range.value = `${Math.round(v)}`;
    });

    ctrl.input.addEventListener("change", () => {
      const n = parseInt(ctrl.input.value);
      if (!Number.isNaN(n)) dyn.send(Math.max(min, Math.min(n, max)));
    });
    ctrl.range.addEventListener("input", () => {
      const n = parseInt(ctrl.range.value);
      if (!Number.isNaN(n)) dyn.send(Math.max(min, Math.min(n, max)));
    });
    ctrl.input.addEventListener("focus", () => ctrl.input.select());
  }
}

function buildTableControls() {
  dynamicControls.innerHTML = "";
  const gen = ++controlGeneration;

  let lastSection = "";
  for (const cfg of TABLE_SLIDERS) {
    if (cfg.section !== lastSection) {
      dynamicControls.append(sectionHeader(cfg.section));
      lastSection = cfg.section;
    }
    const [min, max] = TABLE_LIMITS[cfg.key];
    const ctrl = rangeControl(cfg.key, { name: cfg.name, min: String(min), max: String(max), sliderMin: String(min), sliderMax: String(max) });
    dynamicControls.append(ctrl.wrapper);

    const dyn = tableParams[cfg.key];
    ctrl.input.value = `${dyn.latest}`;
    ctrl.range.value = `${dyn.latest}`;

    dyn.addListener((v: number) => {
      if (controlGeneration !== gen) return;
      ctrl.input.value = `${Math.round(v)}`;
      ctrl.range.value = `${Math.round(v)}`;
    });

    ctrl.input.addEventListener("change", () => {
      const n = parseInt(ctrl.input.value);
      if (!Number.isNaN(n)) dyn.send(Math.max(min, Math.min(n, max)));
    });
    ctrl.range.addEventListener("input", () => {
      const n = parseInt(ctrl.range.value);
      if (!Number.isNaN(n)) dyn.send(Math.max(min, Math.min(n, max)));
    });
    ctrl.input.addEventListener("focus", () => ctrl.input.select());
  }
}

// ── Material section (shared between products) ──────────────────────────

const materialContainer = document.createElement("div");
materialContainer.id = "material-controls";
controls.append(materialContainer);

const config = pricingConfig as PricingConfig;

function buildMaterialControls() {
  materialContainer.innerHTML = "";
  materialContainer.append(sectionHeader("Material"));

  const woodOptions = Object.entries(config.materials).map(([key, mat]) => ({
    value: key, label: mat.displayName,
  }));
  const woodControl = selectControl("woodType", { name: "Wood", options: woodOptions });
  materialContainer.append(woodControl.wrapper);
  woodControl.select.value = materialSelection.latest.woodType;

  const finishControl = selectControl("finishType", {
    name: "Finish",
    options: Object.entries(config.materials[materialSelection.latest.woodType].finishes)
      .map(([key, f]) => ({ value: key, label: f.displayName })),
  });
  materialContainer.append(finishControl.wrapper);
  finishControl.select.value = materialSelection.latest.finish;

  // Upholstery — only for chairs
  let upholsteryControl: ReturnType<typeof selectControl> | null = null;
  if (currentProduct.latest === "chair") {
    const upholsteryOptions = Object.entries(config.upholstery).map(
      ([key, u]) => ({ value: key, label: u.displayName }),
    );
    upholsteryControl = selectControl("upholsteryType", { name: "Seat", options: upholsteryOptions });
    materialContainer.append(upholsteryControl.wrapper);
    upholsteryControl.select.value = materialSelection.latest.upholstery;

    upholsteryControl.select.addEventListener("change", () => {
      const sel = materialSelection.latest;
      materialSelection.send({ ...sel, upholstery: upholsteryControl!.select.value });
    });
  }

  woodControl.select.addEventListener("change", () => {
    const sel = materialSelection.latest;
    const newWood = woodControl.select.value;
    const finishes = config.materials[newWood].finishes;
    finishControl.select.innerHTML = "";
    for (const [key, f] of Object.entries(finishes)) {
      const opt = document.createElement("option");
      opt.value = key;
      opt.textContent = f.displayName;
      finishControl.select.append(opt);
    }
    const newFinish = finishes[sel.finish] ? sel.finish : Object.keys(finishes)[0];
    finishControl.select.value = newFinish;
    materialSelection.send({ ...sel, woodType: newWood, finish: newFinish });
  });

  finishControl.select.addEventListener("change", () => {
    const sel = materialSelection.latest;
    materialSelection.send({ ...sel, finish: finishControl.select.value });
  });
}

// ── Quote panel ──────────────────────────────────────────────────────────

const quotePanel = createQuotePanel();
const quoteContainer = document.getElementById("quote") as HTMLDivElement;
quoteContainer.append(quotePanel.wrapper);

function refreshQuote() {
  const fp = getCurrentFurnitureParams();
  const sel = materialSelection.latest;
  const breakdown = computePrice(fp, sel, config);
  const mat = config.materials[sel.woodType];
  const fin = mat.finishes[sel.finish];
  const uph = config.upholstery[sel.upholstery];
  const showUpholstery = fp.type === "chair";
  updateQuotePanel(quotePanel, breakdown, mat.displayName, fin.displayName, uph.displayName, showUpholstery);
}

for (const key of CHAIR_KEYS) chairParams[key].addListener(() => { if (currentProduct.latest === "chair") refreshQuote(); });
for (const key of TABLE_KEYS) tableParams[key].addListener(() => { if (currentProduct.latest === "table") refreshQuote(); });
materialSelection.addListener(() => refreshQuote());
currentProduct.addListener(() => refreshQuote());

refreshQuote();

// PDF export
quotePanel.pdfButton.addEventListener("click", async () => {
  const { downloadQuotePDF } = await import("./quote/pdf-export");
  const fp = getCurrentFurnitureParams();
  const sel = materialSelection.latest;
  const breakdown = computePrice(fp, sel, config);
  await downloadQuotePDF({
    productType: fp.type,
    furnitureParams: fp,
    selection: sel,
    breakdown,
    config,
    snapshotDataUrl: renderer.snapshot(),
  });
});

// ── Product switch handler ───────────────────────────────────────────────

currentProduct.addListener((product) => {
  btnChair.classList.toggle("active", product === "chair");
  btnTable.classList.toggle("active", product === "table");

  if (product === "chair") {
    buildChairControls();
    mesh.rotation.x = -1.1;
  } else {
    buildTableControls();
    mesh.rotation.x = -1.1;
  }
  buildMaterialControls();
  reloadModelNeeded = true;
  centerCameraNeeded = true;
});

// Initial build
buildChairControls();
buildMaterialControls();

/// MOUSE DRAG STATE MACHINE

const eventCoords = (e: MouseEvent | TouchEvent): [number, number] => {
  if (e instanceof MouseEvent) return [e.offsetX, e.offsetY];
  const target = e.target;
  if (!target || !(target instanceof HTMLElement)) return [0, 0];
  const rect = target.getBoundingClientRect();
  return [e.targetTouches[0].clientX - rect.x, e.targetTouches[0].clientY - rect.y];
};

const readyMouseTarget = canvas;
const readyMouseEvents = ["mousedown", "touchstart"] as const;
const readyMouse = (e: MouseEvent | TouchEvent) => {
  renderer.render();
  const [x, y] = eventCoords(e);
  const [r, g, b, a] = renderer.getCanvasPixelColor([x, y]);
  if (r === 0 && g === 0 && b === 0 && a === 0) return;

  e.preventDefault();
  partPositioning.update((val) => {
    if (val.tag === "will-move" || val.tag === "moving") return val;
    const clock = new THREE.Clock();
    clock.start();
    return { tag: "will-move", startRot: rotation.current, startPos: [x, y], clock, lastStatic: val };
  });

  trackMouseEvents.forEach((evt) => trackMouseTarget.addEventListener(evt, trackMouse, { passive: false }));
  forgetMouseEvents.forEach((evt) => forgetMouseTarget.addEventListener(evt, forgetMouse));
};
readyMouseEvents.forEach((evt) => readyMouseTarget.addEventListener(evt, readyMouse));

const trackMouseTarget = window;
const trackMouseEvents = ["mousemove", "touchmove"] as const;
const trackMouse = (e: MouseEvent | TouchEvent) => {
  const [x] = eventCoords(e);
  partPositioning.update((val) => {
    if (val.tag === "will-move" || val.tag === "moving") {
      return { tag: "moving", x, startPos: val.startPos, startRot: val.startRot, lastStatic: val.lastStatic, clock: val.clock };
    }
    return val;
  });
};

const forgetMouseTarget = window;
const forgetMouseEvents = ["mouseup", "touchend"] as const;
const forgetMouse = () => {
  trackMouseEvents.forEach((evt) => trackMouseTarget.removeEventListener(evt, trackMouse));
  forgetMouseEvents.forEach((evt) => forgetMouseTarget.removeEventListener(evt, forgetMouse));

  const toggle = (p: PartPositionStatic): PartPositionStatic =>
    ({ [-1]: { tag: "static", position: 0 } as const, [0]: { tag: "static", position: 1 } as const, [1]: { tag: "static", position: 0 } as const })[p.position];

  partPositioning.update((was) => {
    if (was.tag === "will-move") return toggle(was.lastStatic);
    if (was.tag === "static") return toggle(was);
    const elapsed = was.clock.getElapsedTime();
    const delta = Math.abs(was.x - was.startPos[0]);
    if (elapsed < 0.3 && delta < 15) return toggle(was.lastStatic);
    const rounded = Math.round(bound(rotation.current, [-1, 1]));
    if (rounded <= -1) return { tag: "static", position: -1 };
    if (1 <= rounded) return { tag: "static", position: 1 };
    return { tag: "static", position: 0 };
  });
};

/// LOOP

let autoRotating = false;
const btnRotate = document.getElementById("btn-rotate") as HTMLButtonElement;
const btnResetView = document.getElementById("btn-reset-view") as HTMLButtonElement;

btnRotate?.addEventListener("click", () => {
  autoRotating = !autoRotating;
  btnRotate.classList.toggle("active", autoRotating);
});

btnResetView?.addEventListener("click", () => {
  autoRotating = false;
  btnRotate?.classList.remove("active");
  rotation.startAnimationTo(0, immediate);
  partPositioning.send({ tag: "static", position: 0 });
  centerCameraNeeded = true;
});

let modelLoadStarted: undefined | DOMHighResTimeStamp;

function loop(nowMillis: DOMHighResTimeStamp) {
  requestAnimationFrame(loop);

  const newExports = tmfLoader.take();
  if (newExports !== undefined) {
    if (link3mf.href.startsWith("blob:")) URL.revokeObjectURL(link3mf.href);
    link3mf.href = URL.createObjectURL(newExports.tmf.blob);
    link3mf.download = newExports.tmf.filename;
    if (linkStl.href.startsWith("blob:")) URL.revokeObjectURL(linkStl.href);
    linkStl.href = URL.createObjectURL(newExports.stl.blob);
    linkStl.download = newExports.stl.filename;
    if (linkObj.href.startsWith("blob:")) URL.revokeObjectURL(linkObj.href);
    linkObj.href = URL.createObjectURL(newExports.obj.blob);
    linkObj.download = newExports.obj.filename;
  }

  const rotationUpdated = rotation.update();
  if (autoRotating) {
    rotation.current += 0.005;
    mesh.rotation.z = rotation.current * Math.PI + MESH_ROTATION_DELTA;
  } else if (rotationUpdated) {
    mesh.rotation.z = rotation.current * Math.PI + MESH_ROTATION_DELTA;
  }

  const keys = currentProduct.latest === "chair" ? CHAIR_KEYS : TABLE_KEYS;
  const anims = currentProduct.latest === "chair" ? chairAnimations : tableAnimations;
  const dimensionsUpdated = (keys as readonly string[]).reduce(
    (acc, key) => (anims as Record<string, Animate>)[key].update() || acc,
    false,
  );

  if (dimensionsUpdated) reloadModelNeeded = true;

  const reloadModelNow = reloadModelNeeded &&
    (modelLoadStarted === undefined || nowMillis - modelLoadStarted > 100);

  if (reloadModelNow) {
    modelLoadStarted = nowMillis;
    reloadModelNeeded = false;
    reloadModel().then(() => {
      modelLoadStarted = undefined;
      centerCameraNeeded = true;
    }).catch((e) => {
      console.error("reloadModel failed:", e);
      modelLoadStarted = undefined;
    });
  }

  if (renderer.resizeCanvas()) centerCameraNeeded = true;

  if (centerCameraNeeded) {
    centerCamera();
    centerCameraNeeded = false;
  }

  renderer.render();
}

loop(performance.now());
