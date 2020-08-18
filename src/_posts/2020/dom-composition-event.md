---
category: 大前端
tags:
  - JavaScript
date: 2020-08-14
title: 浅谈 Composition Event 组合事件
vssue-title: Composition Event 组合事件
# draft: true 草稿标识
# top: true 置顶文章标识
---

DOM接口的 CompositionEvent 表示用户间接输入文本（比如使用中文输入法）时发生的事件，常用的事件有 compositionstart、compositionupdate、compositionend。

<!-- more -->

根据规范，Composition 事件的触发顺序如下：

- 输入开始时触发 compositionstart 事件
- 输入过程中每次插入新字段时触发 compositionupdate 事件，包括在 start 事件后立即触发一次，end 事件前立即触发一次;跟 input 事件触发一样，触发时机略早于 input
- 输入完成，选择词语之后触发 compositionend 事件

## Demo

<iframe src="https://codesandbox.io/embed/sweet-jackson-cqckw?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="sweet-jackson-cqckw"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>