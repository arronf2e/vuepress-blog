---
category: 大前端
tags:
  - TypeScript
date: 2021-01-12
title: TypeScript—基本数据类型
vssue-title: TypeScript—基本数据类型
# draft: true 草稿标识
# top: true 置顶文章标识
---

### 1. boolean
```TypeScript
let isOk: boolean = true
// ES5 target
"use strict";
var isOk = true;
```

### 2. number
```TypeScript
let year: number = 2021
let month: number = 1
let date: number = 12
// ES5 target
"use strict";
var year = 2021;
var month = 1;
var date = 12;
```

### 3. string
```TypeScript
let name: string = 'arron'
// ES5 target
"use strict";
var name = 'arron';
```

### 4. null、undefined：是所有类型的子类型，可以赋值给其他类型
```TypeScript
let u: undefined = undefined
let n: null = null
let num: number = undefined
let name: string = null
// ES5 target
"use strict";
var u = undefined;
var n = null;
var num = undefined;
var name = null;
```

### 5. void 空值：用来表示没有任何返回值的函数
```TypeScript
function sayHello(): void {
  console.log('hello world')
}
// ES5 target
"use strict";
function sayHello() {
    console.log('hello world');
}
```

### 6. any：任意类型
```TypeScript
let number: any = "23"
number = 23
// ES5 target
"use strict";
var number = "23";
number = 23;

// 当变量声明的时候，未指定类型，则为 any 类型
let someValue;
someValue = 23
someValue = "23"
// ES5 target
"use strict";
var someValue;
someValue = 23;
someValue = "23";
```