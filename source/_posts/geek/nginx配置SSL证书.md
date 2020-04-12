---
title: nginx配置ssl证书
date: 2020-02-15 22:27:06
categories: geek
tags:
- hexo
- ssl
- nginx
- Linux
---

## nginx完全卸载

1. **先停止nginx进程 sudo kill 端口号，如果杀不死该进程 使用 sudo kill -9 端口号**
2. `sudo apt-get remove nginx`
3. `sudo rm -rf /etc/nginx`
4. `dpkg -l|grep nginx`
5. `sudo apt remove nginx-commen`
6. `sudo apkg --purge nginx-common`

## 重装nginx

`sudo apt install nginx`
参照[wendj/Nginx使用与完全卸载](https://www.cnblogs.com/wendj/p/9884684.html)

<!-- more -->

## 配置SSL

获取SSl证书，并下载
提取得到 `.pem` 和 `.key` 两个文件

```
$ cd /etc/nginx
$ mkdir cert
$ cp SSL证书绝对路径 /etc/nginx/cert
```

**修改 `/etc/nginx/` 中 `nginx.conf` server配置**

```
$ sudo vim /etc/nginx/nginx.conf
```

```
server {
    listen       443 ssl;
    server_name  leouas.top;

    ssl_certificate /etc/nginx/cert/leouas.top.pem;

    ssl_certificate_key /etc/nginx/cert/leouas.top.key;

    ssl_prefer_server_ciphers  on;

    location / {
        root   /hexo/public;
        index  index.html index;
    }
    ...
}
```

重启nginx

```
$ nginx -s reload
```
