//DOM HTML
// var content = document.querySelector(".content");

// 1 innerHTML
// content.innerHTML = "<h1>hello anh em</h1>";
// console.log(content.innerHTML);

// 2 innerText
// content.innerText = "<h1>hello anh em</h1>";
// console.log(content.innerText);

// 3 textContent
// content.innerText = "<h1>hello anh em</h1>";
// console.log(content.textContent);

// 4 outerHTML
// content.outerHTML = "<h1>ahihi</h1>";

// console.log(content.outerHTML);
// var innerContent = content.innerHTML;
// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//     if (!content.innerHTML) {
//         btn.innerText = "Ẩn";
//         content.innerHTML = innerContent;
//     } else {
//         content.innerHTML = "";
//         btn.innerText = "Hiện";
//     }
// });

content = document.querySelector(".count");
var count = 0;
var btnM = document.querySelector(".min");
var btnP = document.querySelector(".plus");

btnM.addEventListener("click", function () {
    content.innerHTML = `Count:${--count}`;
});
btnP.addEventListener("click", function () {
    content.innerHTML = `Count:${++count}`;
});
