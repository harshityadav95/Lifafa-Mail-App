# Lifafa Mail product site

The public product and OAuth app-domain website for Lifafa Mail, designed by
SolvePao Research. It includes:

- the Lifafa Mail landing page;
- a public Privacy Policy with Google API Limited Use disclosures;
- public Terms of Service; and
- a static-export GitHub Pages workflow.

## Local development

```bash
npm ci
npm run dev
```

## Validation

```bash
npm test
npm run lint
```

`npm run build` writes the GitHub Pages-ready static site to `dist/client/`. The
included workflow publishes that directory after changes reach `main`.
