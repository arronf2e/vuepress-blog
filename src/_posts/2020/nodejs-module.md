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
我们通过 require() 方法来引入一个模块，参数的话就是模块标识。


### 2. 模块定义

```js
// moduleA.js
export.sayHello = function() {
  return 'hello world'
}

// index.js
const moduleA = require('./moduleA')
const message = moduleA.sayHello()  
console.log(message)// 'hello world'
```

### 3. 模块标识

上面我们也提过了，模块标识就是传给 require() 方法的参数，路径标识必须是符合小驼峰命名规范的字符串，或者是以 . 、.. 开头的相对路径，或者是绝对路径，文件后缀名可以省略。  
模块都有自己的私有作用域，互不干扰。

## Nodejs 中的模块实现

一般在 Nodejs 中引入模块，都会经历三个步骤：
- 路径分析
- 文件定位
- 编译执行

Nodejs 中的模块主要分为两种，一种是 Nodejs 自身提供的核心模块，另一个是用户自定义的文件模块。两种模块存在一些差异：
- 核心模块在编译过程中，会直接编译进二进制执行文件，在 Nodejs 进程启动时，部分的核心模块就会直接加载到内存中，这样的话，其实核心模块的引入就省略了路径分析、文件定位这两个步骤，所以它的加载速度最快。
- 文件模块需要完整的经历上面三大步骤，因为速度上会比核心模块慢。

### 1. 优先从缓存加载

Nodejs 会对引入过的模块进行缓存，这样可以有效的减少二次引入的开销，可以通过 require.cache 来查看当前已缓存的模块

### 2. 路径分析与文件定位

#### 2.1 模块标识符分析

模块标识符在 Nodejs 中主要分几类：
- 核心模块，如 fs、path、http等
- 以.、..开始的相对路径 
- 以/开始的绝对路径