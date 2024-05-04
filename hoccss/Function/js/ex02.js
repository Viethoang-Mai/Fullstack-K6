/*
 Hàm ẩn danh :Anonymous function

 function(){

 }

 Để dùng hàm ẩn danh:
 - gán vào 1 biến
 - gọi thông qua hàm khác
 -IIFE
 */
// var getMessage = function () {
//     console.log("hello anh em");
// };
// getMessage();

// function getA(func) {
//     console.log("Get A");
//     if (typeof func === "function") {
//         func();
//     }
// }
// getA(function () {
//     console.log("Get B");
// });
// function max(a, ...args) {
//     console.log(a);
//     console.log(args);
// }
// max(5, 10, 15, 20);
function handle() {
    console.log("JS");
}
var count = 0;
var myInterval = setInterval(function () {
    count++;
    console.log("hello anh em", count);
    if (count === 5) {
        clearInterval(myInterval);
    }
}, 1000);

/*
1. callback
2. closed
3. iife
4. đệ quy

*/
