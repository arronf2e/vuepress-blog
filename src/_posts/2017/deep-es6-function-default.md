---
category: 大前端
tags:
  - ES6
date: 2017-12-19
title: 《深入理解ES6》读书笔记--函数之函数默认值
vssue-title: 《深入理解ES6》读书笔记--函数之函数默认值
# draft: true 草稿标识
# top: true 置顶文章标识
---

ES6中函数默认值的使用方法

<!-- more -->

## 1. es5中默认参数的模拟

```js
function add(a, b) {
  a = a || 3;  如果传入了a，就取值为a，如果没有传入a，取值为3
  b = b || 4;  如果传入了b，就取值为b，如果没有传入b，取值为4
  return a + b;
}

add(1,2)  // 3
add(1);  // 5
add();  // 7
```
		
> 以上方法的弊端

> 如果传入的a或b的值为0呢
  
> a(0, 1) // 4  很显然是不对的，因为 0 || 3 => 3
		
修改如下:

```js
function add(a, b) {
  a = typeof a != undefined ? a : 3;
  b = typeof b != undefined ? b : 4;
  return a + b;
}
```
		
> 这种方法虽然达到了目标，但增加了额外的代码量。
	
## 2. es6函数默认参数值

```js
function add(a=3, b=4) {
  return a + b;
}

add() // 7,
add(1) // 5,
add(1,2)  // 3
```
	
> 与es5写法相比，写法简洁了许多，一目了然。

关于默认的arguments值的问题  
es5非严格模式： arguments的值会随形参的重新赋值而改变
es5严格模式： arguments的值不会随形参的重新赋值而改变，其实就是调用参数时传入的实参的值，如果不传，即为undefined。
es6严格/非严格：与es5严格方式一样，不会改变。

关于方法length的问题
function.length一般指的都是形参的个数，但这里要注意，设置默认参数的形参不包括在内哦，也就是说上面的 add.length == 0
	
## 3. 默认参数表达式

```js
// 该方法会在每次调用add方法，并且不传入第二个参数时调用一次。
function getValue() {
  return 5;
}

function add(a=1, b=getValue()) {
  return a + b;
}

add(1);  // 6 , 此时调用了getValue
add(1,2); // 3 , 传入了第二个参数，没有调用getValue
```
		
## 4. 后面参数基于前面参数设置默认值，但先定义的参数不能基于后面的参数取值

```js
function add(a, b=a+1) {
  return a + b;
}

add(1);   // 3

错误用法：
function add(a=b, b) {
  return a + b;
}
```