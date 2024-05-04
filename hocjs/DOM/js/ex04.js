// var content = document.querySelector(".content");
// var btnOut = document.querySelector(".btn-out");
// var btnIn = document.querySelector(".btn-in");
// console.log(btnIn);
// var css = {
//     transition: "1s linear",
//     opacity: "1",
//     display: "block",
// };
// Object.assign(content.style, css);
// btnOut.addEventListener("click", function () {
//     var css = {
//         transition: " linear 0.5s",
//         opacity: "0",
//     };
//     Object.assign(content.style, css);
//     setTimeout(function () {
//         content.style.display = "none";
//     }, 250);
// });
// btnIn.addEventListener("click", function () {
//     var css = {
//         transition: " linear 0.5s",
//         display: "block",
//     };
//     Object.assign(content.style, css);
//     Object.assign(content.style, css);
//     setTimeout(function () {
//         content.style.opacity = "1";
//     }, 50);
// });

// Event Object
// var btn = document.querySelector(".btn");
// // btn.addEventListener("click", function (e) {
// //     console.log(e.target);
// //     console.log(this);
// // });
// btn.style.cursor = "move";
// var offsetX = 0;
// var offsetY = 0;
// function drag(e) {
//     var x = e.clientX - offsetX - 10;
//     var y = e.clientY - offsetY - 10;
//     btn.style.translate = `${x}px ${y}px`;
// }
btn.addEventListener("mousedown", function (e) {
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    document.addEventListener("mousemove", drag);
});
document.addEventListener("mouseup", function () {
    document.removeEventListener("mousemove", drag);
});
