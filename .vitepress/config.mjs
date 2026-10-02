import { defineConfig } from 'vitepress';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sidebar = {
  "/01-computer-science/": [
    {
      "text": "📌 专题总览",
      "link": "/01-computer-science/README"
    },
    {
      "text": "专题笔记",
      "collapsed": false,
      "items": [
        {
          "text": "正则表达式 - 元字符",
          "link": "/01-computer-science/正则表达式 - 元字符"
        },
        {
          "text": "正则表达式 - 匹配规则",
          "link": "/01-computer-science/正则表达式 - 匹配规则"
        },
        {
          "text": "正则表达式 - 示例",
          "link": "/01-computer-science/正则表达式 - 示例"
        },
        {
          "text": "正则表达式 - 简介",
          "link": "/01-computer-science/正则表达式 - 简介"
        },
        {
          "text": "正则表达式 - 语法",
          "link": "/01-computer-science/正则表达式 - 语法"
        },
        {
          "text": "正则表达式 - 运算符优先级",
          "link": "/01-computer-science/正则表达式 - 运算符优先级"
        },
        {
          "text": "正则表达式",
          "link": "/01-computer-science/正则表达式"
        }
      ]
    },
    {
      "text": "data-structures",
      "collapsed": false,
      "items": [
        {
          "text": "如何证明一棵二叉树是另一个的子数",
          "link": "/01-computer-science/data-structures/如何证明一棵二叉树是另一个的子数"
        },
        {
          "text": "无锁队列的实现原理",
          "link": "/01-computer-science/data-structures/无锁队列的实现原理"
        }
      ]
    },
    {
      "text": "network",
      "collapsed": false,
      "items": [
        {
          "text": "HTTP",
          "link": "/01-computer-science/network/HTTP"
        },
        {
          "text": "Socket",
          "link": "/01-computer-science/network/Socket"
        },
        {
          "text": "TCP建立和断开连接的过程",
          "link": "/01-computer-science/network/TCP建立和断开连接的过程"
        },
        {
          "text": "计算机网络",
          "link": "/01-computer-science/network/计算机网络"
        }
      ]
    },
    {
      "text": "os",
      "collapsed": false,
      "items": [
        {
          "text": "计算机操作系统",
          "link": "/01-computer-science/os/计算机操作系统"
        }
      ]
    }
  ],
  "/02-java/": [
    {
      "text": "📌 专题总览",
      "link": "/02-java/README"
    },
    {
      "text": "basics",
      "collapsed": false,
      "items": [
        {
          "text": "basics 总览",
          "link": "/02-java/basics/README"
        },
        {
          "text": "isEmpty与null、\"\"的区别",
          "link": "/02-java/basics/isEmpty与null、\"\"的区别"
        },
        {
          "text": "Java Character 类",
          "link": "/02-java/basics/Java Character 类"
        },
        {
          "text": "Java MySQL 连接",
          "link": "/02-java/basics/Java MySQL 连接"
        },
        {
          "text": "Java Scanner 类",
          "link": "/02-java/basics/Java Scanner 类"
        },
        {
          "text": "Java StringBuffer 和 StringBuilder 类",
          "link": "/02-java/basics/Java StringBuffer 和 StringBuilder 类"
        },
        {
          "text": "Java switch case",
          "link": "/02-java/basics/Java switch case"
        },
        {
          "text": "Java 修饰符",
          "link": "/02-java/basics/Java 修饰符"
        },
        {
          "text": "Java 包(package)",
          "link": "/02-java/basics/Java 包(package)"
        },
        {
          "text": "Java 变量类型",
          "link": "/02-java/basics/Java 变量类型"
        },
        {
          "text": "Java 基本数据类型",
          "link": "/02-java/basics/Java 基本数据类型"
        },
        {
          "text": "Java 基础语法",
          "link": "/02-java/basics/Java 基础语法"
        },
        {
          "text": "Java 实例",
          "link": "/02-java/basics/Java 实例"
        },
        {
          "text": "Java 对象和类",
          "link": "/02-java/basics/Java 对象和类"
        },
        {
          "text": "Java 封装",
          "link": "/02-java/basics/Java 封装"
        },
        {
          "text": "Java 序列化",
          "link": "/02-java/basics/Java 序列化"
        },
        {
          "text": "Java 异常处理",
          "link": "/02-java/basics/Java 异常处理"
        },
        {
          "text": "Java 循环结构",
          "link": "/02-java/basics/Java 循环结构"
        },
        {
          "text": "Java 抽象类",
          "link": "/02-java/basics/Java 抽象类"
        },
        {
          "text": "Java 接口",
          "link": "/02-java/basics/Java 接口"
        },
        {
          "text": "Java 数据结构",
          "link": "/02-java/basics/Java 数据结构"
        },
        {
          "text": "Java 数组",
          "link": "/02-java/basics/Java 数组"
        },
        {
          "text": "Java 文档注释",
          "link": "/02-java/basics/Java 文档注释"
        },
        {
          "text": "Java 方法",
          "link": "/02-java/basics/Java 方法"
        },
        {
          "text": "Java 日期时间",
          "link": "/02-java/basics/Java 日期时间"
        },
        {
          "text": "Java 条件语句",
          "link": "/02-java/basics/Java 条件语句"
        },
        {
          "text": "Java 正则表达式",
          "link": "/02-java/basics/Java 正则表达式"
        },
        {
          "text": "Java 泛型",
          "link": "/02-java/basics/Java 泛型"
        },
        {
          "text": "Java 简介",
          "link": "/02-java/basics/Java 简介"
        },
        {
          "text": "Java 继承",
          "link": "/02-java/basics/Java 继承"
        },
        {
          "text": "Java 网络编程",
          "link": "/02-java/basics/Java 网络编程"
        },
        {
          "text": "Java 运算符",
          "link": "/02-java/basics/Java 运算符"
        },
        {
          "text": "Java 重写(Override)与重载(Overload)",
          "link": "/02-java/basics/Java 重写(Override)与重载(Overload)"
        },
        {
          "text": "Java优化代码那些事",
          "link": "/02-java/basics/Java优化代码那些事"
        },
        {
          "text": "Java常见问题",
          "link": "/02-java/basics/Java常见问题"
        },
        {
          "text": "JAVA特点",
          "link": "/02-java/basics/JAVA特点"
        },
        {
          "text": "JSON转换",
          "link": "/02-java/basics/JSON转换"
        },
        {
          "text": "Map转String、String转JSON",
          "link": "/02-java/basics/Map转String、String转JSON"
        },
        {
          "text": "POI导入Excel表格后，debug匹配不到映射的原因",
          "link": "/02-java/basics/POI导入Excel表格后，debug匹配不到映射的原因"
        },
        {
          "text": "StreamDemo.java",
          "link": "/02-java/basics/StreamDemo.java"
        },
        {
          "text": "事务的隔离级别和传播属性",
          "link": "/02-java/basics/事务的隔离级别和传播属性"
        },
        {
          "text": "日期格式随心处理",
          "link": "/02-java/basics/日期格式随心处理"
        },
        {
          "text": "阿里云OSS图片缩略图",
          "link": "/02-java/basics/阿里云OSS图片缩略图"
        }
      ]
    },
    {
      "text": "collections",
      "collapsed": false,
      "items": [
        {
          "text": "HashMap底层执行原理",
          "link": "/02-java/collections/HashMap底层执行原理"
        },
        {
          "text": "Hashtable和ConcurrentHashMap实现线程安全",
          "link": "/02-java/collections/Hashtable和ConcurrentHashMap实现线程安全"
        },
        {
          "text": "Java 容器",
          "link": "/02-java/collections/Java 容器"
        },
        {
          "text": "Java 集合框架",
          "link": "/02-java/collections/Java 集合框架"
        }
      ]
    },
    {
      "text": "concurrency",
      "collapsed": false,
      "items": [
        {
          "text": "Java 并发",
          "link": "/02-java/concurrency/Java 并发"
        },
        {
          "text": "手动创建线程池,效果会更好哦",
          "link": "/02-java/concurrency/手动创建线程池,效果会更好哦"
        },
        {
          "text": "线程状态图",
          "link": "/02-java/concurrency/线程状态图"
        }
      ]
    },
    {
      "text": "io",
      "collapsed": false,
      "items": [
        {
          "text": "Java IO",
          "link": "/02-java/io/Java IO"
        },
        {
          "text": "Java 流(Stream)、文件(File)和IO",
          "link": "/02-java/io/Java 流(Stream)、文件(File)和IO"
        }
      ]
    },
    {
      "text": "jvm",
      "collapsed": false,
      "items": [
        {
          "text": "Java 虚拟机",
          "link": "/02-java/jvm/Java 虚拟机"
        },
        {
          "text": "Java内存模型",
          "link": "/02-java/jvm/Java内存模型"
        },
        {
          "text": "Java垃圾回收",
          "link": "/02-java/jvm/Java垃圾回收"
        },
        {
          "text": "jdk-监控和故障处理工具总结",
          "link": "/02-java/jvm/jdk-监控和故障处理工具总结"
        },
        {
          "text": "内存溢出和内存泄露",
          "link": "/02-java/jvm/内存溢出和内存泄露"
        },
        {
          "text": "对象和内存空间",
          "link": "/02-java/jvm/对象和内存空间"
        },
        {
          "text": "常用JVM命令参数",
          "link": "/02-java/jvm/常用JVM命令参数"
        },
        {
          "text": "部署异常 ERROR: Cannot load this JVM TI agent twice",
          "link": "/02-java/jvm/部署异常 ERROR: Cannot load this JVM TI agent twice"
        }
      ]
    },
    {
      "text": "new-features",
      "collapsed": false,
      "items": [
        {
          "text": "Java 14新特性",
          "link": "/02-java/new-features/Java 14新特性"
        },
        {
          "text": "Java 8 Stream流",
          "link": "/02-java/new-features/Java 8 Stream流"
        },
        {
          "text": "Java 8 新特性",
          "link": "/02-java/new-features/Java 8 新特性"
        },
        {
          "text": "处理警告 can be replaced with lambda",
          "link": "/02-java/new-features/处理警告 can be replaced with lambda"
        },
        {
          "text": "深入浅出之使用lambda表达式",
          "link": "/02-java/new-features/深入浅出之使用lambda表达式"
        }
      ]
    }
  ],
  "/03-database/": [
    {
      "text": "📌 专题总览",
      "link": "/03-database/README"
    },
    {
      "text": "专题笔记",
      "collapsed": false,
      "items": [
        {
          "text": "SQL",
          "link": "/03-database/SQL"
        },
        {
          "text": "二、数据库",
          "link": "/03-database/二、数据库"
        },
        {
          "text": "数据库系统原理",
          "link": "/03-database/数据库系统原理"
        }
      ]
    },
    {
      "text": "mongodb",
      "collapsed": false,
      "items": [
        {
          "text": "mongodb 总览",
          "link": "/03-database/mongodb/README"
        },
        {
          "text": "Linux平台安装MongoDB",
          "link": "/03-database/mongodb/Linux平台安装MongoDB"
        },
        {
          "text": "Mac OSX 平台安装 MongoDB",
          "link": "/03-database/mongodb/Mac OSX 平台安装 MongoDB"
        },
        {
          "text": "MongoDB - 连接",
          "link": "/03-database/mongodb/MongoDB - 连接"
        },
        {
          "text": "MongoDB $type 操作符",
          "link": "/03-database/mongodb/MongoDB $type 操作符"
        },
        {
          "text": "MongoDB Java",
          "link": "/03-database/mongodb/MongoDB Java"
        },
        {
          "text": "MongoDB Limit与Skip方法",
          "link": "/03-database/mongodb/MongoDB Limit与Skip方法"
        },
        {
          "text": "MongoDB PHP",
          "link": "/03-database/mongodb/MongoDB PHP"
        },
        {
          "text": "MongoDB PHP 扩展",
          "link": "/03-database/mongodb/MongoDB PHP 扩展"
        },
        {
          "text": "MongoDB 分片",
          "link": "/03-database/mongodb/MongoDB 分片"
        },
        {
          "text": "MongoDB 创建数据库",
          "link": "/03-database/mongodb/MongoDB 创建数据库"
        },
        {
          "text": "MongoDB 创建集合",
          "link": "/03-database/mongodb/MongoDB 创建集合"
        },
        {
          "text": "MongoDB 删除数据库",
          "link": "/03-database/mongodb/MongoDB 删除数据库"
        },
        {
          "text": "MongoDB 删除文档",
          "link": "/03-database/mongodb/MongoDB 删除文档"
        },
        {
          "text": "MongoDB 删除集合",
          "link": "/03-database/mongodb/MongoDB 删除集合"
        },
        {
          "text": "MongoDB 备份(mongodump)与恢复(mongorestore)",
          "link": "/03-database/mongodb/MongoDB 备份(mongodump)与恢复(mongorestore)"
        },
        {
          "text": "MongoDB 复制（副本集）",
          "link": "/03-database/mongodb/MongoDB 复制（副本集）"
        },
        {
          "text": "MongoDB 排序",
          "link": "/03-database/mongodb/MongoDB 排序"
        },
        {
          "text": "MongoDB 插入文档",
          "link": "/03-database/mongodb/MongoDB 插入文档"
        },
        {
          "text": "MongoDB 更新文档",
          "link": "/03-database/mongodb/MongoDB 更新文档"
        },
        {
          "text": "MongoDB 条件操作符",
          "link": "/03-database/mongodb/MongoDB 条件操作符"
        },
        {
          "text": "MongoDB 查询文档",
          "link": "/03-database/mongodb/MongoDB 查询文档"
        },
        {
          "text": "MongoDB 概念解析",
          "link": "/03-database/mongodb/MongoDB 概念解析"
        },
        {
          "text": "MongoDB 监控",
          "link": "/03-database/mongodb/MongoDB 监控"
        },
        {
          "text": "MongoDB 索引",
          "link": "/03-database/mongodb/MongoDB 索引"
        },
        {
          "text": "MongoDB 聚合",
          "link": "/03-database/mongodb/MongoDB 聚合"
        },
        {
          "text": "Node.js 连接 MongoDB",
          "link": "/03-database/mongodb/Node.js 连接 MongoDB"
        },
        {
          "text": "NoSQL 简介",
          "link": "/03-database/mongodb/NoSQL 简介"
        },
        {
          "text": "PHP7 MongDB 安装与使用",
          "link": "/03-database/mongodb/PHP7 MongDB 安装与使用"
        },
        {
          "text": "Windows 平台安装 MongoDB",
          "link": "/03-database/mongodb/Windows 平台安装 MongoDB"
        }
      ]
    },
    {
      "text": "mysql",
      "collapsed": false,
      "items": [
        {
          "text": "mysql 总览",
          "link": "/03-database/mysql/README"
        },
        {
          "text": "1.数据库架构",
          "link": "/03-database/mysql/1.数据库架构"
        },
        {
          "text": "2.索引",
          "link": "/03-database/mysql/2.索引"
        },
        {
          "text": "MySQL ALTER命令",
          "link": "/03-database/mysql/MySQL ALTER命令"
        },
        {
          "text": "MySQL DELETE 语句",
          "link": "/03-database/mysql/MySQL DELETE 语句"
        },
        {
          "text": "MySQL GROUP BY 语句",
          "link": "/03-database/mysql/MySQL GROUP BY 语句"
        },
        {
          "text": "MySQL LIKE 子句",
          "link": "/03-database/mysql/MySQL LIKE 子句"
        },
        {
          "text": "MySQL NULL 值处理",
          "link": "/03-database/mysql/MySQL NULL 值处理"
        },
        {
          "text": "MySQL PHP 语法",
          "link": "/03-database/mysql/MySQL PHP 语法"
        },
        {
          "text": "MySQL UNION 操作符",
          "link": "/03-database/mysql/MySQL UNION 操作符"
        },
        {
          "text": "MySQL UPDATE 查询",
          "link": "/03-database/mysql/MySQL UPDATE 查询"
        },
        {
          "text": "MySQL WHERE 子句",
          "link": "/03-database/mysql/MySQL WHERE 子句"
        },
        {
          "text": "MySQL 临时表",
          "link": "/03-database/mysql/MySQL 临时表"
        },
        {
          "text": "MySQL 事务",
          "link": "/03-database/mysql/MySQL 事务"
        },
        {
          "text": "MySQL 元数据",
          "link": "/03-database/mysql/MySQL 元数据"
        },
        {
          "text": "MySQL 函数",
          "link": "/03-database/mysql/MySQL 函数"
        },
        {
          "text": "MySQL 创建数据库",
          "link": "/03-database/mysql/MySQL 创建数据库"
        },
        {
          "text": "MySQL 创建数据表",
          "link": "/03-database/mysql/MySQL 创建数据表"
        },
        {
          "text": "MySQL 删除数据库",
          "link": "/03-database/mysql/MySQL 删除数据库"
        },
        {
          "text": "MySQL 删除数据表",
          "link": "/03-database/mysql/MySQL 删除数据表"
        },
        {
          "text": "MySQL 及 SQL 注入",
          "link": "/03-database/mysql/MySQL 及 SQL 注入"
        },
        {
          "text": "MySQL 处理重复数据",
          "link": "/03-database/mysql/MySQL 处理重复数据"
        },
        {
          "text": "MySQL 复制表",
          "link": "/03-database/mysql/MySQL 复制表"
        },
        {
          "text": "MySQL 安装",
          "link": "/03-database/mysql/MySQL 安装"
        },
        {
          "text": "MySQL 导入数据",
          "link": "/03-database/mysql/MySQL 导入数据"
        },
        {
          "text": "MySQL 导出数据",
          "link": "/03-database/mysql/MySQL 导出数据"
        },
        {
          "text": "MySQL 序列使用",
          "link": "/03-database/mysql/MySQL 序列使用"
        },
        {
          "text": "MySQL 排序",
          "link": "/03-database/mysql/MySQL 排序"
        },
        {
          "text": "MySQL 插入数据",
          "link": "/03-database/mysql/MySQL 插入数据"
        },
        {
          "text": "MySQL 数据类型",
          "link": "/03-database/mysql/MySQL 数据类型"
        },
        {
          "text": "MySQL 查询数据",
          "link": "/03-database/mysql/MySQL 查询数据"
        },
        {
          "text": "MySQL 正则表达式",
          "link": "/03-database/mysql/MySQL 正则表达式"
        },
        {
          "text": "MySQL 管理",
          "link": "/03-database/mysql/MySQL 管理"
        },
        {
          "text": "MySQL 索引",
          "link": "/03-database/mysql/MySQL 索引"
        },
        {
          "text": "MySQL 运算符",
          "link": "/03-database/mysql/MySQL 运算符"
        },
        {
          "text": "MySQL 连接",
          "link": "/03-database/mysql/MySQL 连接"
        },
        {
          "text": "Mysql 连接的使用",
          "link": "/03-database/mysql/Mysql 连接的使用"
        },
        {
          "text": "MySQL 选择数据库",
          "link": "/03-database/mysql/MySQL 选择数据库"
        },
        {
          "text": "MySQL教程",
          "link": "/03-database/mysql/MySQL教程"
        },
        {
          "text": "MySQL版本问题",
          "link": "/03-database/mysql/MySQL版本问题"
        },
        {
          "text": "MySQL的一千行命令",
          "link": "/03-database/mysql/MySQL的一千行命令"
        },
        {
          "text": "MySQL简介",
          "link": "/03-database/mysql/MySQL简介"
        },
        {
          "text": "mysql索引区别",
          "link": "/03-database/mysql/mysql索引区别"
        },
        {
          "text": "mysql索引结构",
          "link": "/03-database/mysql/mysql索引结构"
        },
        {
          "text": "MySQL规约与高性能优化",
          "link": "/03-database/mysql/MySQL规约与高性能优化"
        },
        {
          "text": "Spring事务与MySQL数据库隔离级别的关系",
          "link": "/03-database/mysql/Spring事务与MySQL数据库隔离级别的关系"
        },
        {
          "text": "乐观锁和悲观锁的区别",
          "link": "/03-database/mysql/乐观锁和悲观锁的区别"
        },
        {
          "text": "优化数据库的方法",
          "link": "/03-database/mysql/优化数据库的方法"
        },
        {
          "text": "建表",
          "link": "/03-database/mysql/建表"
        },
        {
          "text": "聚簇索引与非聚簇索引的区别",
          "link": "/03-database/mysql/聚簇索引与非聚簇索引的区别"
        }
      ]
    },
    {
      "text": "redis",
      "collapsed": false,
      "items": [
        {
          "text": "Redis",
          "link": "/03-database/redis/Redis"
        }
      ]
    }
  ],
  "/04-framework/": [
    {
      "text": "📌 专题总览",
      "link": "/04-framework/README"
    },
    {
      "text": "mybatis",
      "collapsed": false,
      "items": [
        {
          "text": "mybatis 总览",
          "link": "/04-framework/mybatis/README"
        },
        {
          "text": "MyBatis",
          "link": "/04-framework/mybatis/MyBatis"
        },
        {
          "text": "mybatis中大于小于等于的写法",
          "link": "/04-framework/mybatis/mybatis中大于小于等于的写法"
        },
        {
          "text": "Mybatis实现多个或条件查询",
          "link": "/04-framework/mybatis/Mybatis实现多个或条件查询"
        }
      ]
    },
    {
      "text": "spring",
      "collapsed": false,
      "items": [
        {
          "text": "Spring Bean的生命周期",
          "link": "/04-framework/spring/Spring Bean的生命周期"
        },
        {
          "text": "spring mvc 运行流程",
          "link": "/04-framework/spring/spring mvc 运行流程"
        }
      ]
    },
    {
      "text": "spring-cloud",
      "collapsed": false,
      "items": [
        {
          "text": "spring-cloud 总览",
          "link": "/04-framework/spring-cloud/README"
        }
      ]
    }
  ],
  "/05-system-design/": [
    {
      "text": "📌 专题总览",
      "link": "/05-system-design/README"
    },
    {
      "text": "专题笔记",
      "collapsed": false,
      "items": [
        {
          "text": "系统设计基础",
          "link": "/05-system-design/系统设计基础"
        }
      ]
    },
    {
      "text": "ai-infrastructure",
      "collapsed": false,
      "items": [
        {
          "text": "ai-infrastructure 总览",
          "link": "/05-system-design/ai-infrastructure/README"
        },
        {
          "text": "大模型推理服务与算力架构",
          "link": "/05-system-design/ai-infrastructure/大模型推理服务与算力架构"
        },
        {
          "text": "现代智能体运行时与持久化状态架构",
          "link": "/05-system-design/ai-infrastructure/现代智能体运行时与持久化状态架构"
        }
      ]
    },
    {
      "text": "distributed",
      "collapsed": false,
      "items": [
        {
          "text": "distributed 总览",
          "link": "/05-system-design/distributed/README"
        },
        {
          "text": "1.分布式系统概念与ZK简介",
          "link": "/05-system-design/distributed/1.分布式系统概念与ZK简介"
        },
        {
          "text": "2.ZooKeeper安装",
          "link": "/05-system-design/distributed/2.ZooKeeper安装"
        },
        {
          "text": "3.ZooKeeper基本数据模型",
          "link": "/05-system-design/distributed/3.ZooKeeper基本数据模型"
        },
        {
          "text": "4.ZK特性与Linux下的ZK命令行",
          "link": "/05-system-design/distributed/4.ZK特性与Linux下的ZK命令行"
        },
        {
          "text": "5.选举模式和ZooKeeper的集群安装",
          "link": "/05-system-design/distributed/5.选举模式和ZooKeeper的集群安装"
        },
        {
          "text": "6.ZooKeeper原生Java API的客户端开发",
          "link": "/05-system-design/distributed/6.ZooKeeper原生Java API的客户端开发"
        },
        {
          "text": "8.Dubbo入门到重构服务",
          "link": "/05-system-design/distributed/8.Dubbo入门到重构服务"
        },
        {
          "text": "9.分布式锁",
          "link": "/05-system-design/distributed/9.分布式锁"
        },
        {
          "text": "分布式",
          "link": "/05-system-design/distributed/分布式"
        },
        {
          "text": "哈希算法、哈希碰撞、一致性哈希",
          "link": "/05-system-design/distributed/哈希算法、哈希碰撞、一致性哈希"
        },
        {
          "text": "集群",
          "link": "/05-system-design/distributed/集群"
        },
        {
          "text": "高并发下保证数据安全修改",
          "link": "/05-system-design/distributed/高并发下保证数据安全修改"
        }
      ]
    },
    {
      "text": "mq",
      "collapsed": false,
      "items": [
        {
          "text": "RabbitMQ",
          "link": "/05-system-design/mq/RabbitMQ"
        },
        {
          "text": "消息模型",
          "link": "/05-system-design/mq/消息模型"
        },
        {
          "text": "消息队列",
          "link": "/05-system-design/mq/消息队列"
        }
      ]
    },
    {
      "text": "security",
      "collapsed": false,
      "items": [
        {
          "text": "安全机制",
          "link": "/05-system-design/security/安全机制"
        },
        {
          "text": "攻击技术",
          "link": "/05-system-design/security/攻击技术"
        }
      ]
    }
  ],
  "/06-design-patterns/": [
    {
      "text": "📌 专题总览",
      "link": "/06-design-patterns/README"
    },
    {
      "text": "专题笔记",
      "collapsed": false,
      "items": [
        {
          "text": "享元模式",
          "link": "/06-design-patterns/享元模式"
        },
        {
          "text": "单例模式",
          "link": "/06-design-patterns/单例模式"
        },
        {
          "text": "工厂模式",
          "link": "/06-design-patterns/工厂模式"
        },
        {
          "text": "观察者模式",
          "link": "/06-design-patterns/观察者模式"
        },
        {
          "text": "设计模式",
          "link": "/06-design-patterns/设计模式"
        },
        {
          "text": "适配器模式",
          "link": "/06-design-patterns/适配器模式"
        },
        {
          "text": "重构",
          "link": "/06-design-patterns/重构"
        },
        {
          "text": "面向对象思想",
          "link": "/06-design-patterns/面向对象思想"
        }
      ]
    }
  ],
  "/07-algorithms/": [
    {
      "text": "📌 专题总览",
      "link": "/07-algorithms/README"
    },
    {
      "text": "leetcode",
      "collapsed": false,
      "items": [
        {
          "text": "Leetcode -动态规划",
          "link": "/07-algorithms/leetcode/Leetcode -动态规划"
        },
        {
          "text": "leetcode-字节跳动",
          "link": "/07-algorithms/leetcode/leetcode-字节跳动"
        },
        {
          "text": "leetcode排序",
          "link": "/07-algorithms/leetcode/leetcode排序"
        },
        {
          "text": "LeetCode题解",
          "link": "/07-algorithms/leetcode/LeetCode题解"
        }
      ]
    },
    {
      "text": "sorting",
      "collapsed": false,
      "items": [
        {
          "text": "归并排序",
          "link": "/07-algorithms/sorting/归并排序"
        },
        {
          "text": "排序算法比较",
          "link": "/07-algorithms/sorting/排序算法比较"
        }
      ]
    },
    {
      "text": "sword-offer",
      "collapsed": false,
      "items": [
        {
          "text": "剑指Offer题解",
          "link": "/07-algorithms/sword-offer/剑指Offer题解"
        }
      ]
    }
  ],
  "/08-devops/": [
    {
      "text": "📌 专题总览",
      "link": "/08-devops/README"
    },
    {
      "text": "专题笔记",
      "collapsed": false,
      "items": [
        {
          "text": "阿里云",
          "link": "/08-devops/阿里云"
        }
      ]
    },
    {
      "text": "docker",
      "collapsed": false,
      "items": [
        {
          "text": "docker 总览",
          "link": "/08-devops/docker/README"
        },
        {
          "text": "Centos 安装Docker",
          "link": "/08-devops/docker/Centos 安装Docker"
        },
        {
          "text": "Docker",
          "link": "/08-devops/docker/Docker"
        },
        {
          "text": "Docker Hello World",
          "link": "/08-devops/docker/Docker Hello World"
        },
        {
          "text": "Docker 容器使用",
          "link": "/08-devops/docker/Docker 容器使用"
        },
        {
          "text": "Docker 容器连接",
          "link": "/08-devops/docker/Docker 容器连接"
        },
        {
          "text": "Docker 镜像使用",
          "link": "/08-devops/docker/Docker 镜像使用"
        },
        {
          "text": "DockerCommit",
          "link": "/08-devops/docker/DockerCommit"
        },
        {
          "text": "DockerHub",
          "link": "/08-devops/docker/DockerHub"
        },
        {
          "text": "Docker启动",
          "link": "/08-devops/docker/Docker启动"
        },
        {
          "text": "docker访问控制",
          "link": "/08-devops/docker/docker访问控制"
        },
        {
          "text": "MacOS Docker 安装",
          "link": "/08-devops/docker/MacOS Docker 安装"
        },
        {
          "text": "Spring Boot2.0实战Docker容器",
          "link": "/08-devops/docker/Spring Boot2.0实战Docker容器"
        },
        {
          "text": "tomcat",
          "link": "/08-devops/docker/tomcat"
        },
        {
          "text": "Ubuntu Docker 安装",
          "link": "/08-devops/docker/Ubuntu Docker 安装"
        },
        {
          "text": "Windows Docker 安装",
          "link": "/08-devops/docker/Windows Docker 安装"
        }
      ]
    },
    {
      "text": "git",
      "collapsed": false,
      "items": [
        {
          "text": "git 总览",
          "link": "/08-devops/git/README"
        },
        {
          "text": "Git 创建仓库",
          "link": "/08-devops/git/Git 创建仓库"
        },
        {
          "text": "Git 服务器搭建",
          "link": "/08-devops/git/Git 服务器搭建"
        },
        {
          "text": "Git 查看提交历史",
          "link": "/08-devops/git/Git 查看提交历史"
        },
        {
          "text": "Git 标签",
          "link": "/08-devops/git/Git 标签"
        },
        {
          "text": "Git 远程仓库(Github)",
          "link": "/08-devops/git/Git 远程仓库(Github)"
        },
        {
          "text": "Git基础",
          "link": "/08-devops/git/Git基础"
        }
      ]
    },
    {
      "text": "idea",
      "collapsed": false,
      "items": [
        {
          "text": "IntelliJ IDEA使用技巧",
          "link": "/08-devops/idea/IntelliJ IDEA使用技巧"
        }
      ]
    },
    {
      "text": "linux",
      "collapsed": false,
      "items": [
        {
          "text": "linux 总览",
          "link": "/08-devops/linux/README"
        },
        {
          "text": "Linux vi 与vim",
          "link": "/08-devops/linux/Linux vi 与vim"
        },
        {
          "text": "linux yum 命令",
          "link": "/08-devops/linux/linux yum 命令"
        },
        {
          "text": "Linux 安装",
          "link": "/08-devops/linux/Linux 安装"
        },
        {
          "text": "Linux 忘记密码解决方法",
          "link": "/08-devops/linux/Linux 忘记密码解决方法"
        },
        {
          "text": "Linux 文件与目录管理",
          "link": "/08-devops/linux/Linux 文件与目录管理"
        },
        {
          "text": "Linux 用户和用户组管理",
          "link": "/08-devops/linux/Linux 用户和用户组管理"
        },
        {
          "text": "Linux 磁盘管理",
          "link": "/08-devops/linux/Linux 磁盘管理"
        },
        {
          "text": "Linux 系统启动过程",
          "link": "/08-devops/linux/Linux 系统启动过程"
        },
        {
          "text": "Linux 远程登录",
          "link": "/08-devops/linux/Linux 远程登录"
        },
        {
          "text": "Linux简介",
          "link": "/08-devops/linux/Linux简介"
        }
      ]
    },
    {
      "text": "maven",
      "collapsed": false,
      "items": [
        {
          "text": "maven 总览",
          "link": "/08-devops/maven/README"
        },
        {
          "text": "Maven Eclispe",
          "link": "/08-devops/maven/Maven Eclispe"
        },
        {
          "text": "Maven IntelliJ",
          "link": "/08-devops/maven/Maven IntelliJ"
        },
        {
          "text": "Maven NetBeans",
          "link": "/08-devops/maven/Maven NetBeans"
        },
        {
          "text": "Maven POM",
          "link": "/08-devops/maven/Maven POM"
        },
        {
          "text": "Maven Web 应用",
          "link": "/08-devops/maven/Maven Web 应用"
        },
        {
          "text": "Maven 仓库",
          "link": "/08-devops/maven/Maven 仓库"
        },
        {
          "text": "Maven 依赖管理",
          "link": "/08-devops/maven/Maven 依赖管理"
        },
        {
          "text": "Maven 引入外部依赖",
          "link": "/08-devops/maven/Maven 引入外部依赖"
        },
        {
          "text": "Maven 快照(SNAPSHOT)",
          "link": "/08-devops/maven/Maven 快照(SNAPSHOT)"
        },
        {
          "text": "Maven 插件",
          "link": "/08-devops/maven/Maven 插件"
        },
        {
          "text": "Maven 构建 & 项目测试",
          "link": "/08-devops/maven/Maven 构建 & 项目测试"
        },
        {
          "text": "Maven 构建 Java 项目",
          "link": "/08-devops/maven/Maven 构建 Java 项目"
        },
        {
          "text": "Maven 构建生命周期",
          "link": "/08-devops/maven/Maven 构建生命周期"
        },
        {
          "text": "Maven 构建配置文件",
          "link": "/08-devops/maven/Maven 构建配置文件"
        },
        {
          "text": "Maven 自动化部署",
          "link": "/08-devops/maven/Maven 自动化部署"
        },
        {
          "text": "Maven 项目模板",
          "link": "/08-devops/maven/Maven 项目模板"
        },
        {
          "text": "构建工具",
          "link": "/08-devops/maven/构建工具"
        }
      ]
    }
  ],
  "/09-frontend/": [
    {
      "text": "📌 专题总览",
      "link": "/09-frontend/README"
    },
    {
      "text": "专题笔记",
      "collapsed": false,
      "items": [
        {
          "text": "iframe下监听postMessage并打印接收的消息",
          "link": "/09-frontend/iframe下监听postMessage并打印接收的消息"
        },
        {
          "text": "nodejs中md5加密验签实例",
          "link": "/09-frontend/nodejs中md5加密验签实例"
        }
      ]
    }
  ],
  "/10-big-data/": [
    {
      "text": "📌 专题总览",
      "link": "/10-big-data/README"
    },
    {
      "text": "专题笔记",
      "collapsed": false,
      "items": [
        {
          "text": "ACP例题",
          "link": "/10-big-data/ACP例题"
        },
        {
          "text": "QuickBI",
          "link": "/10-big-data/QuickBI"
        },
        {
          "text": "QuickBI思考与练习",
          "link": "/10-big-data/QuickBI思考与练习"
        },
        {
          "text": "共享单车骑行分析",
          "link": "/10-big-data/共享单车骑行分析"
        },
        {
          "text": "大数据ACP笔记",
          "link": "/10-big-data/大数据ACP笔记"
        },
        {
          "text": "大数据笔记",
          "link": "/10-big-data/大数据笔记"
        },
        {
          "text": "机器学习",
          "link": "/10-big-data/机器学习"
        },
        {
          "text": "机器学习PAI",
          "link": "/10-big-data/机器学习PAI"
        },
        {
          "text": "机器学习PAI思考与练习",
          "link": "/10-big-data/机器学习PAI思考与练习"
        },
        {
          "text": "知识点1 MaxCompute",
          "link": "/10-big-data/知识点1 MaxCompute"
        },
        {
          "text": "知识点2 AnalyticDB",
          "link": "/10-big-data/知识点2 AnalyticDB"
        },
        {
          "text": "知识点3 数据集成",
          "link": "/10-big-data/知识点3 数据集成"
        },
        {
          "text": "知识点4 DDL部分",
          "link": "/10-big-data/知识点4 DDL部分"
        },
        {
          "text": "知识点5 DML部分",
          "link": "/10-big-data/知识点5 DML部分"
        },
        {
          "text": "知识点6 内建函数、窗口函数规则、隐式转换规则",
          "link": "/10-big-data/知识点6 内建函数、窗口函数规则、隐式转换规则"
        },
        {
          "text": "知识点7 Map Reduce",
          "link": "/10-big-data/知识点7 Map Reduce"
        },
        {
          "text": "知识点8 Graph 图计算",
          "link": "/10-big-data/知识点8 Graph 图计算"
        },
        {
          "text": "知识点9 DataWorks",
          "link": "/10-big-data/知识点9 DataWorks"
        }
      ]
    },
    {
      "text": "experiments",
      "collapsed": false,
      "items": [
        {
          "text": "单车01_实验目的",
          "link": "/10-big-data/experiments/单车01_实验目的"
        },
        {
          "text": "单车02_实验准备",
          "link": "/10-big-data/experiments/单车02_实验准备"
        },
        {
          "text": "单车03_实验步骤",
          "link": "/10-big-data/experiments/单车03_实验步骤"
        },
        {
          "text": "单车04_实验总结",
          "link": "/10-big-data/experiments/单车04_实验总结"
        },
        {
          "text": "单车05_课后任务",
          "link": "/10-big-data/experiments/单车05_课后任务"
        }
      ]
    }
  ],
  "/11-coding-practice/": [
    {
      "text": "📌 专题总览",
      "link": "/11-coding-practice/README"
    }
  ]
};

