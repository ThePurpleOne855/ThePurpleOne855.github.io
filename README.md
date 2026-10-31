# Jose Santana — ASCII / Cyberpunk Portfolio

A dependency-free portfolio. The deployable website is `dist/`; edit its HTML, CSS, or JavaScript directly. No build or package installation is needed.

## Preview

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Open http://127.0.0.1:4173.

## Content

The source is the October 27, 2026 `Documents/Credentials/SWE_RES.pdf`. A downloadable copy is included in `dist/assets/`. LinkedIn blocked retrieval; its supplied profile URL is linked, with no additional profile claims inferred. All project repository links were extracted from the PDF.

Update employment, education plans, and the resume together when details change. Project summaries are HTML and remain readable without JavaScript. Native disclosures work without scripts. Project filters use the `focus` URL parameter and support browser history.

## Checks

With Node 22+, Chromium, the installed Taste Skill, and the preview running:

```sh
node scripts/check.mjs
```

This drives the actual browser through filters, shareable URLs, history, keyboard disclosures, animation controls, clipboard success/failure, reduced motion, six responsive widths, resume availability, and no-JavaScript fallback.

The ASCII illustrations are original text artwork. Fonts are subsetted and self-hosted under the SIL Open Font License; see `dist/assets/FONT-LICENSES.txt`.

## Hosting

GitHub Pages serves the `gh-pages` branch, which holds the contents of `dist/`. After committing changes to `main`, redeploy with `git subtree push --prefix dist origin gh-pages`. The site can also be served by any static host. No API keys, database, analytics, or server-side runtime are required.
