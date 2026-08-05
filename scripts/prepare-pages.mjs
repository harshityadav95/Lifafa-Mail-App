import { copyFile, cp, mkdir, writeFile } from "node:fs/promises";

const output = new URL("../dist/client/", import.meta.url);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/^\/+|\/+$/g, "");

// Vinext writes generated assets beneath the configured asset prefix. GitHub
// Pages already mounts the uploaded artifact at that project path, so the
// assets must also exist at the artifact root for public URLs to resolve.
if (basePath) {
  await cp(
    new URL(`${basePath}/_next/`, output),
    new URL("_next/", output),
    { recursive: true },
  );
}

for (const route of ["privacy", "terms"]) {
  const directory = new URL(`${route}/`, output);
  await mkdir(directory, { recursive: true });
  await copyFile(
    new URL(`${route}.html`, output),
    new URL("index.html", directory),
  );
}

await writeFile(new URL(".nojekyll", output), "", "utf8");
