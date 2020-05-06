---
title: 配置git代理

comments: false
date: 2020-05-06 19:34:12
categories: geek
tags: proxy
description: 添加git代理，改善github clone速度
photo: https://unsplash.it/1600/900?random
---

```
git config --global http.proxy http://127.0.0.1:8001
git config --global https.proxy https://127.0.0.1:8001
```
将端口修改为自己v2ray的http传入配置
![](https://imgkr.cn-bj.ufileos.com/6a7f2ac2-10bf-4650-8908-948ccb4a3228.png)
![](https://imgkr.cn-bj.ufileos.com/6b61d418-4336-41da-8ad5-390824cec452.png)
