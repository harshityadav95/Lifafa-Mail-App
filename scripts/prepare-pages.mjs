import { copyFile, mkdir, writeFile } from "node:fs/promises";

const output = new URL("../dist/client/", import.meta.url);

for (const route of ["privacy", "terms"]) {
  const directory = new URL(`${route}/`, output);
  await mkdir(directory, { recursive: true });
  await copyFile(
    new URL(`${route}.html`, output),
    new URL("index.html", directory),
  );
}

await writeFile(new URL(".nojekyll", output), "", "utf8");
