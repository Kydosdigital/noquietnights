import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("app");
const LEGACY = "https://no-quiet-nights.vercel.app";
const CANONICAL = "https://www.noquietnights.co.uk";
const EXTENSIONS = new Set([".js", ".jsx", ".ts", ".tsx", ".json", ".md", ".mdx"]);
let changedFiles = 0;
let replacements = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }
    if (!EXTENSIONS.has(path.extname(entry.name))) continue;

    const original = fs.readFileSync(fullPath, "utf8");
    if (!original.includes(LEGACY)) continue;

    const count = original.split(LEGACY).length - 1;
    const updated = original.split(LEGACY).join(CANONICAL);
    fs.writeFileSync(fullPath, updated, "utf8");
    changedFiles += 1;
    replacements += count;
  }
}

if (fs.existsSync(ROOT)) walk(ROOT);
console.log(`Domain migration: ${replacements} legacy URL reference(s) replaced across ${changedFiles} file(s).`);
