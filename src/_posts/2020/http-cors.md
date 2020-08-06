---
category: 网络
tags:
  - http
date: 2020-05-26
title: 什么是跨域？常见的跨域处理方法有哪些？
vssue-title: 什么是跨域？常见的跨域处理方法有哪些？
# draft: true 草稿标识
# top: true 置顶文章标识
---

由于浏览器的同源策略的限制，我们需要处理跨域的情况才能进行正常的 http 请求

<!-- more -->

# 什么是同源策略？

## 1. 同源策略

同源策略是浏览器的一种安全机制，它是用于限制一个 origin 的文档或者它加载的脚本如何能与另一个源的资源进行交互。它能帮助阻隔恶意文档，减少可能被攻击的媒介。

## 2. 同源的定义

如果两个 URL 的 protocol（协议）、host（域名）、port（端口） 都相同的话，那么这两个 URL 就是同源的。  

我们把 http://www.baidu.com 作为一个参考 URL

|  URL   | 是否同源 | 原因 |
|  ----  |  ----  | ---- |
|http://www.baidu.com/about| 是 | 协议、域名、端口均相同 |
|https://www.baidu.com| 否 | protocol 不一致|
|http://baidu.com| 否 | host 不一致|
|http://www.baidu.com:9999| 否 | port 不一致|

# 常见的跨域方法

## 1. JSONP

原理：通过 script 标签加载 js 文件，并不受同源策略的限制，所以我们可以通过动态创建 script 进行跨域的请求  

- 前端定义好回调函数，并作为 script 标签请求的 url 的参数
- 服务端收到请求，拿到对应的回调函数名，并将返回数据放在参数中将其返回
- 页面拿到返回，创建 script 标签，并执行相应的回调方法，通过参数拿到返回数据

## 2. CORS（Cross-origin resource sharing）跨域资源共享

CORS 使用额外的 HTTP 头来告诉浏览器  让运行在一个 origin (domain) 上的Web应用被准许访问来自不同源服务器上的指定的资源。当一个资源从与该资源本身所在的服务器不同的域、协议或端口请求一个资源时，资源会发起一个跨域 HTTP 请求。CORS需要客户端与服务端同时支持。

## 3. nginx proxy 转发

```nginx
location /v1/ {
    proxy_pass http://127.0.0.1:9999/v1/
}
```

## 4. 开发环境可以使用 webpack-dev-server proxy 进行代理转发

```js
devServer: {
    proxy: {
        '/api': 'http://localhost:3000'
    }
}
```