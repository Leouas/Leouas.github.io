---
title: hexo_per_page
date: 2020-02-17 05:12:25
tags:
- hexo
- blog
---

# [转载]Hexo程序archive页面数量设置

[原文链接](http://www.yuzhewo.com/2015/11/21/Hexo%E7%A8%8B%E5%BA%8Farchive%E9%A1%B5%E9%9D%A2%E6%95%B0%E9%87%8F%E8%AE%BE%E7%BD%AE/)

2015-11-21 | 分类于[业余爱好](http://www.yuzhewo.com/categories/%E4%B8%9A%E4%BD%99%E7%88%B1%E5%A5%BD/)

使用Hexo搭建博客已经有一段时间了，当文章数量达到十几篇左右时，突然发觉archive归档页面仅显示10篇文章，并且出现了分页功能，对于我们这种个人博客，文章数量不会很多，所以更希望是在一页中完全展示出来，便于访问者查找感兴趣的文章。

在网上查找原因，发现此处的10条限制来自_config.yml文件中的配置，这个配置控制所有的分页配置，包括首页、归档页、tag分类页面。  

```
per_page: 10  
```

如果我们想对上面三个页面做独立的配置，需要安装插件进行功能支持。

- [hexo-generator-index](https://github.com/hexojs/hexo-generator-index)
- [hexo-generator-archive](https://github.com/hexojs/hexo-generator-archive)
- [hexo-generator-tag](https://github.com/hexojs/hexo-generator-tag)

使用如下命令进行安装需要的插件  

<!-- more -->

```
$ npm install hexo-generator-archive --save  
```

对应的_config.yml文件中添加如下配置  

```
index_generator:  
 per_page: 5  

archive_generator:  
 per_page: 20  //为0时表示不分页全展示  
 yearly: true  //按年生成归档  
 monthly: true //按月生成归档  

tag_generator:  
 per_page: 10  
```

> 注意:上面归档设置中的按年或者按月，需要修改模板给出对应的链接入口，对于没有兴趣修改模板的同学，可以将此处设为false，减少生成页面时的工作量。

参考网站：
[https://github.com/hexojs/hexo-generator-archive](https://github.com/hexojs/hexo-generator-archive)
[https://github.com/iissnan/hexo-theme-next/issues/30](https://github.com/iissnan/hexo-theme-next/issues/30)

[Hexo](http://www.yuzhewo.com/tags/Hexo/)[archive](http://www.yuzhewo.com/tags/archive/)
