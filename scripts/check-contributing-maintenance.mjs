import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const contributingPath = path.join(repoRoot, "CONTRIBUTING.md");
const content = fs.readFileSync(contributingPath, "utf8");

const findings = [];

const requiredSections = [
  "## 目录规范",
  "## 文件规范",
  "## 导航规范",
  "## 渐进式重构",
];

const sectionIndexes = new Map();

for (const section of requiredSections) {
  const index = content.indexOf(section);
  if (index === -1) {
    findings.push(`CONTRIBUTING.md: 缺少章节 ${section}`);
    continue;
  }
  sectionIndexes.set(section, index);
}

for (let index = 1; index < requiredSections.length; index += 1) {
  const previousSection = requiredSections[index - 1];
  const currentSection = requiredSections[index];
  const previousIndex = sectionIndexes.get(previousSection);
  const currentIndex = sectionIndexes.get(currentSection);

  if (previousIndex === undefined || currentIndex === undefined) {
    continue;
  }

  if (currentIndex < previousIndex) {
    findings.push(`CONTRIBUTING.md: 章节顺序错误，${currentSection} 不应出现在 ${previousSection} 前面`);
  }
}

const requiredLinks = [
  "./README.md",
  "./review-tips.md",
  "./scripts/README.md",
];

for (const requiredLink of requiredLinks) {
  if (!content.includes(`(${requiredLink})`)) {
    findings.push(`CONTRIBUTING.md: 缺少关键链接 ${requiredLink}`);
  }
}

const requiredCommands = [
  "node scripts/run-maintenance-checks.mjs",
  "node scripts/check-markdown-navigation.mjs --strict",
  "node scripts/check-readme-links.mjs --strict",
  "node scripts/check-readme-entry-pages.mjs --strict",
  "node scripts/check-scripts-readme-coverage.mjs",
  "node scripts/check-root-readme-topics.mjs",
  "node scripts/check-root-readme-structure.mjs",
];

for (const requiredCommand of requiredCommands) {
  if (!content.includes(`\`${requiredCommand}\``)) {
    findings.push(`CONTRIBUTING.md: 缺少维护命令 ${requiredCommand}`);
  }
}

if (!content.includes("<!-- note-nav:start -->") || !content.includes("<!-- note-nav:end -->")) {
  findings.push("CONTRIBUTING.md: 缺少导航标记");
}

if (findings.length > 0) {
  console.log("Contributing maintenance findings:");
  for (const finding of findings) {
    console.log(`- ${finding}`);
  }
  process.exit(1);
}

console.log(`Validated CONTRIBUTING.md maintenance guidance with ${requiredCommands.length} required commands.`);
