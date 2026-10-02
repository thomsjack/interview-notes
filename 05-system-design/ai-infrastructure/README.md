# AI Infrastructure & Agent Systems

AI 基础设施与智能体系统设计专栏聚焦大模型推理服务、高并发吞吐架构、持久化智能体状态机与现代分布式运行时，适合作为 AI Agent 与前沿系统架构的高阶复习入口。

## 推荐入口

- [大模型高并发推理服务架构设计](./大模型推理服务与算力架构.md)：深入拆解 PagedAttention 虚拟显存分页、连续批处理 (Continuous Batching)、投机采样 (Speculative Decoding) 与 PD 分离架构。
- [现代智能体运行时与持久化执行架构](./现代智能体运行时与持久化状态架构.md)：全面解析模型上下文协议 (MCP)、长程任务持久化自愈 (Durable Execution) 与事务性状态回滚机制。
- [系统设计总览](../README.md)：涵盖从经典高可用分布式架构到现代大模型智能体基础设施的技术演进全景。

## 复习提示

- 面试回答大模型系统设计时，先明确“吞吐量 (Throughput)”与“首字延迟 (TTFT / TPOT)”的取舍权衡，再切入 PagedAttention 显存池化与动态批处理。
- 考察智能体（Agentic）系统设计时，核心考察点通常在“状态持久化、确定性重放、幂等工具调用与死循环检测”，应从这几个维度展开回答。

---

<!-- note-nav:start -->
## 导航
- [返回仓库首页](../../README.md)
- [返回上一级导航](../README.md)
<!-- note-nav:end -->
