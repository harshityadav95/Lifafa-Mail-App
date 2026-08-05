import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function exportedPage(path) {
  return readFile(new URL(`../dist/client/${path}`, import.meta.url), "utf8");
}

test("exports the Lifafa Mail product page", async () => {
  const html = await exportedPage("index.html");
  assert.match(html, /Email,/);
  assert.match(html, /reimagined\./);
  assert.match(html, /Product concept · not a screenshot/);
  assert.match(html, /Permission, with purpose/);
  assert.match(html, /SolvePao Research/);
  assert.match(html, /href="(?:\/Lifafa-Mail-App)?\/privacy\/"/);
  assert.match(html, /href="(?:\/Lifafa-Mail-App)?\/terms\/"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);

  const stylesheet = html.match(/<link[^>]+href="([^"]+\.css)"[^>]*>/)?.[1];
  assert.ok(stylesheet, "the exported page should reference a stylesheet");

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  assert.ok(
    stylesheet.startsWith(`${basePath}/`),
    "the stylesheet URL should use the configured Pages base path",
  );

  const artifactPath = stylesheet.slice(basePath.length).replace(/^\//, "");
  await access(new URL(`../dist/client/${artifactPath}`, import.meta.url));
});

test("exports complete OAuth app-domain pages", async () => {
  const [privacy, terms] = await Promise.all([
    exportedPage("privacy/index.html"),
    exportedPage("terms/index.html"),
  ]);

  assert.match(privacy, /Privacy Policy/);
  assert.match(privacy, /Google API Services User Data Policy/);
  assert.match(privacy, /Limited Use requirements/);
  assert.match(privacy, /How data is used/);
  assert.match(terms, /Terms of Service/);
  assert.match(terms, /Development and preview status/);
});

test("keeps the website light-only", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /color-scheme:\s*light/);
  assert.doesNotMatch(css, /prefers-color-scheme:\s*dark/);
});