export default defineConfig({
  title: 'Interview Notes',
  description: '面向AI Agent智能体、前后端、通用技术面试准备的知识库',
  base: process.env.BASE_PATH || '/interview-notes/',
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/interview-notes/assets/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#6366f1' }],
    ['meta', { name: 'author', content: 'loulanyue' }]
  ],

  themeConfig: {
    siteTitle: 'Interview Notes',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '基础核心',
        items: [
          { text: '01 计算机基础', link: '/01-computer-science/README' },
          { text: '02 Java 核心', link: '/02-java/README' },
          { text: '03 数据库', link: '/03-database/README' },
          { text: '04 框架与微服务', link: '/04-framework/README' }
        ]
      },
      {
        text: '高阶架构',
        items: [
          { text: '05 系统设计与 AI Agent', link: '/05-system-design/README' },
          { text: '06 设计模式', link: '/06-design-patterns/README' },
          { text: '07 算法与题解', link: '/07-algorithms/README' },
          { text: '08 DevOps 与运维', link: '/08-devops/README' }
        ]
      },
      {
        text: '技术领域',
        items: [
          { text: '09 前端开发', link: '/09-frontend/README' },
          { text: '10 大数据与机器学习', link: '/10-big-data/README' },
          { text: '11 编码实战', link: '/11-coding-practice/README' }
        ]
      },
      { text: '复习建议', link: '/review-tips' },
      { text: '贡献指南', link: '/CONTRIBUTING' }
    ],

    sidebar,

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/loulanyue/interview-notes' }
    ],

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    footer: {
      message: '基于 Apache-2.0 协议开源维护',
      copyright: 'Copyright © 2026 loulanyue'
    }
  },

  vite: {
    plugins: [
      {
        name: 'resolve-notes-images',
        enforce: 'pre',
        resolveId(id, importer) {
          if (/\.(png|jpe?g|gif|svg|webp|ico)(\?.*)?$/i.test(id)) {
            const cleanId = id.split('?')[0];
            if (importer && (cleanId.startsWith('.') || cleanId.startsWith('/'))) {
              const directPath = path.resolve(path.dirname(importer), cleanId);
              if (fs.existsSync(directPath)) {
                return directPath;
              }
            }
            const basename = path.basename(cleanId);
            const assetPath = path.resolve(__dirname, '../assets', basename);
            if (fs.existsSync(assetPath)) {
              return assetPath;
            }
            return '\0virtual:placeholder-image';
          }
          return null;
        },
        load(id) {
          if (id === '\0virtual:placeholder-image') {
            return 'export default "data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'40\' viewBox=\'0 0 100 40\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' fill=\'%239ca3af\' font-size=\'10\'%3EImage%3C/text%3E%3C/svg%3E";';
          }
          return null;
        }
      }
    ],
    resolve: {
      alias: [
        {
          find: /^assets\//,
          replacement: path.resolve(__dirname, '../assets') + '/'
        }
      ]
    }
  },

  markdown: {
    config(md) {
      const HTML_TAGS = new Set([
        'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'blockquote',
        'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist',
        'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption',
        'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr',
        'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'main', 'map',
        'mark', 'menu', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output',
        'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select',
        'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td',
        'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var',
        'video', 'wbr', 'font', 'center', 'badge'
      ]);

      function isAllowedHtml(str) {
        const trimmed = str.trim();
        if (trimmed.startsWith('<!--') && trimmed.endsWith('-->')) return true;
        const match = trimmed.match(/^<\/?([a-zA-Z0-9_-]+)/);
        if (!match) return false;
        const tag = match[1].toLowerCase();
        return HTML_TAGS.has(tag);
      }

      function escapeHtml(str) {
        return str
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#039;');
      }

      const defaultInline = md.renderer.rules.html_inline || ((tokens, idx) => tokens[idx].content);
      md.renderer.rules.html_inline = (tokens, idx, options, env, self) => {
        const content = tokens[idx].content;
        if (!isAllowedHtml(content)) {
          return escapeHtml(content);
        }
        return defaultInline(tokens, idx, options, env, self);
      };

      const defaultBlock = md.renderer.rules.html_block || ((tokens, idx) => tokens[idx].content);
      md.renderer.rules.html_block = (tokens, idx, options, env, self) => {
        const content = tokens[idx].content;
        if (!isAllowedHtml(content)) {
          return `<pre><code>${escapeHtml(content)}</code></pre>`;
        }
        return defaultBlock(tokens, idx, options, env, self);
      };
    }
  }
});
