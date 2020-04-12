---
title: hexo new pages 后自动用编辑器打开文档
date: 2020-02-22 15:15:53
categories: geek
tags: hexo
---

在博客根目录中新建`scripts`文件夹，然后新建 `.js`文件，加入以下内容

编辑器 如下面的 ‘Mark Text’，需要配置好环境变量

```javascript
let spawn = require('hexo-util/lib/spawn');

hexo.on('new'||'n', (data) => {
spawn('Mark Text', [hexo.base_dir, data.path]);
});
```
