import fs from "node:fs";
import path from "node:path";
import {
  findNearestReadme,
  findParentReadme,
  navMarkerEnd,
  navMarkerStart,
  relativeLink,
  repoRoot,
  walkMarkdownFiles,
} from "./lib/markdown-maintenance.mjs";

const excludedFiles = new Set(["README.md"]);

function buildNavigationBlock(filePath) {
  const lines = [navMarkerStart, "## 导航"];
  const rootReadme = "README.md";
  const nearestReadme = findNearestReadme(filePath);
  const parentReadme = findParentReadme(filePath, nearestReadme);
  const isReadme = path.basename(filePath) === "README.md";
  const links = [];

  if (filePath !== rootReadme) {
    links.push(["返回仓库首页", relativeLink(filePath, rootReadme)]);
  }

  if (nearestReadme && nearestReadme !== rootReadme) {
    links.push([isReadme ? "返回上一级导航" : "返回当前专题导航", relativeLink(filePath, nearestReadme)]);
  }

  if (parentReadme && parentReadme !== rootReadme && parentReadme !== nearestReadme) {
    links.push(["返回上一级主题", relativeLink(filePath, parentReadme)]);
  }

  const deduped = new Set();
  for (const [label, target] of links) {
    const key = target;
    if (deduped.has(key)) {
      continue;
    }
    deduped.add(key);
    lines.push(`- [${label}](${target})`);
  }

  lines.push(navMarkerEnd);
  return `${lines.join("\n")}\n`;
}

function upsertNavigation(content, navBlock) {
  const markerPattern = new RegExp(
    `${navMarkerStart}[\\s\\S]*?${navMarkerEnd}\\n*`,
    "m",
  );

  if (markerPattern.test(content)) {
    return content.replace(markerPattern, navBlock);
  }

  const trimmed = content.replace(/\s+$/, "");
  return `${trimmed}\n\n---\n\n${navBlock}`;
}

const markdownFiles = walkMarkdownFiles({ excludeFiles: excludedFiles });

let updatedCount = 0;

for (const filePath of markdownFiles) {
  const absolutePath = path.join(repoRoot, filePath);
  const original = fs.readFileSync(absolutePath, "utf8");
  const next = upsertNavigation(original, buildNavigationBlock(filePath));

  if (next !== original) {
    fs.writeFileSync(absolutePath, next);
    updatedCount += 1;
  }
}

console.log(`Updated ${updatedCount} markdown files.`);
