---
category: 大前端
tags:
  - nodejs
date: 2020-08-13
title: Nodejs 学习笔记 —— 模块机制的学习
vssue-title: Nodejs 学习笔记 —— 模块机制的学习
# draft: true 草稿标识
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

#### 2.1 模块标识符

模块标识符在 Nodejs 中主要分几类：
- 核心模块，如 fs、path、http等
- 以.、..开始的相对路径 
- 以/开始的绝对路径
- 非路径形式的文件模块，如 npm 中的各自定义模块

#### 2.2 文件定位

- 1. 文件扩展名分析  
在使用 require() 方法引入模块的时候，会经常省略文件扩展名，这种情况下 Nodejs 会按照 .js、.json、.node的顺序补充扩展示，依次尝试查找模块，尝试过程使用 fs 模块同步判断文件是否存在，这样的话会带来性能问题，如果引入 .json、.node的文件的话，我们可以加上后缀，提升一个查找的速度。

- 2. 目录分析与包  
如果在第一步中没有查找到相应的模块，则文件标识符会被当做目录。这时候 Node 会在当前目录下查找 package.json文件，然后通过 JSON.parse() 解析出包描述对象，取出 main 属性指定的文件名进行定位查找，如果没有 package.jons 文件，Node会把 index 当做默认文件名，依次查找 index.js 、index.json、index.node。


### 3. 模块编译

编译与执行是引入模块的最后一个阶段，定位到具体的文件之后，Node会新建一个模块对象，然后根据路径载入并编译。模块对象的定义如下：

```js
function Module(id, parent) {
  this.id = id
  this.exports = {}
  this.parent = parent
  if(parent && parent.children) {
    parent.children.push(this)
  }
  this.filename = null
  this.loaded = false
  this.children = []
}
```

JS模块在编译过程中， Node 会对获取的 JavsScript 文件内容进行头尾包装：

```js
(function(exports, require, module, __filename, __dirname) {
  var test = require('test')
  exports.test = function() {
    return 'hello test'
  }
})
```

通过这种包装的方式，就可以做到每个模块之间的作用域隔离，执行之后，模块的 exports 属性被返回给了调用方，exports 上的任何属性和方法都可以被外部调用，但是模块中的其他属性及变量不可直接被调用。
