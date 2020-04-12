---
title: 使用7牛云作为图床
date: 2020-02-14 23:41:35

tags:
- hexo
- blog
---

## 在7牛云上注册并实名认证

[7牛云官网](https://portal.qiniu.com/, "https://portal.qiniu.com/")
打开>管理控制台>对象储存>空间管理>空间设置>访问控制>设为公开空间
在>文件管理可以看到自己的 外链域名

## 使用hexo-qiniu-sync

https://github.com/gyk001/hexo-qiniu-sync

在博客根目录安装插件

```
$ cd hexo
$ npm install hexo-qiniu-sync --save
```

<!-- more -->

```
#七牛云存储设置
qiniu:
  offline: false
  sync: true
  bucket: 外链域名
# secret_file: sec/qn.json or C:
  access_key: 右上>秘钥管理中查看
  secret_key: 同上
  dirPrefix: static
  urlPrefix: 外链域名/static
  up_host: http://upload.qiniu.com
  local_dir: static
  update_exist: true
  image: 
    folder: images
    extend: 
  js:
    folder: js
  css:
    folder: css
```

/hexo/static/ 文件夹下的文件在使用 `hexo s` 或 `hexo g` 或 `hexo d` 时被自动同步到7牛云
或者 `hexo qiniu sync`
图片标签

```
{% qnimg imageFile attr1:value1 attr2:value2 'attr3:value31 value32 value3n' [extend:?imageView2/2/w/600 | normal:yes] %}
{% qnjs jsFile attr1:value1 attr2:value2 'attr3:value31 value32 value3n' %}
{% qncss cssFile attr1:value1 attr2:value2 'attr3:value31 value32 value3n' %}
```

一般的

```
{% qnimg name.XXX %}
```