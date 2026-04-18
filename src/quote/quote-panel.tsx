import type { PriceBreakdown } from "./pricing";

interface PriceRow {
  label: HTMLElement;
  value: HTMLElement;
}

function priceRow(labelText: string): PriceRow {
  const label = (<span className="quote-row-label">{labelText}</span>) as HTMLElement;
  const value = (<span className="quote-row-value">--</span>) as HTMLElement;
  return { label, value };
}

export function createQuotePanel(): {
  wrapper: HTMLElement;
  materialLabel: HTMLElement;
  finishLabel: HTMLElement;
  upholsteryLabel: HTMLElement;
  rows: {
    material: PriceRow;
    finish: PriceRow;
    upholstery: PriceRow;
    labor: PriceRow;
    overhead: PriceRow;
  };
  totalValue: HTMLElement;
  volumeInfo: HTMLElement;
  weightInfo: HTMLElement;
  pdfButton: HTMLButtonElement;
} {
  const materialLabel = (<span className="quote-detail-value">--</span>) as HTMLElement;
  const finishLabel = (<span className="quote-detail-value">--</span>) as HTMLElement;
  const upholsteryLabel = (<span className="quote-detail-value">--</span>) as HTMLElement;
  const volumeInfo = (<span className="quote-detail-value">--</span>) as HTMLElement;
  const weightInfo = (<span className="quote-detail-value">--</span>) as HTMLElement;

  const material = priceRow("Material");
  const finish = priceRow("Finish");
  const upholstery = priceRow("Upholstery");
  const labor = priceRow("Labor");
  const overhead = priceRow("Overhead + Margin");

  const totalValue = (<span className="quote-total-value">--</span>) as HTMLElement;

  const pdfButton = (
    <button type="button" className="quote-pdf-btn">
      Export PDF Quote
    </button>
  ) as HTMLButtonElement;

  const wrapper = (
    <div className="quote-panel">
      <h3 className="quote-heading">Quote Summary</h3>

      <div className="quote-details">
        <div className="quote-detail-row">
          <span className="quote-detail-label">Wood</span>
          {materialLabel}
        </div>
        <div className="quote-detail-row">
          <span className="quote-detail-label">Finish</span>
          {finishLabel}
        </div>
        <div className="quote-detail-row">
          <span className="quote-detail-label">Upholstery</span>
          {upholsteryLabel}
        </div>
        <div className="quote-detail-row">
          <span className="quote-detail-label">Volume</span>
          {volumeInfo}
        </div>
        <div className="quote-detail-row">
          <span className="quote-detail-label">Weight</span>
          {weightInfo}
        </div>
      </div>

      <div className="quote-breakdown">
        <div className="quote-row">
          {material.label}{material.value}
        </div>
        <div className="quote-row">
          {finish.label}{finish.value}
        </div>
        <div className="quote-row">
          {upholstery.label}{upholstery.value}
        </div>
        <div className="quote-row">
          {labor.label}{labor.value}
        </div>
        <div className="quote-row">
          {overhead.label}{overhead.value}
        </div>
      </div>

      <div className="quote-total">
        <span className="quote-total-label">Total</span>
        {totalValue}
      </div>

      {pdfButton}
    </div>
  );

  return {
    wrapper,
    materialLabel,
    finishLabel,
    upholsteryLabel,
    rows: { material, finish, upholstery, labor, overhead },
    totalValue,
    volumeInfo,
    weightInfo,
    pdfButton,
  };
}

export function updateQuotePanel(
  panel: ReturnType<typeof createQuotePanel>,
  breakdown: PriceBreakdown,
  materialName: string,
  finishName: string,
  upholsteryName: string,
  showUpholstery: boolean,
): void {
  const fmt = (n: number) => n.toFixed(2);
  const { currency } = breakdown;
  const sym = currency === "EUR" ? "\u20AC" : currency;

  panel.materialLabel.textContent = materialName;
  panel.finishLabel.textContent = finishName;
  panel.volumeInfo.textContent = `${breakdown.volumeCm3.toFixed(0)} cm\u00B3`;
  panel.weightInfo.textContent = `${breakdown.weightKg.toFixed(1)} kg`;

  // Show/hide upholstery rows based on product type
  const uphDetailRow = panel.upholsteryLabel.closest(".quote-detail-row") as HTMLElement | null;
  const uphBreakdownRow = panel.rows.upholstery.label.closest(".quote-row") as HTMLElement | null;
  if (uphDetailRow) uphDetailRow.style.display = showUpholstery ? "" : "none";
  if (uphBreakdownRow) uphBreakdownRow.style.display = showUpholstery ? "" : "none";

  if (showUpholstery) {
    panel.upholsteryLabel.textContent = upholsteryName;
    panel.rows.upholstery.value.textContent = `${sym}${fmt(breakdown.upholsteryCost)}`;
  }

  panel.rows.material.value.textContent = `${sym}${fmt(breakdown.materialCost)}`;
  panel.rows.finish.value.textContent = `${sym}${fmt(breakdown.finishCost)}`;
  panel.rows.labor.value.textContent = `${sym}${fmt(breakdown.laborCost)} (${breakdown.laborMinutes} min)`;
  panel.rows.overhead.value.textContent = `${sym}${fmt(breakdown.overhead + breakdown.profit)}`;

  panel.totalValue.textContent = `${sym}${fmt(breakdown.total)}`;
}
