import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const readmePath = path.join(repoRoot, "README.md");
const content = fs.readFileSync(readmePath, "utf8");

const requiredSections = [
  "## 如何使用",
  "## 目录导航",
  "## 推荐复习顺序",
  "## 复习与维护",
  "## 当前状态",
];

const findings = [];
const sectionIndexes = new Map();

for (const section of requiredSections) {
  const index = content.indexOf(section);
  if (index === -1) {
    findings.push(`README.md: 缺少章节 ${section}`);
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
    findings.push(`README.md: 章节顺序错误，${currentSection} 不应出现在 ${previousSection} 前面`);
  }
}

const maintenanceSectionMatch = content.match(/## 复习与维护([\s\S]*?)(?:\n## |\n---|$)/);
if (!maintenanceSectionMatch) {
  findings.push("README.md: 无法定位“复习与维护”章节内容");
} else {
  const maintenanceSection = maintenanceSectionMatch[1];
  const requiredMaintenanceLinks = [
    "./review-tips.md",
    "./CONTRIBUTING.md",
    "./scripts/README.md",
    "./scripts/run-maintenance-checks.mjs",
  ];

  for (const requiredLink of requiredMaintenanceLinks) {
    if (!maintenanceSection.includes(`(${requiredLink})`)) {
      findings.push(`README.md: “复习与维护”章节缺少链接 ${requiredLink}`);
    }
  }
}

const topicHeadingMatches = [...content.matchAll(/^### /gm)];
if (topicHeadingMatches.length < 11) {
  findings.push(`README.md: 目录导航中的三级主题标题数量偏少，当前仅 ${topicHeadingMatches.length} 个`);
}

if (findings.length > 0) {
  console.log("Root README structure findings:");
  for (const finding of findings) {
    console.log(`- ${finding}`);
  }
  process.exit(1);
}

console.log(`Validated root README structure with ${requiredSections.length} required sections.`);
