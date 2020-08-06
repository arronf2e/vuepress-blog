---
category: 大前端
tags:
  - JavaScript
date: 2018-05-20
title: JavaScript 对this的理解
vssue-title: JavaScript 对this的理解
# draft: true 草稿标识
# top: true 置顶文章标识
---

this 在 JavaScript 中使用非常频繁，但 this 的指向却有非常多的情况。

<!-- more -->

## 1. 纯粹的全局方法调用，this 指向 window（浏览器端）

```js
window.name = 'hello world'
function sayName() {
  console.log(this.name)  // hello world
  console.log(this === window) // true
}
sayName()
```

## 2. IIFE 立即调用的函数表达式（声明函数的同时立即调用这个函数）

```js
(function() {
    console.log('iife function')  // iife function
    console.log(this === window)  // true
})()
```

## 3. 作为对象的方法调用，this 指向该对象 

```js
window.name = 'jerry'
var obj = {
  name: 'arron',
  sayName: function() {
    console.log(this.name)
  }
}
obj.sayName() // arron
var sayOut = obj.sayName
sayOut()  // jerry
```

## 4. 构造器调用，this 指向构造的新对象 

```js
function Person(name){
  this.name = name
}
var arron = new Person('arron')
console.log(arron.name) // arron
```

## 5. DOM 元素绑定事件回调方法中的 this ，指向该 DOM 

```js
var button = document.getElementById('button')
button.addEventListener('click', function() {
    console.log(this)  // <button id="button"></button>
})
```

## 6. call、apply、bind，this指向这三个方法的第一个参数 thisArg，如果没有第一个参数，则 this 指向  window

```js
// call
var obj = {
    name: 'obj',
    sayName: function() {
        console.log(this.name)
    }
}
var a = {
  name: 'a'
}
window.name = 'windowwww'

obj.sayName()       // obj
obj.sayName.call(a) // a
obj.sayName.call() // windowwww
obj.sayName.apply(a) // a
obj.sayName.apply() // windowwww
obj.sayName.bind(a)()  // a
obj.sayName.bind()() // windowwww
```



