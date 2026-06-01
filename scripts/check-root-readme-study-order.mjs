import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const readmePath = path.join(repoRoot, "README.md");
const content = fs.readFileSync(readmePath, "utf8");

const findings = [];
const sectionMatch = content.match(/## 推荐复习顺序([\s\S]*?)(?:\n## |\n---|$)/);

if (!sectionMatch) {
  findings.push("README.md: 缺少“推荐复习顺序”章节内容");
} else {
  const section = sectionMatch[1];
  const numberedLines = section.match(/^\d+\.\s+/gm) ?? [];

  if (numberedLines.length !== 6) {
    findings.push(`README.md: “推荐复习顺序”应保留 6 条编号建议，实际检测到 ${numberedLines.length} 条`);
  }

  const requiredPhrases = [
    "操作系统、网络、HTTP",
    "基础语法、集合、并发、JVM",
    "SQL、MySQL、Redis",
    "Spring、MyBatis、分布式、消息队列",
    "LeetCode、剑指 Offer、排序",
    "Linux、Git、Maven、Docker",
  ];

  for (const phrase of requiredPhrases) {
    if (!section.includes(phrase)) {
      findings.push(`README.md: “推荐复习顺序”缺少关键内容 “${phrase}”`);
    }
  }
}

if (findings.length > 0) {
  console.log("Root README study-order findings:");
  for (const finding of findings) {
    console.log(`- ${finding}`);
  }
  process.exit(1);
}

console.log("Validated root README study-order guidance with 6 numbered steps.");
