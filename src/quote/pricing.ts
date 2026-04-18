import type { ChairParams } from "../model/manifold";
import type { TableParams } from "../model/table";
import type { PricingConfig, MaterialSelection } from "./materials";

export interface PriceBreakdown {
  volumeCm3: number;
  weightKg: number;
  surfaceAreaM2: number;
  materialCost: number;
  finishCost: number;
  upholsteryCost: number;
  laborMinutes: number;
  laborCost: number;
  subtotal: number;
  overhead: number;
  profit: number;
  total: number;
  currency: string;
}

// ── Chair volume & surface area ──────────────────────────────────────────

function chairVolumeMm3(p: ChairParams): number {
  const lt = p.legThickness;
  const legInset = lt / 2;
  const xL = -(p.seatWidth / 2 - legInset);
  const xR = p.seatWidth / 2 - legInset;
  const yF = p.seatDepth / 2 - legInset;
  const yB = -(p.seatDepth / 2 - legInset);

  const apronH = lt * 2.0;
  const apronT = lt * 0.67;
  const slatH = lt * 0.7;
  const slatD = lt * 0.65;
  const topRailH = lt * 1.0;
  const panelW = xR - xL - lt;
  const ss = lt * 0.5;
  const stretcherLen = xR - xL + lt;

  let vol = 0;
  vol += p.seatWidth * p.seatDepth * p.seatThickness;
  vol += p.seatWidth * apronT * apronH;
  vol += p.seatWidth * apronT * apronH;
  vol += apronT * p.seatDepth * apronH;
  vol += apronT * p.seatDepth * apronH;
  vol += 4 * lt * lt * p.seatHeight;
  vol += stretcherLen * ss * ss;
  if (p.backrestHeight > 0) {
    vol += 2 * lt * lt * p.backrestHeight;
    vol += panelW * slatD * topRailH;
    vol += 4 * panelW * slatD * slatH;
  }
  if (p.armrestHeight > 0) {
    const armLen = yF - yB + lt;
    vol += 2 * lt * armLen * p.armrestThickness;
  }
  return vol;
}

function chairSurfaceAreaMm2(p: ChairParams): number {
  const lt = p.legThickness;
  const legInset = lt / 2;
  const xL = -(p.seatWidth / 2 - legInset);
  const xR = p.seatWidth / 2 - legInset;
  const yF = p.seatDepth / 2 - legInset;
  const yB = -(p.seatDepth / 2 - legInset);

  const apronH = lt * 2.0;
  const apronT = lt * 0.67;
  const slatH = lt * 0.7;
  const slatD = lt * 0.65;
  const topRailH = lt * 1.0;
  const panelW = xR - xL - lt;
  const ss = lt * 0.5;
  const stretcherLen = xR - xL + lt;

  const boxSA = (w: number, d: number, h: number) => 2 * (w * d + w * h + d * h);
  let sa = 0;
  sa += boxSA(p.seatWidth, p.seatDepth, p.seatThickness);
  sa += 2 * boxSA(p.seatWidth, apronT, apronH);
  sa += 2 * boxSA(apronT, p.seatDepth, apronH);
  sa += 4 * boxSA(lt, lt, p.seatHeight);
  sa += boxSA(stretcherLen, ss, ss);
  if (p.backrestHeight > 0) {
    sa += 2 * boxSA(lt, lt, p.backrestHeight);
    sa += boxSA(panelW, slatD, topRailH);
    sa += 4 * boxSA(panelW, slatD, slatH);
  }
  if (p.armrestHeight > 0) {
    const armLen = yF - yB + lt;
    sa += 2 * boxSA(lt, armLen, p.armrestThickness);
  }
  return sa;
}

function chairLaborMinutes(p: ChairParams, labor: PricingConfig["labor"]): number {
  let mins = labor.baseMinutes;
  if (p.backrestHeight > 0) {
    mins += 4 * (labor.perBackSlat ?? 0);
    mins += p.backrestTilt * (labor.complexityPerDegreeOfTilt ?? 0);
  }
  if (p.armrestHeight > 0) {
    mins += 2 * (labor.perArmrest ?? 0);
  }
  return mins;
}

// ── Table volume & surface area ──────────────────────────────────────────

function tableVolumeMm3(p: TableParams): number {
  let vol = 0;
  vol += p.topWidth * p.topDepth * p.topThickness;
  vol += 4 * p.legWidth * p.legWidth * p.legHeight;
  return vol;
}

function tableSurfaceAreaMm2(p: TableParams): number {
  const boxSA = (w: number, d: number, h: number) => 2 * (w * d + w * h + d * h);
  let sa = 0;
  sa += boxSA(p.topWidth, p.topDepth, p.topThickness);
  sa += 4 * boxSA(p.legWidth, p.legWidth, p.legHeight);
  return sa;
}

function tableLaborMinutes(p: TableParams, labor: PricingConfig["labor"]): number {
  let mins = labor.baseMinutes * 1.5; // tables take longer than chairs
  mins += p.legInset * (labor.perLegInsetComplexity ?? 0.5);
  mins += p.topRadius * (labor.perRadiusComplexity ?? 1.0);
  return mins;
}

// ── Unified pricing ──────────────────────────────────────────────────────

export type FurnitureParams =
  | { type: "chair"; params: ChairParams }
  | { type: "table"; params: TableParams };

export function computePrice(
  furniture: FurnitureParams,
  selection: MaterialSelection,
  config: PricingConfig,
): PriceBreakdown {
  const mat = config.materials[selection.woodType];
  const finish = mat.finishes[selection.finish];
  const upholstery = config.upholstery[selection.upholstery];

  let volumeMm3: number;
  let surfaceAreaMm2: number;
  let laborMinutes: number;
  let upholsteryCost: number;

  if (furniture.type === "chair") {
    const p = furniture.params;
    volumeMm3 = chairVolumeMm3(p);
    surfaceAreaMm2 = chairSurfaceAreaMm2(p);
    laborMinutes = chairLaborMinutes(p, config.labor);
    const seatAreaM2 = (p.seatWidth * p.seatDepth) / 1_000_000;
    upholsteryCost = seatAreaM2 * upholstery.pricePerM2;
  } else {
    const p = furniture.params;
    volumeMm3 = tableVolumeMm3(p);
    surfaceAreaMm2 = tableSurfaceAreaMm2(p);
    laborMinutes = tableLaborMinutes(p, config.labor);
    upholsteryCost = 0; // no upholstery on tables
  }

  const volumeCm3 = (volumeMm3 / 1000) * config.wasteFactor;
  const weightKg = volumeCm3 * mat.densityKgPerCm3;
  const surfaceAreaM2 = surfaceAreaMm2 / 1_000_000;

  const materialCost = volumeCm3 * mat.pricePerCm3;
  const finishCost = surfaceAreaM2 * finish.pricePerM2;

  const laborCost = (laborMinutes / 60) * config.laborRatePerHour;

  const subtotal = materialCost + finishCost + upholsteryCost + laborCost;
  const overhead = subtotal * (config.overheadMultiplier - 1);
  const beforeProfit = subtotal + overhead;
  const profit = beforeProfit * (config.profitMarginPercent / 100);
  const minimumPrice = furniture.type === "table" ? 220 : config.minimumPrice;
  const total = Math.max(beforeProfit + profit, minimumPrice);

  return {
    volumeCm3,
    weightKg,
    surfaceAreaM2,
    materialCost,
    finishCost,
    upholsteryCost,
    laborMinutes,
    laborCost,
    subtotal,
    overhead,
    profit,
    total,
    currency: config.currency,
  };
}
