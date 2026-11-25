# Security Policy

This is a static, browser-only app: no backend, no accounts, no cookies, and no data is sent
anywhere by the app itself. Geometry (Manifold WASM), the 3D preview (three.js) and the PDF quote (jsPDF) are all
computed in the visitor's browser from numbers typed into sliders. The only third-party request
the page makes is the Kanit web font from Google Fonts.

## Supported versions

| Version | Supported |
|---|---|
| 0.1.x | Current |

Single maintainer; only the latest release receives fixes.

## Reporting a vulnerability

**Please do not open a public issue for a security problem.** Report it privately:
**[Report a vulnerability](https://github.com/sergiudanstan/furniture-quotation/security/advisories/new)**
(Security > Advisories > Report a vulnerability).

| Stage | Target |
|---|---|
| Acknowledgement | within 3 business days |
| Triage | within 10 business days |
| Fix, or a documented decision not to fix | within 90 days |

These are best-effort targets from a single unpaid maintainer, not a contractual SLA.
There is no bug bounty; credit is offered in the advisory and changelog.

## Scope

In scope:

- script injection into the page, for example through slider or number-field values, or through the pricing data;
- the page loading code from an origin other than itself (the intended external request is the Google Fonts stylesheet and font files only);
- a crafted input that makes the PDF export write attacker-controlled content or crash the page;
- anything in this repository's workflows that could publish a release or a Pages site not built from `main`.

Out of scope: vulnerabilities in three.js, manifold-3d, jsPDF or Google Fonts themselves (report upstream, though we will
update the dependency), and the accuracy of the price or geometry, which is a correctness bug: file it as a normal issue.

Known limitations, stated rather than hidden:

- The `Content-Security-Policy` in `netlify.toml` allows `'unsafe-eval'` and `'wasm-unsafe-eval'`
  because the Emscripten build of manifold-3d needs them. It is applied only if the site is served
  by Netlify; GitHub Pages cannot set response headers, so the Pages site runs without that policy.
- The app is a client-side calculator: nothing stops a visitor from editing prices in their own browser, so a generated quote is not an authenticated document.

## Supply chain

CI runs a headless smoke test on every push, `npm audit` on the npm dependencies, `pip-audit` on
the hash-pinned CI toolchain, CodeQL, and `zizmor` on the workflows. Actions are pinned to full
commit SHAs and kept current by Dependabot. Releases attach a source archive with Sigstore build
provenance and a CycloneDX SBOM of the runtime npm dependencies:

```
gh attestation verify furniture-quotation-v0.1.0.tar.gz --repo sergiudanstan/furniture-quotation
```
