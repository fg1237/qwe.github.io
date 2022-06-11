var lis = document.getElementsByClassName('li');
var img = document.getElementsByClassName('newimg')[0];
var div = document.getElementsByTagName('div')[0];
var span = document.getElementsByTagName('span')[0];
for (var i = 0; i < lis.length; i++) {
    lis[i].onclick = function() {
        div.style.display = 'block';
        var src = this.firstElementChild.getAttribute('src');
        img.setAttribute('src', src);
    }
}
span.onclick = function() {
    div.style.display = 'none';
}