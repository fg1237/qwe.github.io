var div = document.getElementsByTagName('div')[1];

var bol = true;


function dong() {
    var dtop;
    div.className = 'p';
    if (bol) {
        dtop = Number(div.style.top);
        bol = false;
    } else {
        dtop = parseInt(div.style.top);
    }
    dtop -= 18;
    if (dtop == -360) {
        dtop = 0;
        div.className = 'p liji';
    }
    dtop += 'px';
    div.style.top = dtop;
    dtop = parseInt(div.style.top);
}

var stop;
div.onmouseover = function() {
    clearInterval(stop);

}
div.onmouseout = likai;

function likai() {
    stop = setInterval(dong, 1000);
}
likai();