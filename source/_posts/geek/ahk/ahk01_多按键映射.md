---
title: AHK-一个热键实现多种按键映射
date: 2020-02-15 01:20:23
tags: ahk
categories: geek
---
## Virtual Desktop Switching
e.g.
第一次按ScrollLock向右切换虚拟桌面
第二次按ScrollLock向左切换虚拟桌面
```autohotkey
【HotKey】::
    toggle := !toggle
    if(toggle)
        send ^#{Right}
    else
        send ^#{Left}
return
```
## If you want to toggle with more then two [Keyboard Shortcuts] toggle's
这是另外一种可爱的做法
<!-- more -->
```autohotkey
; [+ = Shift] [! = Alt] [^ = Ctrl] [# = Win]
#SingleInstance ignore
a := 1

; If you want to toggle with more the two toggle's you can use this code.
;a = 1   => send {^#Right}
;a = 2   => send {^#Left}
;a = 3   => send {????}

;click the f1 key to toggle
f1::
if (a=1)
{
Menu, Tray, Icon,c:\icons\32x32\icon1.ico,1,1 ; change tray icon
send {^#Right}
a := 2
}else{

if (a=2)
{
Menu, Tray, Icon,c:\icons\32x32\icon2.ico,1,1 ; change tray icon
send {^#Left}
a := 3
}else{

if (a=3)
{
Menu, Tray, Icon,c:\icons\32x32\icon3.ico,1,1 ; change tray icon
;send {????}
a := 1
}}}
return

esc::exitapp
```
参照[Toggle between keyboard shortcuts with AutoHotKey](https://stackoverflow.com/questions/32040773/toggle-between-keyboard-shortcuts-with-autohotkey)
