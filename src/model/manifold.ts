import type { Vec2, CrossSection, Manifold } from "manifold-3d";
import type { ManifoldToplevel } from "manifold-3d";
import init from "manifold-3d";
import manifold_wasm from "manifold-3d/manifold.wasm?url";

// NOTE: all values in mm
// Axes: X = left/right, Y = front(+)/back(-), Z = up

// ── WASM loader ───────────────────────────────────────────────────────────────
class ManifoldModule {
  private static promise: Promise<ManifoldToplevel> | undefined = undefined;
  static get(): Promise<ManifoldToplevel> {
    if (this.promise !== undefined) return this.promise;
    this.promise = init({ locateFile: () => manifold_wasm }).then(
      async (wasm) => {
        await wasm.setup();
        return wasm;
      },
    );
    return this.promise;
  }
}

// ── Primitives ────────────────────────────────────────────────────────────────

function arcPts(cx: number, cy: number, r: number): Vec2[] {
  const N = 8;
  const pts: Vec2[] = [];
  for (let i = 0; i <= N; i++) {
    const a = (i * Math.PI) / (2 * N);
    pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
  return pts;
}

export async function roundedRect(
  w: number,
  h: number,
  r: number,
): Promise<CrossSection> {
  const { CrossSection } = await ManifoldModule.get();
  const cr = Math.max(0, Math.min(r, w / 2 - 0.1, h / 2 - 0.1));
  if (cr <= 0) {
    return new CrossSection([
      [w / 2, h / 2],
      [-w / 2, h / 2],
      [-w / 2, -h / 2],
      [w / 2, -h / 2],
    ] as Vec2[]);
  }
  const tr = arcPts(w / 2 - cr, h / 2 - cr, cr);
  const tl = arcPts(-(w / 2 - cr), h / 2 - cr, cr).reverse() as Vec2[];
  const bl = arcPts(-(w / 2 - cr), -(h / 2 - cr), cr).map(
    ([x, y]): Vec2 => [x, y],
  );
  // Build tl going right-to-left at the top, bl going down on left, br going left-to-right at bottom
  const tlPts: Vec2[] = tr
    .map(([x, y]): Vec2 => [-x, y])
    .reverse() as Vec2[];
  const blPts: Vec2[] = tr.map(([x, y]): Vec2 => [-x, -y]) as Vec2[];
  const brPts: Vec2[] = (tr.map(([x, y]): Vec2 => [x, -y]) as Vec2[]).reverse();
  void tl;
  void bl;
  return new CrossSection([...tr, ...tlPts, ...blPts, ...brPts] as Vec2[]);
}

// Rectangular box: W×D×H, centered in X and Y, bottom at Z=0
async function box(w: number, d: number, h: number): Promise<Manifold> {
  const cs = await roundedRect(w, d, 0);
  return cs.extrude(h);
}

// ── Chair params ──────────────────────────────────────────────────────────────

export interface ChairParams {
  seatWidth: number; // outer width of seat (mm)
  seatDepth: number; // front-to-back depth of seat (mm)
  seatHeight: number; // floor to top of seat surface (mm)
  seatThickness: number; // thickness of seat panel (mm)
  backrestHeight: number; // height of back posts above seat level (0 = no backrest)
  backrestTilt: number; // backward tilt of back posts in degrees (0 = vertical)
  legThickness: number; // square cross-section of legs (mm)
  armrestHeight: number; // height of armrest top above seat (0 = no armrests)
  armrestThickness: number; // vertical thickness of armrest bar (mm)
  radius: number; // corner radius on seat (mm)
}

// ── Assembly ──────────────────────────────────────────────────────────────────

export async function chairAssembly(params: ChairParams): Promise<Manifold> {
  const {
    seatWidth,
    seatDepth,
    seatHeight,
    seatThickness,
    backrestHeight,
    backrestTilt,
    legThickness: lt,
    armrestHeight,
    armrestThickness,
    radius,
  } = params;

  // Legs are flush with the seat corners (inset = half leg thickness)
  const legInset = lt / 2;

  // Leg centre XY positions
  const xL = -(seatWidth / 2 - legInset);
  const xR = seatWidth / 2 - legInset;
  const yF = seatDepth / 2 - legInset; // front (+Y)
  const yB = -(seatDepth / 2 - legInset); // back (-Y)

  // Derived sizes
  const apronH = lt * 2.0; // visible apron height below seat
  const apronT = lt * 0.67; // apron rail depth (front-to-back for front/back rails)
  const slatH = lt * 0.7; // back slat height
  const slatD = lt * 0.65; // back slat front-to-back depth
  const topRailH = lt * 1.0; // top rail height
  const panelW = xR - xL - lt; // width of slats (between inner faces of back posts)
  const tilRad = (backrestTilt * Math.PI) / 180;

  // ── SEAT PANEL ─────────────────────────────────────────────────────────────
  const seatCs = await roundedRect(seatWidth, seatDepth, radius);
  const seat = seatCs
    .extrude(seatThickness)
    .translate([0, 0, seatHeight - seatThickness]);

  // ── SEAT APRON (4 rails at seatHeight - apronH) ────────────────────────────
  // Front/back rails span full width; side rails span full depth.
  const apronZ = seatHeight - apronH;
  const [frontApronBox, backApronBox, leftApronBox, rightApronBox] =
    await Promise.all([
      box(seatWidth, apronT, apronH),
      box(seatWidth, apronT, apronH),
      box(apronT, seatDepth, apronH),
      box(apronT, seatDepth, apronH),
    ]);
  const frontApron = frontApronBox.translate([0, yF, apronZ]);
  const backApron = backApronBox.translate([0, yB, apronZ]);
  const leftApron = leftApronBox.translate([xL, (yF + yB) / 2, apronZ]);
  const rightApron = rightApronBox.translate([xR, (yF + yB) / 2, apronZ]);

  // ── FRONT LEGS (vertical, from floor to seatHeight) ─────────────────────────
  const legCs = await roundedRect(lt, lt, radius * 0.15);
  const fl = legCs.extrude(seatHeight).translate([xL, yF, 0]);
  const fr = legCs.extrude(seatHeight).translate([xR, yF, 0]);

  // ── BACK LEGS — lower section (vertical, floor to seatHeight) ──────────────
  const bl_lo = legCs.extrude(seatHeight).translate([xL, yB, 0]);
  const br_lo = legCs.extrude(seatHeight).translate([xR, yB, 0]);

  // ── FRONT LOWER STRETCHER ──────────────────────────────────────────────────
  const ss = lt * 0.5;
  const stretcherLen = xR - xL + lt;
  const stretcherZ = seatHeight * 0.25 - ss / 2;
  const [strBox] = await Promise.all([box(stretcherLen, ss, ss)]);
  const stretcher = strBox.translate([0, yF, stretcherZ]);

  // ── BACK UPPER ASSEMBLY (tilted) ───────────────────────────────────────────
  // Build in LOCAL space (Z = 0..backrestHeight, Y centred, X at ±xL/xR),
  // then apply rotate([backrestTilt, 0, 0]) + translate to seat-level position.
  // After this transform:
  //   • bottom of assembly → (0, yB, seatHeight)  ← meets top of lower back legs
  //   • top of back post  → yB − backrestHeight·sin(tilt), seatHeight + backrestHeight·cos(tilt)

  let backAssembly: Manifold | undefined = undefined;

  if (backrestHeight > 0) {
    // Back posts (left & right) in local space
    const postL = legCs.extrude(backrestHeight).translate([xL, 0, 0]);
    const postR = legCs.extrude(backrestHeight).translate([xR, 0, 0]);

    // Top rail: sits near the very top of the posts
    const [topRailBox] = await Promise.all([box(panelW, slatD, topRailH)]);
    const topRail = topRailBox.translate([0, 0, backrestHeight - topRailH]);

    // 4 back slats at 15%, 35%, 55%, 75% of backrestHeight
    const slatFractions = [0.15, 0.35, 0.55, 0.75];
    const slatBoxes = await Promise.all(
      slatFractions.map(() => box(panelW, slatD, slatH)),
    );
    const slats = slatBoxes.map((b, i) =>
      b.translate([0, 0, slatFractions[i] * backrestHeight]),
    );

    // Combine local assembly
    let localAssm = postL.add(postR).add(topRail);
    for (const slat of slats) {
      localAssm = localAssm.add(slat);
    }

    // Tilt backward and place at top of lower back legs.
    // Small Z correction so the post front edge doesn't dip below floor:
    const zCorr = (lt / 2) * Math.sin(tilRad);
    backAssembly = localAssm
      .rotate([backrestTilt, 0, 0])
      .translate([0, yB, seatHeight + zCorr]);
  }

  // ── ARMRESTS (optional) ────────────────────────────────────────────────────
  let armL: Manifold | undefined = undefined;
  let armR: Manifold | undefined = undefined;
  if (armrestHeight > 0) {
    const armLen = yF - yB + lt;
    const armZ = seatHeight + armrestHeight - armrestThickness;
    const [armLBox, armRBox] = await Promise.all([
      box(lt, armLen, armrestThickness),
      box(lt, armLen, armrestThickness),
    ]);
    armL = armLBox.translate([xL, (yF + yB) / 2, armZ]);
    armR = armRBox.translate([xR, (yF + yB) / 2, armZ]);
  }

  // ── UNION ──────────────────────────────────────────────────────────────────
  let assembly = seat
    .add(frontApron)
    .add(backApron)
    .add(leftApron)
    .add(rightApron)
    .add(fl)
    .add(fr)
    .add(bl_lo)
    .add(br_lo)
    .add(stretcher);

  if (backAssembly !== undefined) assembly = assembly.add(backAssembly);
  if (armL !== undefined && armR !== undefined) {
    assembly = assembly.add(armL).add(armR);
  }

  return assembly;
}
