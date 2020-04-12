---
title: Windows Terminal 美化
date: 2020-02-16 19:12:45
categories: geek
tags:
- terminal
- Windows
---
## 安装PowerLine

### 先安装oh-my-posh

- 为当前用户安装

```powershell
Install-Module posh-git -Scope CurrentUser
Install-Module oh-my-posh -Scope CurrentUser
```

- 为所有用户安装

用管理员权限打开PowerShell

```powershell
Install-Module posh-git
Install-Module oh-my-posh
```

- 安装完成后输入

```powershell
Import-Module posh-git
Import-Module oh-my-posh
Set-Theme PowerLine
```
<!-- more -->
打开~\Documents\WindowsPowerShell，新建文本文档，叫Microsoft.PowerShell_profile.ps1
输入

```
Import-Module posh-git
Import-Module oh-my-posh
Set-Theme PowerLine
```

## 修改配置文件

Windows Terminal的配置文件储存在`~\AppData\Local\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\RoamingState\profiles.json`

---

### 一种配置

```powershell
{
    "globals": {
        "alwaysShowTabs": true,
        "defaultProfile": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
        "initialCols": 120,
        "initialRows": 40,
        "keybindings": [
            {
                "command": "closeTab",
                "keys": [
                    "ctrl+w"
                ]
            }
        ],
        "requestedTheme": "system",
        "showTabsInTitlebar": true,
        "showTerminalTitleInTitlebar": true
    },
    "profiles": [
        {
            "acrylicOpacity": 0.75,
            "closeOnExit": true,
            "colorScheme": "Campbell",
            "commandline": "powershell.exe",
            "cursorColor": "#FFFFFF",
            "cursorShape": "bar",
            "fontFace": "Hack",
            "fontSize": 14,
            "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
            "historySize": 9001,
            "icon": "ms-appx:///ProfileIcons/{61c54bbd-c2c6-5271-96e7-009a87ff44bf}.png",
            "name": "Windows PowerShell",
            "padding": "0, 0, 0, 0",
            "snapOnInput": true,
            "startingDirectory": "%Workspaces%",
            "useAcrylic": true
        }
    ],
    "schemes": [
        {
            "background": "#0C0C0C",
            "black": "#0C0C0C",
            "blue": "#0037DA",
            "brightBlack": "#767676",
            "brightBlue": "#3B78FF",
            "brightCyan": "#61D6D6",
            "brightGreen": "#16C60C",
            "brightPurple": "#B4009E",
            "brightRed": "#E74856",
            "brightWhite": "#F2F2F2",
            "brightYellow": "#F9F1A5",
            "cyan": "#3A96DD",
            "foreground": "#CCCCCC",
            "green": "#13A10E",
            "name": "Campbell",
            "purple": "#881798",
            "red": "#C50F1F",
            "white": "#CCCCCC",
            "yellow": "#C19C00"
        }
    ]
}
```
