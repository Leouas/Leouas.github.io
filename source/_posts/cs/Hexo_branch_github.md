---
title：heox_博客多设备同步管理
date: 2020-02-20 02:29:08
tag: 

- hexo
- github

---

# Hexo_Branch_github

之前一直没想好个人博客文件怎么存放？

- 想要在不同设备上更新博客

- 想要更换电脑时非常方便的迁移博客文件

- 想要博客文件被妥善保管以防本地文件丢失时及时止损

想要实现这三点，搜寻一番后发现在托管静态博客文件的repo创建一个新分支，然后将本地文件提交到新分支就能很好的实现上面三点。

### 设置  .gitignore

在博客根目录`/hexo`中创建`.gitnore`文件

```
.deploy*/
public/
node_modules/
*.log
db.json
```

### 创建本地分支，并推送至远端

```shell
git checkout -b hexo
```

> `git checkout -b hexo` 等价于`git branch hexo` (创建hexo分支) +` git checkout hexo`（切换到hexo分支）
> 
> `git branch`(查看当前分支)

```shell
git push origin hexo
```

> 将新分支推送至GitHub

### 编写shell脚本，快捷更新文件

新建`update.sh`

```shell
git add . && git commit -m "update" && git push origin hexo
```

### notes:

-`git push origin: hexo` 删除hexo远程分支
  
-`git branch -r`查看远程分支
  
-`git branch -a` 查看所有分支

- 提交时注意：
  
  - 将themes目录以内中的主题的.git目录删除，因为一个git仓库中不能包含另一个git仓库，否则提交主题文件夹会失败
  - 后期需要更新主题时在另一个地方`git clone`下来该主题的最新版本，然后将内容拷到当前主题目录即可

- 另注：
  
  - `git push origin :hexo`可删除清空远程hexo分支
  
  - `git branch -r`查看远程分支
  
  - `git branch -a`查看所有分支

参照 https://www.titanjun.top/

- [基于GitHub和Hexo搭建个人博客](https://www.titanjun.top/2018/03/08/%E5%9F%BA%E4%BA%8EGitHub%E5%92%8CHexo%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/)

- [NexT主题配置优化-出土指南](https://www.titanjun.top/2018/04/03/NexT%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE%E4%BC%98%E5%8C%96-%E5%87%BA%E5%9C%9F%E6%8C%87%E5%8D%97/)

- [Hexo博客多台电脑设备同步管理](https://www.titanjun.top/2018/04/12/Hexo%E5%8D%9A%E5%AE%A2%E5%A4%9A%E5%8F%B0%E7%94%B5%E8%84%91%E8%AE%BE%E5%A4%87%E5%90%8C%E6%AD%A5%E7%AE%A1%E7%90%86/)
