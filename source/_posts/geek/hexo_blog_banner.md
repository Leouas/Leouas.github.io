---
title: Banner
date: 2020-02-14 12:53:10
categories: geek
tags: 

- hexo
- blog

---

我的博客是部署在 gitpages 上的，由于长城墙（Great Firewall）的 存在，访问速度不稳定，一开始我放在 blog 的 hander 的 banner.png 是直接放在 /blog/themes/landscape/source/img 中的，加载速度慢。
现在改用了图床，换成了图片外链

```
$ vim /hexo/themes/landscape/source/css/_partial/header.styl
```

修改为

```
background: url(https://ftp.bmp.ovh/imgs/2020/02/6667f5f5e7130078.jpg) center #000
```
