import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const runChecksPath = path.join(repoRoot, "scripts", "run-maintenance-checks.mjs");
const scriptsReadmePath = path.join(repoRoot, "scripts", "README.md");

const runChecksContent = fs.readFileSync(runChecksPath, "utf8");
const scriptsReadmeContent = fs.readFileSync(scriptsReadmePath, "utf8");

const runCommands = [
  ...runChecksContent.matchAll(/args:\s*\[(.*?)\]/gs),
].map((match) => {
  const args = [...match[1].matchAll(/"([^"]+)"/g)].map((argMatch) => argMatch[1]);
  return `node ${args.join(" ")}`;
});

const stepZeroMatch = scriptsReadmeContent.match(
  /^0\.\s+想一次性跑完整套检查时，直接执行 `([^`]+)`$/m,
);

const recommendedCommands = scriptsReadmeContent
  .split("\n")
  .filter((line) => /^\d+\.\s+/.test(line))
  .map((line) => {
    const stepMatch = line.match(/^(\d+)\.\s+/);
    const commandCandidates = [...line.matchAll(/`([^`]+)`/g)]
      .map((match) => match[1])
      .filter((value) => value.includes("check"));
    return {
      step: stepMatch ? Number(stepMatch[1]) : null,
      command: commandCandidates.at(-1) ?? null,
    };
  })
  .filter((item) => item.step !== null && item.step >= 2)
  .filter((item) => item.command && item.command.includes("check"))
  .map((item) => item.command);
const findings = [];

if (!stepZeroMatch) {
  findings.push("scripts/README.md: 缺少“0.”的一键维护检查入口说明");
} else if (stepZeroMatch[1] !== "node scripts/run-maintenance-checks.mjs") {
  findings.push("scripts/README.md: “0.”步骤未指向 node scripts/run-maintenance-checks.mjs");
}

if (recommendedCommands.length !== runCommands.length) {
  findings.push(
    `scripts/README.md: 推荐校验步骤数量与 run-maintenance-checks.mjs 不一致（README ${recommendedCommands.length}，脚本 ${runCommands.length}）`,
  );
}

const minLength = Math.min(recommendedCommands.length, runCommands.length);
for (let index = 0; index < minLength; index += 1) {
  if (recommendedCommands[index] !== runCommands[index]) {
    findings.push(
      `scripts/README.md: 第 ${index + 1} 条维护校验顺序不一致（README 为 ${recommendedCommands[index]}，脚本为 ${runCommands[index]}）`,
    );
  }
}

if (findings.length > 0) {
  console.log("Maintenance check order findings:");
  for (const finding of findings) {
    console.log(`- ${finding}`);
  }
  process.exit(1);
}

console.log(`Validated maintenance check order across ${runCommands.length} aggregated checks.`);
