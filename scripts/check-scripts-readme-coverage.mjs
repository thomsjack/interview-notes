import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const scriptsDir = path.join(repoRoot, "scripts");
const scriptsReadmePath = path.join(scriptsDir, "README.md");
const scriptsReadmeContent = fs.readFileSync(scriptsReadmePath, "utf8");

const excludedFiles = new Set(["README.md"]);
const expectedScripts = fs.readdirSync(scriptsDir)
  .filter((entry) => entry.endsWith(".mjs"))
  .filter((entry) => !excludedFiles.has(entry))
  .sort();

const findings = [];

for (const scriptFile of expectedScripts) {
  if (!scriptsReadmeContent.includes(`### \`${scriptFile}\``)) {
    findings.push(`scripts/README.md: 缺少 ${scriptFile} 的脚本说明`);
  }
}

const documentedScripts = [
  ...scriptsReadmeContent.matchAll(/^### `([^`]+\.mjs)`$/gm),
].map((match) => match[1]);

for (const documentedScript of documentedScripts) {
  const absoluteScript = path.join(scriptsDir, documentedScript);
  if (!fs.existsSync(absoluteScript)) {
    findings.push(`scripts/README.md: 文档提到了不存在的脚本 ${documentedScript}`);
  }
}

if (findings.length > 0) {
  console.log("Scripts README coverage findings:");
  for (const finding of findings) {
    console.log(`- ${finding}`);
  }
  process.exit(1);
}

console.log(`Validated ${expectedScripts.length} maintenance scripts against scripts/README.md.`);
