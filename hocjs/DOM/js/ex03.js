// Thuộc tính
// var a = document.querySelector("a");
// a.className = "min";
// console.log([a.attributes]);

// data attributes;
//  thuộc tính tự tạo, chỉ phục vụ để xử lí js
// Cú pháp:data-

// dataset
// ClassList
// console.log(a.className);
// a.classList.add("box3");
// console.log(a.classList);

var btn = document.querySelector(".btn");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
var btnClose = document.querySelector(".btn-close");

btn.addEventListener("click", function () {
    modal.classList.add("open");
});
btnClose.addEventListener("click", function () {
    modal.classList.remove("open");
});
overlay.addEventListener("click", function () {
    modal.classList.remove("open");
});

document.addEventListener("keyup", function (e) {
    if (e.key === "Escape") {
        modal.classList.remove("open");
    }
});
