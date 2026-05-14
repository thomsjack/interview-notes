import fs from "node:fs";
import path from "node:path";
import {
  extractNavigationBlock,
  navMarkerEnd,
  navMarkerStart,
  repoRoot,
  walkMarkdownFiles,
} from "./lib/markdown-maintenance.mjs";

const strictMode = process.argv.includes("--strict");
const relativeLinkPattern = /\[[^\]]+\]\((\.\/[^)#]+|\.\.\/[^)#]+)(?:#[^)]+)?\)/g;
const markdownFiles = walkMarkdownFiles({
  excludeFiles: new Set(["README.md"]),
}).filter((file) => path.basename(file) !== "README.md");

const findings = [];

for (const relativeFile of markdownFiles) {
  const absoluteFile = path.join(repoRoot, relativeFile);
  const content = fs.readFileSync(absoluteFile, "utf8");
  const navBlock = extractNavigationBlock(content);

  if (!navBlock) {
    findings.push(`${relativeFile}: 缺少导航区块`);
    continue;
  }

  if (!navBlock.includes(navMarkerStart) || !navBlock.includes(navMarkerEnd)) {
    findings.push(`${relativeFile}: 导航标记不完整`);
  }

  const navLinks = [...navBlock.matchAll(relativeLinkPattern)];
  if (navLinks.length === 0) {
    findings.push(`${relativeFile}: 导航区块缺少相对链接`);
    continue;
  }

  let hasRootReadmeLink = false;

  for (const match of navLinks) {
    const target = decodeURIComponent(match[1].replace(/\\\)/g, ")"));
    const absoluteTarget = path.resolve(path.dirname(absoluteFile), target);
    const relativeTarget = path.relative(repoRoot, absoluteTarget).replaceAll(path.sep, "/");

    if (!fs.existsSync(absoluteTarget)) {
      findings.push(`${relativeFile}: 导航链接失效 -> ${match[1]}`);
      continue;
    }

    if (relativeTarget === "README.md") {
      hasRootReadmeLink = true;
    }
  }

  if (!hasRootReadmeLink) {
    findings.push(`${relativeFile}: 导航区块缺少返回仓库首页链接`);
  }
}

if (findings.length > 0) {
  console.log("Markdown navigation audit findings:");
  for (const finding of findings) {
    console.log(`- ${finding}`);
  }

  if (strictMode) {
    process.exit(1);
  }

  console.log("");
  console.log("Run `node scripts/check-markdown-navigation.mjs --strict` after normalizing the reported files.");
  process.exit(0);
}

console.log(`Validated ${markdownFiles.length} markdown note files with navigation blocks.`);
