---
category: 大前端
tags:
  - html5
date: 2016-04-18
title: img 标签的 title 与 alt 的区别
vssue-title: img 标签的 title 与 alt 的区别
# draft: true 草稿标识
# top: true 置顶文章标识
---

img 标签的 title 与 alt 的区别

<!-- more -->

## alt 属性

图片加载失败，显示的占位文字

```html
<img src='' alt='狗子加载不出来' />
```
[![1592377963646.png](https://wx2.sbimg.cn/2020/06/18/1592377963646.png)](https://sbimg.cn/image/0ayjj)

## title 

鼠标停留图片上显示的图片介绍文案，即使图片加载失败也会显示

```html
<img src='' alt='狗子加载不出来' title='这是只狗子'/>
```
![1592377994410.png](https://wx1.sbimg.cn/2020/06/18/1592377994410.png)
[![1592378000560.png](https://wx1.sbimg.cn/2020/06/18/1592378000560.png)](https://sbimg.cn/image/0aVxk)