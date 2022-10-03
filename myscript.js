let img = ['ddd.png.webp', 'fff.png.webp', 'ttt.png.webp', 'zzz.png.webp'];

let i = 0;

function slideShow() {
    document.getElementById("image-5").src = img[i];


    if (i < img.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    setTimeout("slideShow()", 2000);

}
window.onload = slideShow;

function focusFunction(element) {
    element.style.background = "wheat";
}



function blurFunction(element) {
    element.style.background = "";
}









