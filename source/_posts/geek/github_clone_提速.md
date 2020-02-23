---
title: git clone 提速
date: 2020-02-22 16:18:10
tags: github
---

国内正常情况下`git clone `的速度非常慢，其实并不是因为 http://github.com 的这个域名被限制了，而是[http://github.global.ssl.fastly.Net]([github.global.ssl.fastly.net](http://github.global.ssl.fastly.Net))

在hosts中映射解决

## 获取网址ip

[The Best IP Address, Email and Networking Tools - IPAddress.com](https://www.ipaddress.com/ “https://www.ipaddress.com/“)

## 添加映射

路径`C:\Windows\System32\drivers\etc`

 添加映射 `ip地址`+`空格`+`域名`

```
199.232.5.194 http://github.global.ssl.fastly.Net
```
>当前这种方式已经没有什么效果了
>最好的解决方法是使用码云 gitee 导入 github 仓库，之后在 gitee 上面克隆仓库