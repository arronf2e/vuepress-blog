---
category: 大前端
tags:
  - ES6
date: 2017-12-19
title: 《深入理解ES6》读书笔记--箭头函数 
vssue-title: 《深入理解ES6》读书笔记--箭头函数 
# draft: true 草稿标识
# top: true 置顶文章标识
---

顾名思义，箭头函数就是一种使用箭头 => 定义函数的新语法。

<!-- more -->

## 1. 基本语法 

### 1.1 只有一个参数，可以直接写参数名，省略括号；如果函数体只有一个表示达，可省略花括号。

```js
let fun = v => v
// 相当于：
let fun = function(v) {
  return v;
}
```

### 1.2 如果参数的个数大于等于2，或者没有参数 ，需要添加小括号

```js
let fun = (v1, v2) => v1 + v2
// 相当于：
let fun = function(v1, v2) {
  return v1 + v2;
}

--------------------------------

let fun2 = () => 'Arron'
// 相当于：
let fun2 = function() {
  return 'Arron'
}
```

### 1.3 如果函数体编写多个表达式，需要花括号包裹函数体，并显示地返回一个值

```js
let fun = (num1, num2) => {
  let num3 = num1 + num2;
  return num3;
}

// 相当于： 
let fun = function(num1, num2) {
  let num3 = num1 + num2;
  return num3;
}
```

### 1.4 如果需要定义一个空函数，需要写一对没有内容的花括号

```js
let fun = () => {}
// 相当于：
let fun = function() {}
```

### 1.5 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上小括号。

```js
let fun = id => ({id, name: 'Arron'})
// 相当于：
let fun = function(id) {
  return {
    id,
    name: 'Arron'
  }
}
```

## 2. 与传统函数的不一样

### 2.1 箭头函数没有this绑定

```js
1. 传统写法
var arron = {
  birth: 1993,
  getAge: function () {
    var b = this.birth; // 1993
    var fn = function () {
      console.log(this);   // 这里的this指向window
        return new Date().getFullYear() - this.birth;
    };
    return fn();
  }
};

arron.getAge();  // NaN

// hack写法：

var arron = {
  birth: 1993,
  getAge: function () {
    var that = this;
    var b = that.birth; // 1993
    var fn = function () {
      console.log(this);   // 这里的this指向window
        return new Date().getFullYear() - that.birth;
    };
    return fn();
  }
};

arron.getAge();  // 24

----------------------------

// 2. 箭头函数
const arron = {
  birth: 1993,
  getAge: function () {
    const b = this.birth; // 1993
    const fn = () => {
      console.log(this);   // 这里的this指向当前对象arron
        return new Date().getFullYear() - this.birth;
    };
    return fn();
  }
};

arron.getAge();  // 24 
```

注意点：
- 因为箭头函数的this值取决于该函数外部非箭头函数的this值，所以call()、apply()、bind()方法无法改变this的指定，即传入的第一个参数会被忽略。
- 因为箭头函数没有正常函数所拥有的prototype属性，所以不能使用 new 关键字调用一个箭头函数，会报错: xxx is not a constructor。

### 2.2 箭头函数没有arguments绑定

箭头函数没有自己的arguments对象绑定，所以不管函数在哪执行，在箭头函数内始终可以访问外围非箭头函数的arguments对象。

```js
function outFun() {
  return () => arguments[0]
}
outFun(5)();  // 5
const outFun = () => {
  return () => arguments[0]
}
outFun(5)();  // 报错: arguments is not defined
```
