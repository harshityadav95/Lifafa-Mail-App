# Lifafa Mail product site

The public product and OAuth app-domain website for Lifafa Mail, designed by
SolvePao Research. It includes:

- a feature-led Lifafa Mail site grounded in the native Lifafa-iOS codebase;
- graphics for mail, calendar, local to-dos, contacts, offline mail and privacy controls;
- a public Privacy Policy with Google API Limited Use disclosures;
- public Terms of Service; and
- a static-export GitHub Pages workflow.

The site is static: no mailbox connection, sign-in, server data, analytics or forms.
App screenshots and simulated app interfaces are intentionally omitted.

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
