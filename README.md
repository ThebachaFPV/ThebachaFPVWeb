# Thebacha FPV Racing League

[![pages-build-deployment](https://github.com/spydmobile/ThebachaFPV/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/spydmobile/ThebachaFPV/actions/workflows/pages/pages-build-deployment)

This repo holds our digital assets, our website, and our league documents publicly.

To view the website go to:
<a href="https://www.thebachafpv.org" target="_blank" rel="noopener noreferrer">https://www.thebachafpv.org</a>

## How to use this repo

### Website

- The website is built with [Vite](https://vitejs.dev/) and React.
- Source code is in the `src/` directory.
- To run locally:
  1. Clone the repo: `git clone https://github.com/thebachafpv/ThebachaFPVWeb.git`
  2. Install dependencies: `npm install`
  3. Start the dev server: `npm run dev`
  4. Open [http://localhost:5173](http://localhost:5173) in your browser.
- To build for production: `npm run build`
- To preview the production build: `npm run preview`
- To run the schedule unit tests: `node --experimental-strip-types tests/eventSchedule.test.mjs`

#### Deploying

**The live site is published by a GitHub Actions workflow, not by the
`gh-pages` branch.** GitHub Pages for this repo is configured with
`build_type: workflow`, so `.github/workflows/e2e-tests.yml` builds `dist/`
and publishes it with `actions/upload-pages-artifact` +
`actions/deploy-pages`. It runs daily at 12:00 UTC, and on demand.

- To deploy now: `gh workflow run e2e-tests.yml -R ThebachaFPV/ThebachaFPVWeb`
- Pushing to `main` does **not** deploy on its own — the workflow has no
  `push` trigger.

> This section previously read "To deploy to GitHub Pages: `gh-pages -d dist`".
> That is the `deploy` script in package.json and it still runs, but it pushes
> to the `gh-pages` branch, which **no longer serves the site**. Following it
> reports success, changes the branch, and leaves www.thebachafpv.org exactly
> as it was — corrected 2026-11-04 after doing precisely that. Verify what is
> actually being served with:
>
> ```
> gh api repos/ThebachaFPV/ThebachaFPVWeb/pages --jq .build_type
> curl -s https://www.thebachafpv.org/index.html | grep -o 'assets/index-[^"]*\.js'
> ```
>
> The second command names the bundle the CDN is handing out, which is the
> only thing that settles whether a deploy landed.

### League Documents

- League documents and resources are in the `foundations/` and `regs/` folders.
- These are Markdown files for reference and sharing.
- If you want to link to a document, use the GitHub URL, e.g.:
  `https://github.com/thebachafpv/ThebachaFPVWeb/blob/main/foundations/1.1.md`

### Contributing

- Fork the repo and create a branch for your changes.
- Open a pull request with a clear description of your changes.

### Issues

- If you find a bug or have a suggestion, please open an issue in the GitHub repo.

---

For questions, contact the league organizers or open an issue.
