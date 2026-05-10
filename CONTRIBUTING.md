# Contributing

## 目录规范

- 优先使用编号目录 `01-` 到 `11-` 维护主题结构。
- 当前仓库已经完成编号目录收敛；新增文档时，优先补充到对应编号目录，不再恢复旧的散落结构。
- 目录命名统一使用小写英文与连字符。

## 文件规范

- Markdown 文件统一使用 `.md` 扩展名。
- 文件名尽量表达主题，不使用无意义缩写。
- 相同主题的内容优先补充到已有文档，避免再造重复文件。

## 导航规范

- 新增主题目录时，请补充对应的 `README.md` 导航页。
- 根目录 [README.md](./README.md) 只保留总览和导航，不再堆叠长篇正文。
- 复习建议统一维护在 [review-tips.md](./review-tips.md)。
- 批量补齐文档导航时，执行 `node scripts/standardize-markdown-navigation.mjs`。
- 调整专题 `README.md` 链接后，先执行 `node scripts/check-readme-links.mjs` 查看失效项，再执行 `node scripts/check-readme-links.mjs --strict` 做严格校验。
- 调整专题入口页时，先执行 `node scripts/check-readme-entry-pages.mjs` 查看结构缺口，再执行 `node scripts/check-readme-entry-pages.mjs --strict` 做严格校验。

## 渐进式重构

- 主题内容已经完成主要迁移，后续重构以补齐导航、合并重复页和强化专题总览为主。
- 如果要移动文件，优先使用 `git mv`，以保留提交历史。
- 对重复内容进行合并时，请先更新入口导航，再逐步删除旧副本。
- 修改根目录文档后，建议执行 `node scripts/check-root-doc-links.mjs`，确认关键入口链接仍然有效。

---

<!-- note-nav:start -->
## 导航
- [返回仓库首页](./README.md)
<!-- note-nav:end -->
