---
title: hexo 迁移至windows
date: 2020-02-16 13:13:12
tags: Windows
---

## 复制hexo部分文件夹

- hexo
  - source
  - themes
  - _config.yml
  - package

## 安装

- [git-for-windows](http://download.csdn.net/download/u013904227/9923305)
- [node.js](https://nodejs.org/en/download/)
- [hexo](https://hexo.io/)

```
$ npm install hexo-cli -g #使用全局设置下载、安装hexo至默认的文件夹
$ hexo init xxxx
$ cd xxxx
$ npm install
$ hexo server
```

<!-- more -->

## git bash配置身份信息 并配置git deploy

```text
$ git config --global user.name "yourname"git config --global user.email "youremail"
```

配置SSH

```
deploy:
type: git
repo: git@github.com:yourname/yourname.github.io.git
branch: master
```

**安装所需插件**

```
$ npm install hexo-deployer-git --save
$ hexo deploy
```
