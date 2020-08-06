---
category: 大前端
tags:
  - JavaScript
date: 2017-04-19
title: JavaScript数组的常用方法
vssue-title: JavaScript数组的常用方法
# draft: true 草稿标识
# top: true 置顶文章标识
---

总结自己常用的一些数组方法及容易碰到的坑~

<!-- more -->

## 1. 末尾增：push

Desc: 将一个或多个元素添加到数组的末尾，并返回该数组的新长度 (改变原数组 :scream:)   
Code:

```js
const nums = [1,2,3]
nums.push(4)
console.log(nums) // [1,2,3,4]
const len = nums.push(5,6,7)
console.log(nums, len) // [1,2,3,4,5,6,7] 7
```

## 2. 开头增：unshift

Desc: 将一个或多个元素添加到数组的开头，并返回该数组的新长度 (改变原数组 :scream:)  
Code: 

```js
const nums = [1,2,3]
nums.unshift(4)
console.log(nums) // [4,1,2,3]
const len = nums.unshift(5,6,7)
console.log(nums, len) // [5,6,7,4,1,2,3] 7
```

## 3. 末尾删：pop

Desc: 删除数组的最后一个元素，并返回被删除的这个元素（改变原数组 :scream:)  
Code: 

```js
const nums = [1,2,3]
const b = nums.pop()
console.log(nums, b)  // [1,2] 3
```

## 4. 开头删：shift

Desc: 删除数组的第一个元素，并返回被删除的这个元素（改变原数组 :scream:)    
Code:

```js
const nums = [1,2,3]
const b = nums.shift()
console.log(nums, b)  // [2,3] 1
```

## 5. 从指定位置，删除（并可添加）：splice

Desc: 从指定位置，删除(可添加)元素到数组，并返回被删除的元素列表（改变原数组 :scream:)   
Code:  

```js
// 语法
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// demo
const names = ['arron', 'jerry', 'jack', 'mary']
names.splice(0)
console.log(names) // ['arron', 'jerry', 'jack', 'mary']
const result = names.splice(0, 1)
console.log(names, result) // ['jerry', 'jack', 'mary'] ['arron']
```

## 6. 拷贝：slice

Desc: 返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end） （不改变原数组 :smile:)

```js
// 语法
array.slice(begin, end)

// demo
const names = ['arron', 'jerry', 'jack', 'mary']
const sliceNames = names.slice(0, 2)
console.log(sliceNames) // ['arron', 'jerry']

// 如果 begin 为0，end不传，或者 begin,and 都不传，则新数组就是原数组的一份拷贝
const names = ['arron', 'jerry', 'jack', 'mary']
const sliceNames1 = names.slice(0)
const sliceNames2 = names.slice()
console.log(sliceNames1, sliceNames2) // ["arron", "jerry", "jack", "mary"]  ["arron", "jerry", "jack", "mary"] 
```

## 7. 合并（连接）两个或者多个数组，也可以直接连接值：concat

Desc: 返回一个合并后的新数组（不改变原数组 :smile:)  
Code: 

```js
// 语法
const newArr = oldArr.concat(val1, val2,...)

// demo
const oldArr = [1,2,3]
const newArr1 = oldArr.concat(4,5)
const newArr2 = oldArr.concat([4,5])
const newArr3 = oldArr.concat(4,5,[6,7])
console.log(newArr1, newArr2, newArr3)  //[1, 2, 3, 4, 5] [1, 2, 3, 4, 5] [1, 2, 3, 4, 5, 6, 7]
```

## 未完待补充....