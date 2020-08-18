---
category: 大前端
tags:
  - JavaScript
date: 2020-08-14
title: 浅谈 Composition Event 组合事件
vssue-title: Composition Event 组合事件
draft: true 草稿标识
# top: true 置顶文章标识
---

DOM接口的 CompositionEvent 表示用户间接输入文本（比如使用中文输入法）时发生的事件，常用的事件有 compositionstart、compositionupdate、compositionend。

<!-- more -->

根据规范，Composition 事件的触发顺序如下：

- 输入开始时触发 compositionstart 事件
- 输入过程中每次插入新字段时触发 compositionupdate 事件，包括在 start 事件后立即触发一次，end 事件前立即触发一次;跟 input 事件触发一样，触发时机略早于 input
- 输入完成，选择词语之后触发 compositionend 事件

## Demo

<p>调试日志：</p>
<div id='log'>
  
</div>

<input placeholder='在这里输入测试Composition事件' id='input'/>


<script>
  window.onload = function() {
    const input = document.getElementById('input')
    const logger = document.getElementById('log')
    console.log(input)
    input.addEventListener('compositionstart', function(e){
      console.log('compositionstart', e)
      insertLog('触发compositionstart事件')
    }, false)
    input.addEventListener('compositionupdate', function(e){
      console.log('compositionupdate', e)
      insertLog('触发compositionupdate事件，输入值为：' +　e.data)
    }, false)
    input.addEventListener('compositionend', function(e){
      console.log('compositionend', e)
      insertLog('触发compositionend事件，最终输入值为：' + e.data)
    }, false)
    input.addEventListener('input', function(e){
      console.log('input', e)
      insertLog('触发input事件')
    }, false)

    function insertLog(info){
      const p = document.createElement('p')
      p.innerHTML = info
      logger.appendChild(p)
    }
  }
</script>