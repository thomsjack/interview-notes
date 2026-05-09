import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const readmeFiles = [];
const excludedDirs = new Set([".git", "assets"]);
const relativeLinkPattern = /\[[^\]]+\]\((\.\/[^)#]+|\.\.\/[^)#]+)(?:#[^)]+)?\)/g;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (excludedDirs.has(entry.name)) {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (entry.isFile() && entry.name === "README.md") {
      readmeFiles.push(fullPath);
    }
  }
}

walk(repoRoot);

const missingLinks = [];

for (const absoluteFile of readmeFiles) {
  const relativeFile = path.relative(repoRoot, absoluteFile).replaceAll(path.sep, "/");
  const content = fs.readFileSync(absoluteFile, "utf8");

  for (const match of content.matchAll(relativeLinkPattern)) {
    const target = decodeURIComponent(match[1].replace(/\\\)/g, ")"));
    const absoluteTarget = path.resolve(path.dirname(absoluteFile), target);

    if (!fs.existsSync(absoluteTarget)) {
      missingLinks.push({
        file: relativeFile,
        target: match[1],
      });
    }
  }
}

if (missingLinks.length > 0) {
  console.error("Found missing README links:");
  for (const item of missingLinks) {
    console.error(`- ${item.file} -> ${item.target}`);
  }
  process.exit(1);
}

console.log(`Validated ${readmeFiles.length} README files with no missing relative links.`);
