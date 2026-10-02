import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const strictMode = process.argv.includes("--strict");
const readmeFiles = [];
const excludedDirs = new Set([".git", "assets", ".vitepress", "node_modules", "dist", ".github"]);
const rootReadme = "README.md";
const navMarker = "<!-- note-nav:start -->";
const recommendedHeadingPattern = /## (推荐入口|目录导航|子目录|主题导航|当前整理方向)/;

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

const findings = [];

for (const absoluteFile of readmeFiles) {
  const relativeFile = path.relative(repoRoot, absoluteFile).replaceAll(path.sep, "/");
  if (relativeFile === rootReadme) {
    continue;
  }

  const content = fs.readFileSync(absoluteFile, "utf8");
  const lines = content.split("\n");
  const bulletCount = lines.filter((line) => line.trimStart().startsWith("- ")).length;
  const hasNav = content.includes(navMarker);
  const hasRecommendedSection = recommendedHeadingPattern.test(content);
  const hasIntroParagraph = /^# .+\n\n.+/s.test(content);

  if (!hasNav) {
    findings.push(`${relativeFile}: 缺少导航标记`);
  }

  if (!hasRecommendedSection) {
    findings.push(`${relativeFile}: 缺少推荐入口或目录导航标题`);
  }

  if (!hasIntroParagraph) {
    findings.push(`${relativeFile}: 标题后缺少简介段落`);
  }

  if (bulletCount < 3) {
    findings.push(`${relativeFile}: 导航类条目偏少，可能仍像正文页`);
  }
}

if (findings.length > 0) {
  console.log("README entry-page audit findings:");
  for (const finding of findings) {
    console.log(`- ${finding}`);
  }

  if (strictMode) {
    process.exit(1);
  }

  console.log("");
  console.log("Run `node scripts/check-readme-entry-pages.mjs --strict` after normalizing the reported files.");
  process.exit(0);
}

console.log(`Validated ${readmeFiles.length - 1} topic README entry pages.`);
