---
title: COD6
comments: 'true'
date: 2020-04-14 04:21:51
categories: mics
tags:
description:
photo:
---

<meting-js "url=https://www.callofduty.com/cdn/mw/videos/seasons/s3-mw-home-hero-vid-desktop.mp4"  "pic=https://cdn.jsdelivr.net/gh/Leouas/Leouas-img/picgo/2020-04-14_04-29-28.png
" "id=9E2E3368B56CDBB4" "loop=yes" "theme=#FADFA3" "autoplay=true" "token=tokendemo" ></meting-js>


<div id="player1" class="dplayer"></div>
<script src="dist/DPlayer.min.js"></script><!-- use your path -->
<script>
var dp = new DPlayer({{
    container: document.getElementById('dplayer'),
    autoplay: true,
    theme: '#FADFA3',
    loop: true,
    screenshot: true,
    hotkey: true,
    logo: 'logo.png',
    volume: 0.2,
    mutex: true,
    video: {
        url: 'https://www.callofduty.com/cdn/mw/videos/seasons/s3-mw-home-hero-vid-desktop.mp4',
        pic: 'https://cdn.jsdelivr.net/gh/Leouas/Leouas-img/picgo/2020-04-14_04-29-28.png',
        thumbnails: 'thumbnails.jpg',
        type: 'auto'
    },
    subtitle: {
        url: 'webvtt.vtt',
        type: 'webvtt',
        fontSize: '25px',
        bottom: '10%',
        color: '#b7daff'
    },
    danmaku: {
        id: 'demo',
        api: 'https://api.prprpr.me/dplayer/',
        token: 'demo',
        maximum: 3000,
        user: 'DIYgod',
        margin: {
            bottom: '15%'
        },
        unlimited: true
    },
    contextmenu: [
        {
            text: 'custom contextmenu',
            link: 'https://github.com/MoePlayer/DPlayer'
        }
    ]
});
</script>

---

