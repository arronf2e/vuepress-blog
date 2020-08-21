---
category: 大前端
tags:
  - JavaScript
date: 2017-05-30
title: Safari new Date()填坑记
vssue-title: Safari new Date()填坑记
# draft: true 草稿标识
# top: true 置顶文章标识
---

Safari new Date()的使用注意点

<!-- more -->

## 1. 场景 

> 后端数据中日期返回为 date:'2017-01-13'
  我在前端使用 new Date(date)
  本来一直在chrome中调试，一切正常。昨天在safari中发现报错：Invalid date in safari

经过自己的搜索，发现了这个问题，stackoverflow上同样的提问：[http://stackoverflow.com/questions/4310953/invalid-date-in-safari](http://stackoverflow.com/questions/4310953/invalid-date-in-safari)

## 2. 原因

目前Safari可以支持的标准格式如下: 
- MM-dd-yyyy 
- yyyy/MM/dd 
- MM/dd/yyyy 

所以 yyyy-mm-dd 这种格式就不支持，直接报错


## 3. 解决方法
第一种：  

```js
new Date('2011-04-12'.replace(/-/g, "/"))
```

第二种：

```js
使用一些时间处理库，比如 :date-fns   moments.js 等
```

OK,Done!