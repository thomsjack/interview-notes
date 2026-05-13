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

## 推荐维护顺序

当你改动目录导航或专题入口页时，建议按这个顺序执行：

1. 如有需要，先运行 `node scripts/standardize-markdown-navigation.mjs`
2. 运行 `node scripts/check-readme-links.mjs --strict`
3. 运行 `node scripts/check-readme-entry-pages.mjs --strict`
4. 如果改了根文档，再运行 `node scripts/check-root-doc-links.mjs`

<!-- note-nav:start -->
## 导航
- [返回仓库首页](../README.md)
- [查看贡献规范](../CONTRIBUTING.md)
<!-- note-nav:end -->
