import { spawnSync } from "node:child_process";

const strictMode = process.argv.includes("--strict");

const checks = [
  {
    label: "Markdown 导航校验",
    command: "node",
    args: ["scripts/check-markdown-navigation.mjs", "--strict"],
  },
  {
    label: "README 链接校验",
    command: "node",
    args: ["scripts/check-readme-links.mjs", "--strict"],
  },
  {
    label: "README 入口页校验",
    command: "node",
    args: ["scripts/check-readme-entry-pages.mjs", "--strict"],
  },
  {
    label: "根文档链接校验",
    command: "node",
    args: ["scripts/check-root-doc-links.mjs"],
  },
];

let failureCount = 0;

for (const check of checks) {
  console.log(`==> ${check.label}`);
  console.log(`$ ${check.command} ${check.args.join(" ")}`);

  const result = spawnSync(check.command, check.args, {
    stdio: "inherit",
  });

  if (result.status !== 0) {
    failureCount += 1;

    if (strictMode) {
      process.exit(result.status ?? 1);
    }
  }

  console.log("");
}

if (failureCount > 0) {
  console.error(`Maintenance checks finished with ${failureCount} failing step(s).`);
  process.exit(1);
}

console.log(`Maintenance checks passed (${checks.length} steps).`);
