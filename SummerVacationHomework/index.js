var article = document.getElementsByTagName('article')[0];
var hsw = document.getElementsByClassName('hsw')[0];
var nws = document.getElementsByClassName('nws')[0];
var cbn = document.getElementsByClassName('cbn')[0];
var zpb = document.getElementsByClassName('zpb')[0];
var lyh = document.getElementsByClassName('lyh')[0];
var hsw1 = document.getElementsByClassName('hsw1')[0];
var nws1 = document.getElementsByClassName('nws1')[0];
var cbn1 = document.getElementsByClassName('cbn1')[0];
var zpb1 = document.getElementsByClassName('zpb1')[0];
var lyh1 = document.getElementsByClassName('lyh1')[0];
var fg1 = document.getElementsByClassName('fg1')[0];
var p = document.getElementsByTagName('p')[0];
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
fg1.onclick = function() {
    article.style.display = 'block';
    p.style.display = 'block';
    hsw.style.display = 'none';
    nws.style.display = 'none';
    cbn.style.display = 'none';
    zpb.style.display = 'none';
    lyh.style.display = 'none';
    fg1.className = 'fg1 border';
    nws1.className = 'nws1';
    cbn1.className = 'cbn1';
    zpb1.className = 'zpb1';
    lyh1.className = 'lyh1';
    hsw1.classList = 'hsw1';
}
hsw1.onclick = function() {
    article.style.display = 'none';
    nws.style.display = 'none';
    cbn.style.display = 'none';
    zpb.style.display = 'none';
    lyh.style.display = 'none';
    p.style.display = 'none';
    hsw1.className = 'hsw1 border';
    hsw.style.display = 'block';
    fg1.className = 'fg1';
    nws1.className = 'nws1';
    cbn1.className = 'cbn1';
    zpb1.className = 'zpb1';
    lyh1.className = 'lyh1';
}
nws1.onclick = function() {
    article.style.display = 'none';
    p.style.display = 'none';
    nws.style.display = 'block';
    cbn.style.display = 'none';
    zpb.style.display = 'none';
    lyh.style.display = 'none';
    hsw.style.display = 'none';
    fg1.className = 'fg1';
    nws1.className = 'nws1 border';
    hsw1.className = 'hsw1';
    cbn1.className = 'cbn1';
    zpb1.className = 'zpb1';
    lyh1.className = 'lyh1';
}
cbn1.onclick = function() {
    article.style.display = 'none';
    p.style.display = 'none';
    nws.style.display = 'none';
    cbn.style.display = 'block';
    zpb.style.display = 'none';
    lyh.style.display = 'none';
    hsw.style.display = 'none';
    fg1.className = 'fg1';
    nws1.className = 'nws1';
    hsw1.className = 'hsw1';
    cbn1.className = 'cbn1  border';
    zpb1.className = 'zpb1';
    lyh1.className = 'lyh1';
}
zpb1.onclick = function() {
    article.style.display = 'none';
    p.style.display = 'none';
    nws.style.display = 'none';
    cbn.style.display = 'none';
    zpb.style.display = 'block';
    lyh.style.display = 'none';
    hsw.style.display = 'none';
    fg1.className = 'fg1';
    nws1.className = 'nws1';
    hsw1.className = 'hsw1';
    cbn1.className = 'cbn1';
    zpb1.className = 'zpb1 border';
    lyh1.className = 'lyh1';
}
lyh1.onclick = function() {
    article.style.display = 'none';
    p.style.display = 'none';
    nws.style.display = 'none';
    cbn.style.display = 'none';
    zpb.style.display = 'none';
    lyh.style.display = 'block';
    hsw.style.display = 'none';
    fg1.className = 'fg1';
    nws1.className = 'nws1';
    hsw1.className = 'hsw1';
    cbn1.className = 'cbn1';
    zpb1.className = 'zpb1';
    lyh1.className = 'lyh1 border';
}