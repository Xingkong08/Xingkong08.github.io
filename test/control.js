var font = {size: 1.2}

var control = "<div id=\"control\">" +
    "<div class='btn' onclick=\"zoomIn()\">字体放大</div>" +
    "<div class='btn' onclick=\"zoomOut()\">字体缩小</div>" +
    "<div class='btn' onclick=\"window.location.href='./index.html'\">回到目录</div>" +
    "</div>";

window.onload = function () {
    var ff = document.body.firstElementChild;
    var cc = document.createElement('div')
    cc.innerHTML = control;
    document.body.insertBefore(cc, ff);
};

function zoomIn() {
    let pos = ScollPostion(document);
    let rate = pos.top / pos.height;
    font.size += 0.1;
    document.body.style.fontSize = (font.size) + "em";
    pos = ScollPostion(document);
    document.documentElement.scrollTop = parseInt(rate * pos.height * 0.995);
}

function zoomOut() {
    let pos = ScollPostion(document);
    let rate = pos.top / pos.height;
    font.size -= 0.1;
    document.body.style.fontSize = (font.size) + "em";
    pos = ScollPostion(document);
    document.documentElement.scrollTop = parseInt(rate * pos.height * 0.99);
}

function ScollPostion(document) {
    var t, l, w, h;
    if (document.documentElement) {
        if (document.documentElement.scrollTop) {
            t = document.documentElement.scrollTop;
            l = document.documentElement.scrollLeft;
            w = document.documentElement.scrollWidth;
            h = document.documentElement.scrollHeight;
        }
    } else if (document.body) {
        t = document.body.scrollTop;
        l = document.body.scrollLeft;
        w = document.body.scrollWidth;
        h = document.body.scrollHeight;
    }
    return {
        top: t, left: l, width: w, height: h
    };
}
