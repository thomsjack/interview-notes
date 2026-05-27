import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const reviewTipsPath = path.join(repoRoot, "review-tips.md");
const content = fs.readFileSync(reviewTipsPath, "utf8");

const findings = [];

if (!content.startsWith("# 面试复习建议")) {
  findings.push("review-tips.md: 顶部标题应为 '# 面试复习建议'");
}

if (!content.includes("下面整理按主题推进复习时的一些小提示")) {
  findings.push("review-tips.md: 缺少开场简介段落");
}

const adviceLines = content.match(/^\d+\.\s+\*\*.+?\*\*：/gm) ?? [];
if (adviceLines.length !== 12) {
  findings.push(`review-tips.md: 当前应保留 12 条编号复习建议，实际检测到 ${adviceLines.length} 条`);
}

const navMarkerStart = "<!-- note-nav:start -->";
const navMarkerEnd = "<!-- note-nav:end -->";
if (!content.includes(navMarkerStart) || !content.includes(navMarkerEnd)) {
  findings.push("review-tips.md: 缺少导航标记");
}

if (!content.includes("[返回仓库首页](./README.md)")) {
  findings.push("review-tips.md: 导航区块缺少返回仓库首页链接");
}

if (findings.length > 0) {
  console.log("Review tips structure findings:");
  for (const finding of findings) {
    console.log(`- ${finding}`);
  }
  process.exit(1);
}

console.log(`Validated review-tips.md structure with ${adviceLines.length} numbered suggestions.`);
