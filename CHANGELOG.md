# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project uses
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.1] - 2026-11-25

### Fixed
- The release workflow builds the SBOM from `package-lock.json` (`npm sbom --package-lock-only`).
  It used to run after an install without devDependencies, and `npm sbom` refused the incomplete
  tree, so the `v0.1.0` tag never produced a release. That tag is kept as it is; this is the first
  published release.

## [0.1.0] - 2026-11-25

First tagged release of the chair and table configurator with live pricing and PDF quote
(site: https://sergiudanstan.github.io/furniture-quotation/).

### Added
- Headless page smoke test (`npm test`) run in CI on every push and pull request, after a type-check and production build, including a real PDF quote export.
- CI, CodeQL, OpenSSF Scorecard and a tag-triggered release workflow with build provenance and a CycloneDX SBOM; Dependabot for actions and npm.
- `README.md`, `SECURITY.md`, `CONTRIBUTING.md` and this changelog.

### Changed
- Pages deploy workflow: actions pinned to commit SHAs, least-privilege permissions, no credential persistence, no package cache, `npm ci --ignore-scripts`.
- jsPDF 2.x to 4.2.1 (2.x had a critical `npm audit` advisory); the PDF export is exercised by the smoke test.
- Lockfile refreshed with `npm audit fix` (see `package-lock.json`); `npm audit` now reports 0 vulnerabilities.

[Unreleased]: https://github.com/sergiudanstan/furniture-quotation/compare/v0.1.1...HEAD
[0.1.1]: https://github.com/sergiudanstan/furniture-quotation/releases/tag/v0.1.1
[0.1.0]: https://github.com/sergiudanstan/furniture-quotation/releases/tag/v0.1.0
