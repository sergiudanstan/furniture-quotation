export interface FinishConfig {
  displayName: string;
  pricePerM2: number;
}

export interface MaterialConfig {
  displayName: string;
  pricePerCm3: number;
  densityKgPerCm3: number;
  finishes: Record<string, FinishConfig>;
}

export interface UpholsteryConfig {
  displayName: string;
  pricePerM2: number;
}

export interface LaborConfig {
  baseMinutes: number;
  perArmrest?: number;
  perBackSlat?: number;
  complexityPerDegreeOfTilt?: number;
  perLegInsetComplexity?: number;
  perRadiusComplexity?: number;
}

export interface PricingConfig {
  currency: string;
  laborRatePerHour: number;
  overheadMultiplier: number;
  wasteFactor: number;
  profitMarginPercent: number;
  minimumPrice: number;
  materials: Record<string, MaterialConfig>;
  upholstery: Record<string, UpholsteryConfig>;
  labor: LaborConfig;
}

export interface MaterialSelection {
  woodType: string;
  finish: string;
  upholstery: string;
}

export const DEFAULT_SELECTION: MaterialSelection = {
  woodType: "oak",
  finish: "natural",
  upholstery: "none",
};
