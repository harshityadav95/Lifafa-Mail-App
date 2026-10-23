# Lifafa Mail product site

Responsive static product and OAuth app-domain website for the native Lifafa Mail app, designed by SolvePao Research.

The redesign follows the supplied Fanout hero composition with Lifafa-specific copy and original artwork. Feature copy is grounded in the Lifafa-iOS implementation. The interactive workspace uses **fictional sample mail**, browser-memory state and no mailbox/API connections. It includes inbox search, message selection, a calendar illustration, work-item completion/undo, accessible feature tabs, a filterable 43-feature comparison and a downloadable CSV.

Privacy and Terms routes are retained. The site has no authentication, form collection, analytics, marketing pixels, backend or runtime server requirement. App availability is described as **in active development**; public downloads and pricing are not announced.

## Local preview

```bash
npm ci
npm run dev -- --port 4173
```

Open `http://localhost:4173/`.

## Static export

```bash
npm test
```

This builds and tests the complete static export in `dist/client/`. Serve that directory with any static host. The existing GitHub Pages workflow publishes this directory when changes reach `main`. Deployment status is available in the repository’s Actions tab.

Project-path hosting is supported with `NEXT_PUBLIC_BASE_PATH=/Lifafa-Mail-App`. Set `NEXT_PUBLIC_SITE_URL` to the final public origin and path for social metadata when hosting elsewhere. Preserve the existing deployment workflow until publication is requested.

## Content and assets

- `app/landing-experience.tsx`: page sections and local demo behavior.
- `app/comparison-data.ts`: comparison claims; reviewed 24 October 2026. “Not listed” means unverified, not absent.
- `public/lifafa-feature-comparison.csv`: matching downloadable feature inventory; update when comparison data changes.
- `public/assets/mail-still-life-cutout.png`: original generated paper-envelope artwork.
- `public/og-lifafa.png`: social artwork.
- `public/fonts/`: self-hosted Geist and Silkscreen with OFL licenses. No external font requests.
- `docs/site-research.md`: research, source boundaries, capability mapping and image prompts.
- `design-qa.md`: browser QA results. Temporary captures and scraped material live in ignored `build/`.

The app-only TypeScript check excludes unused template `db/` and `worker/` stubs. A full `tsc --noEmit` currently reports missing pre-existing Cloudflare ambient types (`cloudflare:workers`, `Fetcher`, `D1Database`); the static export build does not need these stubs.
