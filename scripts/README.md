# Maintenance Scripts

这个目录收纳 `interview-notes` 仓库的文档维护脚本，主要用于补齐导航、校验入口页和检查根文档链接。

## 推荐入口

- 从仓库首页了解整体维护约束：[../README.md](../README.md)
- 需要贡献约定时优先阅读：[../CONTRIBUTING.md](../CONTRIBUTING.md)
- 要执行脚本校验时，先看下方的推荐维护顺序

## 脚本列表

### `standardize-markdown-navigation.mjs`

用途：
- 为仓库内的大多数 Markdown 文档补齐统一的“导航”区块
- 自动生成返回仓库首页、当前专题导航、上一级主题等相对链接

适用场景：
- 新增了一批文档，需要批量补导航
- 调整目录结构后，希望统一刷新导航块

示例：

```bash
node scripts/standardize-markdown-navigation.mjs
```

### `check-root-doc-links.mjs`

用途：
- 校验根目录关键文档中的相对链接是否仍然有效

当前覆盖：
- `README.md`
- `CONTRIBUTING.md`
- `review-tips.md`

示例：

```bash
node scripts/check-root-doc-links.mjs
```

### `check-readme-links.mjs`

用途：
- 扫描所有专题 `README.md` 中的相对链接
- 找出入口页是否引用了已不存在的文档

使用方式：

```bash
node scripts/check-readme-links.mjs
node scripts/check-readme-links.mjs --strict
```

说明：
- 默认模式会输出问题清单，但不阻断
- `--strict` 模式会在发现失效链接时返回非零退出码

### `check-readme-entry-pages.mjs`

用途：
- 审计专题 `README.md` 是否真正像“入口页”
- 检查是否缺少导航标记、推荐入口标题或简介段落

使用方式：

```bash
node scripts/check-readme-entry-pages.mjs
node scripts/check-readme-entry-pages.mjs --strict
```

说明：
- 默认模式用于查看结构缺口
- `--strict` 模式适合在批量收口后做最终校验

### `check-markdown-navigation.mjs`

用途：
- 审计普通笔记页是否带有统一的导航区块
- 检查导航里的相对链接是否有效，以及是否保留返回仓库首页入口

使用方式：

```bash
node scripts/check-markdown-navigation.mjs
node scripts/check-markdown-navigation.mjs --strict
```

说明：
- 默认模式用于查看哪些普通 Markdown 页面还没有对齐导航规范
- `--strict` 模式适合在批量补齐导航后做全仓校验

### `run-maintenance-checks.mjs`

用途：
- 按仓库推荐顺序串行执行全部维护校验
- 适合在提交前做一次完整的仓库维护检查

使用方式：

```bash
node scripts/run-maintenance-checks.mjs
```

说明：
- 脚本会依次运行导航、README 链接、README 入口页、根 README 主题覆盖、根 README 结构、根文档链接六类检查
- 任一步失败都会以非零退出码结束，方便作为提交前自检入口

### `check-root-readme-topics.mjs`

用途：
- 校验根 `README.md` 是否覆盖所有编号顶层主题目录
- 检查每个顶层主题目录是否都有 `README.md`
- 检查根 `README.md` 里的顶层主题入口是否存在失效或多余链接

使用方式：

```bash
node scripts/check-root-readme-topics.mjs
```

说明：
- 适合在新增、调整或收拢一级主题目录后运行
- 如果根 `README.md` 与顶层主题结构不一致，脚本会直接返回非零退出码

### `check-root-readme-structure.mjs`

用途：
- 校验根 `README.md` 的核心章节是否齐全且顺序稳定
- 检查“复习与维护”章节是否保留关键维护入口
- 提前发现首页结构被误删、打散或重排的情况

使用方式：

```bash
node scripts/check-root-readme-structure.mjs
```

说明：
- 适合在调整根 `README.md` 的内容组织、维护说明或目录导航后运行
- 如果首页缺少关键章节或维护入口，脚本会直接返回非零退出码

## 推荐维护顺序

当你改动目录导航或专题入口页时，建议按这个顺序执行：

0. 想一次性跑完整套检查时，直接执行 `node scripts/run-maintenance-checks.mjs`
1. 如有需要，先运行 `node scripts/standardize-markdown-navigation.mjs`
2. 运行 `node scripts/check-markdown-navigation.mjs --strict`
3. 运行 `node scripts/check-readme-links.mjs --strict`
4. 运行 `node scripts/check-readme-entry-pages.mjs --strict`
5. 如果改了根目录主题导航，再运行 `node scripts/check-root-readme-topics.mjs`
6. 如果改了根 README 的章节组织，再运行 `node scripts/check-root-readme-structure.mjs`
7. 如果改了根文档，再运行 `node scripts/check-root-doc-links.mjs`

<!-- note-nav:start -->
## 导航
- [返回仓库首页](../README.md)
- [查看贡献规范](../CONTRIBUTING.md)
<!-- note-nav:end -->
