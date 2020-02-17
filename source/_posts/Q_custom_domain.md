---
title: GitPage Custom Domain
date: 2020-02-14 13:25:21
tags:
- blog
- hexo
---
### problem：
每次配置 custom domain 之后，再次 hexo deploy 之后，custom domain 会被重置失效
### Solution：
```
$ cd hexo/source
$ vim CNAME
```
在CANME文件中输入自己的网址
[参照 Xu Sheng's Blog](https://www.xuxusheng.com/post/hexo%E5%8F%91%E5%B8%83%E4%B9%8B%E5%90%8Egitpage%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D%E5%A4%B1%E6%95%88)
