---
title: Github 反应速度慢以及图片加载错误问题
date: 2020-02-19 19:12:11
tags: github
---

1. #### 获取URL

F12开发者选项 -> 右击加载失败图片 -> 检查 -> 定位到图片地址
src="https://avatars2.githubusercontent.com/u/35817305?s=40&v=4"

2. #### 获取IP
   
   [https://www.ipaddress.com/](https://www.ipaddress.com/)

![](https://i.loli.net/2020/02/19/FAEgP64qUm9b5Dl.png)

![](https://i.loli.net/2020/02/19/dJrTQeG1u7qSvfI.png)

3. #### 修改host文件
   
   路径`C:\Windows\System32\drivers\etc`
   添加映射 `ip地址`+`空格`+`域名`

![](https://i.loli.net/2020/02/19/j7Eg5CfYmX3pyLb.png)

![](https://i.loli.net/2020/02/19/kwNWrTxALsd4Sui.png)

- 其中,下面两个映射是固定的
  192.30.253.112 github.com
  192.30.253.119 gist.github.com

- 下面这些映射中的ip`199.232.28.133`是在 [ipaddress](https://www.ipaddress.com/ "https://www.ipaddress.com/") 获取的
  199.232.28.133 assets-cdn.github.com
  199.232.28.133 raw.githubusercontent.com
  199.232.28.133 gist.githubusercontent.com
  199.232.28.133 cloud.githubusercontent.com
  199.232.28.133 camo.githubusercontent.com
  199.232.28.133 avatars0.githubusercontent.com
  199.232.28.133 avatars1.githubusercontent.com
  199.232.28.133 avatars2.githubusercontent.com
  199.232.28.133 avatars3.githubusercontent.com
  199.232.28.133 avatars4.githubusercontent.com
  199.232.28.133 avatars5.githubusercontent.com
  199.232.28.133 avatars6.githubusercontent.com
  199.232.28.133 avatars7.githubusercontent.com
  199.232.28.133 avatars8.githubusercontent.com
