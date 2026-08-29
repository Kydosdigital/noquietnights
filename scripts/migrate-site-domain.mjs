import fs from "node:fs";
import path from "node:path";

const root = path.resolve("app");
const legacy = "https://no-quiet-nights.vercel.app";
const canonical = "https://www.noquietnights.co.uk";
const extensions = new Set([".js", ".jsx", ".ts", ".tsx", ".json", ".md", ".mdx"]);
let changedFiles = 0;
let replacements = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }
    if (!extensions.has(path.extname(entry.name))) continue;

    const original = fs.readFileSync(fullPath, "utf8");
    if (!original.includes(legacy)) continue;

    const count = original.split(legacy).length - 1;
    fs.writeFileSync(fullPath, original.split(legacy).join(canonical), "utf8");
    changedFiles += 1;
    replacements += count;
  }
}

if (fs.existsSync(root)) walk(root);
console.log(`Domain migration: ${replacements} legacy URL reference(s) replaced across ${changedFiles} file(s).`);
