var span = document.getElementsByTagName('span')[0];
var div = document.getElementsByTagName('div')[0];
setTimeout(function() {
    div.style.display = 'block';
}, 3000);
span.onclick = function() {
    div.style.display = 'none';
}