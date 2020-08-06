---
category: 大前端
tags:
  - JavaScript
date: 2018-02-01
title: JavaScript基本数据类型
vssue-title: JavaScript基本数据类型
# draft: true 草稿标识
# top: true 置顶文章标识
---

学习 Js 的五种基本数据类型

<!-- more -->

## 1. String

```js
var name = 'hello world'
var city = "Shanghai"
// es6
let today = `good day`
```

## 2. Number

```js
var a = 1
var b = 1.23
var c = Infinity  // 无穷大
```

## 3. Boolean

```js
var isOk = true
var bad = false
```

## 4. Undefined

```js
var undefined = undefined
var c;
console.log(c)  // undefined
```

## 5. Null

```js
var a = null
```

## 6. BigInt (2020.07.01添加)

```js
let big = 123n
console.log(typeof big) // bigint
```