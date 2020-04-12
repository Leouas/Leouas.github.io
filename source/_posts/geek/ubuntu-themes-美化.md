---

title: ubuntu-themes
date: 2020-02-14 21:05:19
tags: Linux
categories: geek

---

# 仿Mac主题

## 安装必要工具

安装配置gnome

```
$ sudo apt update
$ sudo apt install gnome-tweaks
$ sudo apt install chrome-gnome-shell
```

install gnome extensions

[extension.gnome.org](https://extensions.gnome.org/)

[User Themes](https://extensions.gnome.org/extension/19/user-themes/)

<!-- more -->

[Cupertino iCons Collection](https://www.gnome-look.org/p/1102582/)

[OSX El Capitan](https://www.gnome-look.org/p/1084939/)

[Shell UI blyr](https://extensions.gnome.org/extension/1251/blyr/)

[Dahs-to-dock](https://extensions.gnome.org/extension/307/dash-to-dock/)

```
$ gsettings set org.gnome.shell.extensions.dash-to-dock show-apps-at-top true
$ gsettings set org.gnome.shell.extensions.dash-to-dock custom-theme-running-dots false
$ gsettings set org.gnome.shell.extensions.dash-to-dock custom-theme-customize-running-dots false
$ gsettings set org.gnome.shell.extensions.dash-to-dock custom-theme-shrink false
$ gsettings set org.gnome.shell.extensions.dash-to-dock transparency-mode DEFAULT
$ gsettings set org.gnome.shell.extensions.dash-to-dock extend-height false
$ gsettings set org.gnome.shell.extensions.dash-to-dock dock-pozition BOTTOM
```

[Netspeed](https://extensions.gnome.org/extension/104/netspeed/)

[High Ubunterra](https://www.gnome-look.org/p/1207015/)

[Wallpaper](https://wallpapersite.com/)

Plank 替换 Ubuntu dock

```
sudo apt remove gnome-shell-extension-ubuntu-dock
sudo apt install plank
```

同时还需要关闭Dash to dock

```
add Plank to ‘startup applications
```

`#PlankThemesLocation: ~/.local/share/plank/themes`

隐藏ubuntu dock
[hider-hash](https://extensions.gnome.org/extension/805/hide-dash/)

时间移动到顶栏右侧
[move=clock](https://extensions.gnome.org/extension/2/move-clock/)

## 下载 Mc-OS CTLina主题

![](https://i.loli.net/2020/02/16/7H8GYphTBxzW6gt.jpg)
![](https://i.loli.net/2020/02/16/uYTGSDmRU72B3Qo.jpg)
[www.gnome-look.org/p/1241688/](https://www.gnome-look.org/p/1241688/)

## 更换Start-here的 activities.svg
