---
category: 大前端
tags:
  - ES6
date: 2017-12-19
title: 《深入理解ES6》读书笔记--函数之处理无命令参数 
vssue-title: 《深入理解ES6》读书笔记--函数之处理无命令参数 
# draft: true 草稿标识
# top: true 置顶文章标识
---

在 JavaScript 中有无命名参数的情况，在es5，es6中也分别提供了处理方案

<!-- more -->

## 1. ES5  arguments

arguments是一个对象还不是一个数组，并且不能显式地创建，只有在函数被调用时才可以使用。

```js
function add(){
  for(let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
add(1,2);  // 1 2
```

## 2.ES6 rest参数 

```js
function sum(...values) {
  let sum = 0;
  for(let val of values) {
    sum += val;
  }
  return sum;
} 
sum(1,2,3);  // 6

function sum(a, ...values) {
  let sum = 0;
  for(let val of values) {
    sum += val;
  }
  return sum;
}
sum(1,2,3);  // 5
```

rest 参数中的变量代表一个数组，所以数组特有的方法都可以用于这个变量，比如push

```js
function testFun(...people){
  people.push('arron')
  console.log([...people])
}
testFun('steven', 'jack')  //  ["steven", "jack", "arron"]
```

rest参数有两个限制条件：
- 每个函数只能声明一个rest参数，并用一定要放在参数的最后一个
- 函数的length属性，不包括 rest 参数

```js
function testFun(...people, name) {}  // error

function testFun(name, ...people) {}
		
testFun.length   // 1
```