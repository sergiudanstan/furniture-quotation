# furniture-quotation

[![CI](https://github.com/sergiudanstan/furniture-quotation/actions/workflows/ci.yml/badge.svg)](https://github.com/sergiudanstan/furniture-quotation/actions/workflows/ci.yml)
[![CodeQL](https://github.com/sergiudanstan/furniture-quotation/actions/workflows/codeql.yml/badge.svg)](https://github.com/sergiudanstan/furniture-quotation/actions/workflows/codeql.yml)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/sergiudanstan/furniture-quotation/badge)](https://scorecard.dev/viewer/?uri=github.com/sergiudanstan/furniture-quotation)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Parametric furniture configurator with a live price and a downloadable PDF quote, running entirely
in the browser. It extends [chair-quotation](https://github.com/sergiudanstan/chair-quotation) with a
second product, a table, selectable with the Chair / Table buttons. Geometry is built with Manifold
WASM, previewed with three.js and downloadable as 3MF, STL or OBJ.

**Live:** https://sergiudanstan.github.io/furniture-quotation/

## What it configures

- **Chair**: the ten chair parameters of chair-quotation, with wood, finish and upholstery choices.
- **Table** (`src/model/table.ts`): a rounded-rectangle top on four square legs. Seven parameters
  in mm: top width 400-2400 (default 1200), top depth 300-1600 (800), top thickness 10-100 (30),
  top corner radius 0-100 (20), leg height 300-1200 (720), leg width 20-200 (60), leg inset 0-300 (40).
  Wood and finish only; no upholstery.

## Pricing logic

`src/quote/pricing.ts` with the rates in `src/data/pricing-config.json` (EUR). Volume and surface
area are computed analytically from the parameters (boxes; the table's corner radius is not
subtracted, so prices are slight over-estimates), then:

1. Material = volume x 1.08 waste factor x price per cm3 of the wood (oak, walnut, beech, pine).
2. Finish = surface area x price per m2 of the finish.
3. Chair only: upholstery = seat top area x price per m2.
4. Labor at 45 EUR/h. Chair: 120 base minutes, +10 per backrest slat and +2 per degree of tilt
   with a backrest, +30 per armrest. Table: 1.5 x 120 base minutes, +0.5 per mm of leg inset, +1 per
   mm of top corner radius.
5. Overhead x1.15, then a 25 % profit margin; the total is never below the minimum price (180 EUR
   for a chair, 220 EUR for a table; the table minimum is hard-coded in `pricing.ts`).

**Export PDF Quote** writes an A4 PDF ("Chair Quotation" or "Table Quotation") with a 3D snapshot,
dimensions, materials, price breakdown and total, valid 30 days as printed on it. It is generated
in the browser with jsPDF; nothing is uploaded.

## Deployment

`.github/workflows/deploy.yml` builds and publishes `dist/` to GitHub Pages on every push to `main`.
Known issue: it currently builds with `--base /chair-quotation/` (a leftover from the old repo
name), so the Pages site loads its assets from the wrong path; open pull request #1 fixes this.
`netlify.toml` is only used if the site is also connected to Netlify.

## Development

```bash
npm ci
npm run dev        # Vite dev server
npm run build      # tsc type-check + production build into dist/
npm test           # headless Chrome smoke test of dist/ (run the build first)
```

`npm test` needs Google Chrome installed (set `PW_CHANNEL=chromium` to use Playwright's Chromium).
CI runs the type-check and build, the smoke test, `npm audit`, `pip-audit` on the CI toolchain,
CodeQL and `zizmor` on the workflows.

See [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md) and [CHANGELOG.md](CHANGELOG.md).
