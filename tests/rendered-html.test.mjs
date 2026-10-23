import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function exportedPage(path) {
  return readFile(new URL(`../dist/client/${path}`, import.meta.url), "utf8");
}

test("exports the Lifafa Mail product page", async () => {
  const html = await exportedPage("index.html");
  assert.match(html, /The last email app/);
  assert.match(html, /you’ll ever/);
  assert.match(html, /Fictional sample mail/);
  assert.match(html, /Feature comparison/);
  assert.match(html, /GotEmail/);
  assert.match(html, /Inbox Zero/);
  assert.match(html, /Not available/);
  assert.match(html, /Intelligence is off by default/);
  assert.match(html, /does not send, pay, approve/);
  assert.match(html, /privacy\//);
  assert.match(html, /terms\//);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
  const basePrefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  assert.ok(html.includes(`${basePrefix}/assets/mail-still-life-cutout.png`));
  await access(
    new URL(
      "../dist/client/assets/mail-still-life-cutout.png",
      import.meta.url,
    ),
  );

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
  assert.match(privacy, /23 October 2026/);
  assert.match(privacy, /Privacy &amp; Diagnostics/);
  assert.match(privacy, /separate, default-off choices/);
  assert.match(privacy, /Reports are not anonymous/);
  assert.match(privacy, /Historical cloud records are not silently erased/);
  assert.match(privacy, /private privacy\/deletion contact/);
  assert.doesNotMatch(
    privacy,
    /anonymous install identifier|Attachments are excluded from device backups/,
  );
  assert.match(terms, /Terms of Service/);
  assert.match(terms, /Development and preview status/);
});

test("keeps the website light-only", async () => {
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );
  assert.match(css, /color-scheme:\s*light/);
  assert.doesNotMatch(css, /prefers-color-scheme:\s*dark/);
});
