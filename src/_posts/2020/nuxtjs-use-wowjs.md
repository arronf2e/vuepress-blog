---
category: 大前端
tags:
  - Nuxtjs
date: 2020-08-20
title: Nuxtjs中引入 wow.js 实现页面元素随滚动条动画显示
vssue-title: Nuxtjs中引入 wow.js 实现页面元素随滚动条动画显示
# draft: true 草稿标识
# top: true 置顶文章标识
---

最近在做一个公司官网类的项目，需要在页面中实现一些动画的展示，让整个官网更有活力，引入了 wow.js 实现动画效果，记录一下~

<!-- more -->

## wow.js 

关于 wow.js 的内容介绍可以直接到 [wow.js官网](https://wowjs.uk/) ，我们可以用它很容易的就可以实现各种元素的动画效果。

## 安装

```sh
yarn add wowjs
```

## 使用

### 第一步：在 nuxt.config.js 中引入 animate.css

```js
export default {
  ...
  css: [
    ...,
    'wowjs/css/libs/animate.css'
  ]
}
```

### 第二步：在需要使用动画的组件中引入 wow

> 这边有个注意点，wow.js 只能在 client 端使用，所以在引入的时候我们要判断一下当前是不是在 client 环境，我们可以通过 Nuxt.js 为我们提供的 process.browser 来判断

```vue
<template>
  <div>hello</div>
</template>
<script>
export default {
  mounted() {
    // true 代表 client 端
    if(process.browser) {
      const { WOW } = require('wowjs')
      new WOW({
        live: false,
      }).init()
    }
  }
}
</script>
```

### 第三步：在元素上添加 wow 以及 动画名称的 class 就可以实现元素的动画效果

```vue
<template>
  <div class="wow bounceInDown">hello</div>
</template>
<script>
export default {
  mounted() {
    // true 代表 client 端
    if(process.browser) {
      const { WOW } = require('wowjs')
      new WOW({
        live: false,
      }).init()
    }
  }
}
</script>
```