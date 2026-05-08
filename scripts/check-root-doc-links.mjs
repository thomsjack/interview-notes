import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const docsToCheck = ["README.md", "CONTRIBUTING.md", "review-tips.md"];
const linkPattern = /\[[^\]]+\]\((\.\/[^)]+)\)/g;

const missingTargets = [];

for (const relativeFile of docsToCheck) {
  const absoluteFile = path.join(repoRoot, relativeFile);
  const content = fs.readFileSync(absoluteFile, "utf8");
  const matches = content.matchAll(linkPattern);

  for (const match of matches) {
    const linkTarget = match[1];
    const targetPath = path.resolve(path.dirname(absoluteFile), linkTarget);

    if (!fs.existsSync(targetPath)) {
      missingTargets.push({
        file: relativeFile,
        target: linkTarget,
      });
    }
  }
}

if (missingTargets.length > 0) {
  console.error("Found missing root-document links:");
  for (const item of missingTargets) {
    console.error(`- ${item.file} -> ${item.target}`);
  }
  process.exit(1);
}

console.log(`Validated ${docsToCheck.length} root documents with no missing relative links.`);
