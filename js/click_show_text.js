var a_idx = 0; jQuery(document).ready(function ($) { $("body").click(function (e) { var a = new Array ("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"); var $i = $("<span/>").text(a[a_idx]); a_idx = (a_idx + 1) % a.length; var x = e.pageX, y = e.pageY; $i.css({ "z-index": 5, "top": y - 20, "left": x, "position": "absolute", "font-weight": "bold", "color": "#FF0000" }); $("body").append($i); $i.animate({ "top": y - 180, "opacity": 0 }, 3000, function () { $i.remove(); }); }); setTimeout('delay()', 2000); }); function delay() { $(".buryit").removeAttr("onclick"); }
/*来源: 小师弟
文章作者: 小师弟
文章链接: https://www.liuyao-blog.cn/posts/7410.html#toc-heading-40
本文章著作权归作者所有，任何形式的转载都请注明出处。*/
