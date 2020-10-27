/*
思路分析：
1.需求：
1-1.鼠标放到某张图片上的时候动态修改上面的图片地址
1-2. 当鼠标放到大图上面的时候，会动态修改右边图片的位置
    1.2.1 显示一个区域,用于确认鼠标放上去的位置
    1.2.2 显示右边区域，用于放大图片的展示效果
window 浏览器对象
document 文档流对象
querySelector  符合条件的第一个元素
getElementBy *  获得的结果是数组，需要提取

*/
var list = document.querySelector('.list'),
    imgs = list.querySelectorAll("img"),
    img = document.querySelector(".pic img"),
    pic = document.querySelector(".pic"),
    cover = document.querySelector(".cover"),
    detail = document.querySelector(".detail");
list.addEventListener("mousemove", function(e) {
    if (e.target.tagName == 'IMG') {
        img.src = e.target.src;
        detail.style.backgroundImage = "url(" + e.target.src + ")"
        imgs.forEach(function(item) {
            item.className = "";
        });
        e.target.className = "current";

    }
});
pic.addEventListener("mousemove", function(e) {
    var x = e.clientX,
        y = e.clientY,
        cx = pic.getBoundingClientRect().left,
        cy = pic.getBoundingClientRect().top,
        tx = x - cx - 75,
        ty = y - cy - 75;
    if (tx <= 0) {
        tx = 0;
    }
    if (ty <= 0) {
        ty = 0;
    }
    if (tx > 250) {
        tx = 250;
    }
    if (ty > 250) {
        ty = 250;
    }
    detail.style.backgroundPosition = tx / 250 * 100 + "%" +
        ty / 250 * 100 + "%";
    cover.style.left = tx + "px";
    cover.style.top = ty + "px";
});