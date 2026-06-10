# 09 Frontend

前端相关内容目前以 React、JavaScript、跨窗口通信和少量历史工程化命令为主，适合按“浏览器基础 -> 组件模型 -> 通信与异步 -> 工程化”顺序快速复习。

## 推荐入口

- [iframe 下监听 postMessage](./iframe下监听postMessage并打印接收的消息.md)
- [Node.js 中 md5 加密验签实例](./nodejs中md5加密验签实例.md)
- [Vue CLI 速记](#vue-cli-速记)
- [React / JavaScript 面试速看](#react--javascript-面试速看)

## 面试前 30 分钟速看

- 如果岗位偏中后台前端，优先准备组件通信、事件循环、Promise、跨域通信和基础工程化命令。
- 如果岗位更偏全栈，最好把前端安全、验签、跨窗口消息和 Node.js 工具脚本串成一条实战路径。
- 遇到旧项目时，可以顺手说明 Vue CLI 与现代 Vite 的差异，能体现你对历史工程环境的适配能力。

## Vue CLI 速记

如果是老项目或历史教程，还会遇到基于 `vue-cli` 的初始化流程，可以快速记住下面几步：

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install -g vue-cli
vue init webpack my-project
cnpm install
npm run dev
```

更适合现在新项目的方式通常是直接使用 Vite，但这份命令清单仍然适合维护旧仓库时查阅。

## React / JavaScript 面试速看

- React：优先复述虚拟 DOM、组件拆分、状态与属性、生命周期或 Hook 的职责边界。
- JavaScript：至少能讲清闭包、原型、Promise、事件循环和模块化这些高频基础题。
- 工程化：如果被追问项目实践，可以把构建工具、跨域处理、验签和调试经验放到一起回答。

---

<!-- note-nav:start -->
## 导航
- [返回仓库首页](../README.md)
<!-- note-nav:end -->
