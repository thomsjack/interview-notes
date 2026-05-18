import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const rootReadmePath = path.join(repoRoot, "README.md");
const rootReadmeContent = fs.readFileSync(rootReadmePath, "utf8");

const excludedDirs = new Set([".git", "assets", "scripts"]);
const topicDirs = fs.readdirSync(repoRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter((name) => /^\d{2}-/.test(name))
  .filter((name) => !excludedDirs.has(name))
  .sort();

const findings = [];

for (const topicDir of topicDirs) {
  const topicReadme = `${topicDir}/README.md`;
  const absoluteTopicReadme = path.join(repoRoot, topicReadme);
  const rootReadmeLink = `./${topicReadme}`;

  if (!fs.existsSync(absoluteTopicReadme)) {
    findings.push(`${topicDir}: 缺少顶层 README.md`);
    continue;
  }

  if (!rootReadmeContent.includes(`(${rootReadmeLink})`)) {
    findings.push(`${topicDir}: 根 README 未链接 ${rootReadmeLink}`);
  }
}

const rootTopicReadmeLinkPattern = /\(\.\/(\d{2}-[^/]+\/README\.md)\)/g;
for (const match of rootReadmeContent.matchAll(rootTopicReadmeLinkPattern)) {
  const relativeTarget = match[1];
  const absoluteTarget = path.join(repoRoot, relativeTarget);
  const topicDir = relativeTarget.replace(/\/README\.md$/, "");

  if (!fs.existsSync(absoluteTarget)) {
    findings.push(`README.md: 顶层主题链接失效 -> ./${relativeTarget}`);
    continue;
  }

}

if (findings.length > 0) {
  console.log("Root README topic coverage findings:");
  for (const finding of findings) {
    console.log(`- ${finding}`);
  }
  process.exit(1);
}

console.log(`Validated ${topicDirs.length} top-level topic directories against README.md.`);
