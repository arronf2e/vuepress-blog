---
category: 大前端
tags:
  - nodejs
date: 2020-08-13
title: Nodejs 学习笔记 —— 模块机制
vssue-title: Nodejs 学习笔记 —— 模块机制
draft: true 草稿标识
# top: true 置顶文章标识
---

在 Nodejs 的模块系统中，每个文件都被视为一个独立的模块，可以通过 module.exports 来导出一个模块，也可以通过 require 来引入一个模块。

<!-- more -->

## CommonJS规范

要说 Nodejs 的模块机制，得先了解一下 CommonJS 的模块规范。CommonJS 对模块的定义不算复杂，主要分模块引用、模块定义、模块标识三大部分。

### 1. 模块引用 

```js
const fs = require('fs')
```

