import fs from "node:fs";
import path from "node:path";

export const repoRoot = process.cwd();
export const navMarkerStart = "<!-- note-nav:start -->";
export const navMarkerEnd = "<!-- note-nav:end -->";

const defaultExcludedDirs = new Set([".git", "assets", ".vitepress", "node_modules", "dist", ".github"]);

export function toPosixPath(value) {
  return value.replaceAll(path.sep, "/");
}

export function walkMarkdownFiles(options = {}) {
  const {
    baseDir = repoRoot,
    excludeDirs = defaultExcludedDirs,
    excludeFiles = new Set(),
  } = options;

  const markdownFiles = [];

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (excludeDirs.has(entry.name)) {
        continue;
      }

      const fullPath = path.join(dir, entry.name);
      const relativePath = toPosixPath(path.relative(baseDir, fullPath));

      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }

      if (entry.isFile() && entry.name.endsWith(".md") && !excludeFiles.has(relativePath)) {
        markdownFiles.push(relativePath);
      }
    }
  }

  walk(baseDir);
  return markdownFiles;
}

export function relativeLink(fromFile, toFile) {
  const fromDir = path.dirname(fromFile);
  let target = toPosixPath(path.relative(fromDir, toFile));
  if (!target || target === "") {
    target = path.basename(toFile);
  }
  return target.startsWith(".") ? target : `./${target}`;
}

export function findNearestReadme(filePath) {
  let currentDir = path.dirname(path.join(repoRoot, filePath));
  while (currentDir.startsWith(repoRoot)) {
    const candidate = path.join(currentDir, "README.md");
    const relativeCandidate = toPosixPath(path.relative(repoRoot, candidate));
    if (fs.existsSync(candidate) && relativeCandidate !== filePath) {
      return relativeCandidate;
    }
    if (currentDir === repoRoot) {
      break;
    }
    currentDir = path.dirname(currentDir);
  }
  return null;
}

export function findParentReadme(filePath, nearestReadme) {
  if (!nearestReadme) {
    return null;
  }

  let currentDir = path.dirname(path.join(repoRoot, nearestReadme));
  while (currentDir.startsWith(repoRoot)) {
    const candidate = path.join(path.dirname(currentDir), "README.md");
    const relativeCandidate = toPosixPath(path.relative(repoRoot, candidate));
    if (
      currentDir !== repoRoot &&
      fs.existsSync(candidate) &&
      relativeCandidate !== nearestReadme &&
      relativeCandidate !== filePath
    ) {
      return relativeCandidate;
    }

    if (currentDir === repoRoot) {
      break;
    }
    currentDir = path.dirname(currentDir);
  }

  return null;
}

export function extractNavigationBlock(content) {
  const markerPattern = new RegExp(
    `${navMarkerStart}[\\s\\S]*?${navMarkerEnd}`,
    "m",
  );
  const match = content.match(markerPattern);
  return match ? match[0] : null;
}
