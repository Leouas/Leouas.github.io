---
title: 右键快捷菜单添加Terminal
date: 2020-02-16 14:15:39
tags:
- Windows
- terminal
---

```batch
@echo off

reg.exe add "HKEY_CLASSES_ROOT\Directory\Background\shell\wt" /f /ve /d "Windows Terminal here"
reg.exe add "HKEY_CLASSES_ROOT\Directory\Background\shell\wt" /f /v "Icon" /t REG_EXPAND_SZ /d "C:\Users\Leoua\AppData\Local\terminal\terminal.ico"
reg.exe add "HKEY_CLASSES_ROOT\Directory\Background\shell\wt\command" /f /ve /t REG_EXPAND_SZ /d "\"%%LOCALAPPDATA%%\Microsoft\WindowsApps\wt.exe\""

pause
```

[ico图标](https://whuteducn-my.sharepoint.com/personal/leoua7_whut_edu_cn/_layouts/52/download.aspx?share=EQQpToqJO3tKo7k4RcLXZvgBiwjTwJgqpY0TqDj-0BnVXg)

另外，还需要设置一下 `profiles.json` 里对应 profile 的 `startingDiretory` 字段：

```
"startingDiretory" : "."
```

**已知问题**：这样设置的话，如果不通过右键菜单直接启动 Windows Terminal，工作目录会变为 `/mnt/c/Windows/System32`。这是一个 [BUG](https://github.com/microsoft/terminal/issues/878)，且截至本文发布时仍未修复。WT 的命令行参数目前还很不完善，期待后续更新吧。

参照 [https://www.jianshu.com/p/31bf9f9c0fb1](https://www.jianshu.com/p/31bf9f9c0fb1)
