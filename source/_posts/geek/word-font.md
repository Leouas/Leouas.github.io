---
title: Handwriting_Style_Font_Modification in Word
date: 2020-06-15 14:41:25
categories: geek
tags: 
comments: false
description: 
photo: https://imgkr.cn-bj.ufileos.com/a3e7525f-4935-4b39-a6bd-d3995b265bd9.png
---

Word中，依次点击`文件`->`选项`->`信任中心`->`信任中心设置`->`宏设置`

![](https://imgkr.cn-bj.ufileos.com/7d356f59-e981-4cdf-8a03-39d176c25d6e.png)

然后 `视图`->`宏`

输入名称，回车编辑宏内容

宏作者：UncleSugar

链接：[https://www.zhihu.com/question/20308770/answer/241699602](https://www.zhihu.com/question/20308770/answer/241699602)

```
Sub 字体修改()
'
' 字体修改 宏
'
    Dim R_Character As Range


    Dim FontSize(5)
    ' 字体大小在5个值之间进行波动，可以改写
    FontSize(1) = "21"
    FontSize(2) = "21.5"
    FontSize(3) = "22"
    FontSize(4) = "22.5"
    FontSize(5) = "23"



    Dim FontName(3)
    '字体名称在三种字体之间进行波动，可改写，但需要保证系统拥有下列字体
    FontName(1) = "修改此处的字体"
    FontName(2) = "修改此处的字体"
    FontName(3) = "修改此处的字体"

    Dim ParagraphSpace(5)
    '行间距 在一定以下值中均等分布，可改写
    ParagraphSpace(1) = "12"
    ParagraphSpace(2) = "13"
    ParagraphSpace(3) = "20"
    ParagraphSpace(4) = "7"
    ParagraphSpace(5) = "12"

    '不懂原理的话，不建议修改下列代码

    For Each R_Character In ActiveDocument.Characters

        VBA.Randomize

        R_Character.Font.Name = FontName(Int(VBA.Rnd * 3) + 1)

        R_Character.Font.Size = FontSize(Int(VBA.Rnd * 5) + 1)

        R_Character.Font.Position = Int(VBA.Rnd * 3) + 1

        R_Character.Font.Spacing = 0


    Next

    Application.ScreenUpdating = True



    For Each Cur_Paragraph In ActiveDocument.Paragraphs

        Cur_Paragraph.LineSpacing = ParagraphSpace(Int(VBA.Rnd * 5) + 1)


    Next
        Application.ScreenUpdating = True


End Sub
```


