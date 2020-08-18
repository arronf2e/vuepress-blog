---
category: 大前端
tags:
  - css3
date: 2017-05-27
title: CSS基础知识整理
vssue-title: CSS基础知识整理
# draft: true 草稿标识
# top: true 置顶文章标识
---

基础CSS知识点整理

<!-- more -->

## 1. 行内元素（内联元素）
> 特点：默认宽度就是内容的实际宽度，默认水平排列，不支持宽高，margin,padding只对左右有效果，上下没有效果

    常见行内元素: a  span  img  label  input  select  textarea

## 2. 块级元素
> 特点：默认100%宽度（浏览器显示区域），独占一行，垂直排列，可以设置宽高

    常用块级元素: div  p  h1-h6  ul  form  header  footer  section
    div  header  footer  section: 没有任何默认的css属性
    p: 自带上下margin
    h1-h6: 自带上下margin,自带字体大小
    ul: 自带上下margin， 左边padding
    li: 自带小圆点
    form: 不带任何样式

## 3. 盒子模型

    width
    height
    border
    padding: 上下左右全部相加
    margin: 上下重叠的时候取最大的，左右还是相加
            margin-top如果想父级元素不受影响，需要在父级上添加overflow:hidden
    
## 4. 背景相关

    background
    background-color  background-image  background-position  background-repeat

## 5. 文本样式

    font-size  color  line-height  text-align  font-family
    letter-spacing  字符间距
    word-spacing  单词/汉字间距
    list-style  ul li 的默认样式，同样使用 none 去除默认样式
    text-decoration  a标签的默认下划线，使用  text-decoration:none  去除默认样式
    a:link   a:visted  a:hover  a:active

## 6. 选择器优先级

    style   1000
    id      100
    class   10
    htmltag 1

## 7. 定位

    float: none left right

    注意: 浮动元素的display自动变更为block
         父元素受影响，该元素脱离文档流，父级元素高度消失，解决方法：overflow:hidden 或者 给父元素加height来修复父级元素高度
         同级不加浮动的元素会受影响，解决方法：clear:both

    position: static relative absolute fixed 
    
    static: 正常文档流
    relative: 相对定位，相对于它原来在文档流中的元素位置而进行偏移，没有脱离文档流
    absolute: 绝对定位，脱离文档流，根据父级以上position非static的元素进行定位，必须指定left,right,top,bottom中的至少一个,不然会发生不脱离文档流的情况,display变为block
    fixed: 固定定位，脱离文档流，根据窗口为原点进行偏移定位，也必须指定left,right,top,bottom中的至少一个,display变为block
    z-index: 通过设置该属性来调整层级

## 8. 常用 css

    cursor: pointer;  鼠标手型
    display: none; 隐藏元素
    z-index: 999; 调整层级，只用于position: absolute fixed的元素
    opacity: xxx;
    filter: alpha(opacity=50);[IE兼容写法] 半透明
    text-decoration: none; 去除a标签下划线
    list-style: none; 去除ul li 小圆点
              

wait more...