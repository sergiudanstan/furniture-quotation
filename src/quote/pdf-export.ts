import type { FurnitureParams } from "./pricing";
import type { PriceBreakdown } from "./pricing";
import type { MaterialSelection, PricingConfig } from "./materials";

export interface QuoteData {
  productType: "chair" | "table";
  furnitureParams: FurnitureParams;
  selection: MaterialSelection;
  breakdown: PriceBreakdown;
  config: PricingConfig;
  snapshotDataUrl: string;
}

function quoteNumber(): string {
  const d = new Date();
  const pad = (n: number, w = 2) => String(n).padStart(w, "0");
  return `Q-${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

function chairDimensions(p: FurnitureParams & { type: "chair" }): [string, string][] {
  const params = p.params;
  return [
    ["Seat width", `${params.seatWidth} mm`],
    ["Seat depth", `${params.seatDepth} mm`],
    ["Seat height", `${params.seatHeight} mm`],
    ["Seat thickness", `${params.seatThickness} mm`],
    ["Backrest height", params.backrestHeight > 0 ? `${params.backrestHeight} mm` : "None"],
    ["Backrest tilt", `${params.backrestTilt}\u00B0`],
    ["Leg thickness", `${params.legThickness} mm`],
    ["Armrest height", params.armrestHeight > 0 ? `${params.armrestHeight} mm` : "None"],
    ["Corner radius", `${params.radius} mm`],
  ];
}

function tableDimensions(p: FurnitureParams & { type: "table" }): [string, string][] {
  const params = p.params;
  return [
    ["Top width", `${params.topWidth} mm`],
    ["Top depth", `${params.topDepth} mm`],
    ["Top thickness", `${params.topThickness} mm`],
    ["Top corner radius", `${params.topRadius} mm`],
    ["Leg height", `${params.legHeight} mm`],
    ["Leg width", `${params.legWidth} mm`],
    ["Leg inset", `${params.legInset} mm`],
  ];
}

export async function downloadQuotePDF(data: QuoteData): Promise<void> {
  const { default: jsPDF } = await import("jspdf");
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pw = 210; // A4 width
  const margin = 20;
  const cw = pw - 2 * margin; // content width
  let y = margin;

  const sym = data.breakdown.currency === "EUR" ? "\u20AC" : data.breakdown.currency;
  const fmt = (n: number) => n.toFixed(2);
  const qn = quoteNumber();
  const today = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const productLabel = data.productType === "chair" ? "Chair" : "Table";

  // Header
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text(`${productLabel} Quotation`, margin, y);
  y += 10;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100);
  doc.text(`Quote: ${qn}`, margin, y);
  doc.text(`Date: ${today}`, pw - margin, y, { align: "right" });
  y += 3;
  doc.setDrawColor(200);
  doc.line(margin, y, pw - margin, y);
  y += 10;
  doc.setTextColor(0);

  // 3D Preview
  if (data.snapshotDataUrl) {
    const imgW = cw * 0.6;
    const imgH = imgW * 0.75;
    const imgX = margin + (cw - imgW) / 2;
    doc.addImage(data.snapshotDataUrl, "PNG", imgX, y, imgW, imgH);
    y += imgH + 8;
  }

  // Dimensions section
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.text("Dimensions", margin, y);
  y += 7;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  const dims = data.furnitureParams.type === "chair"
    ? chairDimensions(data.furnitureParams)
    : tableDimensions(data.furnitureParams);

  for (const [label, value] of dims) {
    doc.text(label, margin, y);
    doc.text(value, pw - margin, y, { align: "right" });
    y += 5;
  }
  y += 5;

  // Materials section
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.text("Materials", margin, y);
  y += 7;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  const mat = data.config.materials[data.selection.woodType];
  const fin = mat.finishes[data.selection.finish];
  const uph = data.config.upholstery[data.selection.upholstery];

  const mats: [string, string][] = [
    ["Wood", mat.displayName],
    ["Finish", fin.displayName],
  ];
  if (data.productType === "chair") {
    mats.push(["Upholstery", uph.displayName]);
  }
  mats.push(
    ["Estimated volume", `${data.breakdown.volumeCm3.toFixed(0)} cm\u00B3`],
    ["Estimated weight", `${data.breakdown.weightKg.toFixed(1)} kg`],
  );

  for (const [label, value] of mats) {
    doc.text(label, margin, y);
    doc.text(value, pw - margin, y, { align: "right" });
    y += 5;
  }
  y += 5;

  // Price breakdown
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.text("Price Breakdown", margin, y);
  y += 7;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  const prices: [string, string][] = [
    ["Material", `${sym}${fmt(data.breakdown.materialCost)}`],
    ["Finish", `${sym}${fmt(data.breakdown.finishCost)}`],
  ];
  if (data.productType === "chair") {
    prices.push(["Upholstery", `${sym}${fmt(data.breakdown.upholsteryCost)}`]);
  }
  prices.push(
    [`Labor (${data.breakdown.laborMinutes} min)`, `${sym}${fmt(data.breakdown.laborCost)}`],
    ["Overhead + Margin", `${sym}${fmt(data.breakdown.overhead + data.breakdown.profit)}`],
  );

  for (const [label, value] of prices) {
    doc.text(label, margin, y);
    doc.text(value, pw - margin, y, { align: "right" });
    y += 5;
  }

  y += 3;
  doc.setDrawColor(0);
  doc.line(margin, y, pw - margin, y);
  y += 7;

  // Total
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Total", margin, y);
  doc.text(`${sym}${fmt(data.breakdown.total)}`, pw - margin, y, { align: "right" });
  y += 12;

  // Footer
  doc.setFontSize(9);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(120);
  doc.text("This quotation is valid for 30 days from the date of issue.", margin, y);
  y += 4;
  doc.text("Prices include materials, labor, and standard delivery.", margin, y);

  // Download
  doc.save(`${qn}.pdf`);
}
