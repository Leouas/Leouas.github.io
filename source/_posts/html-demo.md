---
title: hexo-html-demo
comments: 'true'
date: 2020-04-14 05:26:22
categories: geek
tags:
- hexo
- sakura
description: 在Post内添加Html时使用rawtag还是有问题，暂时使用html layout:false
photo: https://cdn.jsdelivr.net/gh/Leouas/Leouas-img/picgo/2020-04-14_05-32-14.png
---
```
---
title: 
date: 
layout: false
categories: 
tags: 
description: 
photo: 
---

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/xbclub/staticCDN@0.6/css/googlefont.css" media="all">
  <link rel="stylesheet" id="saukra_css-css" href="https://cdn.jsdelivr.net/gh/xbclub/staticCDN@0.6/css/style.css" type="text/css" media="all">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/xbclub/staticCDN@0.6/css/lib.min.css" media="all">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/xbclub/staticCDN@0.6/css/font.css" media="all">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/xbclub/staticCDN@0.6/css/insight.css" media="all">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/xbclub/staticCDN@0.6/css/jquery.fancybox.min.css" media="all">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/xbclub/staticCDN@0.6/css/zoom.css" media="all">
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/xbclub/staticCDN@0.6/css/sharejs.css">


  <script type="text/javascript"> var bg = "<%= theme.bg%>".split(","); var bgindex = Math.floor(Math.random()*bg.length); if (!!window.ActiveXObject || "ActiveXObject" in window) { //is IE?  alert('朋友，IE浏览器未适配哦~'); } </script>
  <style type="text/css">
  .hljs-ln{border-collapse:collapse}.hljs-ln td{padding:0}.hljs-ln-n:before{content:attr(data-line-number)}
  </style> <style type="text/css">.site-top .lower nav{display:block !important;}.author-profile i,.post-like a,.post-share .show-share,.sub-text,.we-info a,span.sitename,.post-more i:hover,#pagination a:hover,.post-content a:hover,.float-content i:hover{color:#FE9600}.feature i,.download,.navigator i:hover,.links ul li:before,.ar-time i,span.ar-circle,.object,.comment .comment-reply-link,.siren-checkbox-radio:checked + .siren-checkbox-radioInput:after{background:#FE9600}::-webkit-scrollbar-thumb{background:#FE9600}.download,.navigator i:hover,.link-title,.links ul li:hover,#pagination a:hover,.comment-respond input[type='submit']:hover{border-color:#FE9600}.entry-content a:hover,.site-info a:hover,.comment h4 a,#comments-navi a.prev,#comments-navi a.next,.comment h4 a:hover,.site-top ul li a:hover,.entry-title a:hover,#archives-temp h3,span.page-numbers.current,.sorry li a:hover,.site-title a:hover,i.iconfont.js-toggle-search.iconsearch:hover,.comment-respond input[type='submit']:hover{color:#FE9600}.comments .comments-main{display:block !important;}.comments .comments-hidden{display:none !important;}background-position:center center;background-attachment:inherit;} </style>
</head>

<body>
	<header class="site-header no-select gizle yya sabit" role="banner"><div class="site-top"> <div class="site-branding"> <span class="site-title"> <span class="logolink moe-mashiro"> <a href="/"> <span class="sakurasono">さくら荘その</span> <span class="shironeko">leouas</span> </a> </span> </span> </div> <div class="searchbox search-form-submit"> <i class="iconfont js-toggle-search iconsearch icon-search"> </i> </div> <div id="show-nav" class="showNav mobile-fit"> <div class="line line1"> </div> <div class="line line2"> </div> <div class="line line3"> </div> </div> <div class="lower-cantiner"> <div class="lower"> <nav class="mobile-fit-control hide"> <ul id="menu-new" class="menu"><li> <a href="/"> <span class="faa-parent animated-hover"> <i class="fa  fa-fort-awesome faa-shake" aria-hidden="true"></i> 首页 </span> </a></li><li> <a href="javascript:;"> <span class="faa-parent animated-hover"> <i class="fa  fa-archive faa-shake" aria-hidden="true"></i> 分类 </span> </a><ul class="sub-menu"><li> <a href="/categories/geek/"> <i class="fa fa-code" aria-hidden="true"></i> 技术 </a> </li><li> <a href="/categories/whut/"> <i class="fa fa-file-text-o" aria-hidden="true"></i> 学习 </a> </li><li> <a href="/categories/share/"> <i class="fa fa-commenting-o" aria-hidden="true"></i> 随想 </a> </li><li> <a href="/categories/mics/"> <i class="fa fa-music" aria-hidden="true"></i> 媒体 </a> </li></ul></li><li> <a href="javascript:;"> <span class="faa-parent animated-hover"> <i class="fa  fa-list-ul faa-vertical" aria-hidden="true"></i> 清单 </span> </a><ul class="sub-menu"><li> <a href="/categories/books/"> <i class="fa fa-th-list faa-bounce" aria-hidden="true"></i> 书单 </a> </li><li> <a href="/bangumi/"> <i class="fa fa-film faa-vertical" aria-hidden="true"></i> 番组 </a> </li><li> <a href="/playlist/"> <i class="fa fa-headphones" aria-hidden="true"></i> 歌单 </a> </li><li> <a href="https://huaban.com/sayk/pins/" target="_blank" rel="noopener"> <i class="fa fa-photo" aria-hidden="true"></i> 图集 </a> </li></ul></li><li> <a href="/archives"> <span class="faa-parent animated-hover"> <i class="fa  fa-archive faa-shake" aria-hidden="true"></i> 归档 </span> </a></li><li> <a href="/tags"> <span class="faa-parent animated-hover"> <i class="fa  fa-tags" aria-hidden="true"></i> 标签 </span> </a></li><li> <a href="/comment/"> <span class="faa-parent animated-hover"> <i class="fa  fa-pencil-square-o faa-tada" aria-hidden="true"></i> 留言 </span> </a></li><li> <a href="javascript:;"> <span class="faa-parent animated-hover"> <i class="fa  fa-leaf faa-wrench" aria-hidden="true"></i> 关于 </span> </a><ul class="sub-menu"><li> <a href="/about/"> <i class="fa fa-meetup" aria-hidden="true"></i> 我？ </a> </li></ul></li><li> <a href="/links/"> <span class="faa-parent animated-hover"> <i class="fa  fa-link faa-shake" aria-hidden="true"></i> 友人帐 </span> </a></li><li> <a href="/atom.xml"> <span class="faa-parent animated-hover"> <i class="fa  fa-rss faa-pulse" aria-hidden="true"></i> RSS </span> </a></li></ul> </nav> </div> </div> </div> </header>

	<!-- content -->

</body>

</html>
```