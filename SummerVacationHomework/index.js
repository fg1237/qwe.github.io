var article = document.getElementsByTagName('article')[0];
var a = article.children;

function change() {
    var width = parseInt(window.getComputedStyle(article, null).width);
    var awidth = width * 0.85 / 4 + 'px';
    var marginLeft = width * 0.15 / 3 + 'px';
    for (var i = 0; i < a.length; i++) {
        a[i].style.width = awidth;
        if (!((i + 1) % 4 == 0)) {
            a[i].style.marginRight = marginLeft;
        }
    }
}
change();
window.onresize = change;