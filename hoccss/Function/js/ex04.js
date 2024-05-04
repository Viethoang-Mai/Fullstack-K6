// var getA = function (cb) {
//     setTimeout(function () {
//         console.log(`Get A`);
//         if (typeof cb === "function") {
//             cb();
//         }
//     }, 1000);
// };
// var getB = function (cb) {
//     setTimeout(function () {
//         console.log(`Get B`);
//         if (typeof cb === "function") {
//             cb();
//         }
//     }, 500);
// };
// var getC = function () {
//     setTimeout(function () {
//         console.log(`Get C`);
//     }, 1500);
// };

// getA(function () {
//     getB(getC);
// });
// Xây dựng hàm callback có đối số

// function something(cb, ...args) {
//     console.log(`Something`);
//     if (typeof cb === "function") {
//         cb(...args);
//     }
// }

// something(
//     function (...args) {
//         console.log(`F8`);
//         console.log(...args);
//     },
//     "Mai",
//     "Viet",
//     "Hoang"
// );

//Window: đối tượng
// Biến trong đối tượng : thuộc tính
// Hàm trong đối tượng: phương thức

// var a = 10;
// function getA() {
//     return a;
// }
// console.log(window.a);
// console.log(window.getA());

//Closure: hàm có thể truy cập vào tất cả các thuộc tính/biến của các phạm vi chứa nó

// function sum(a) {
//     return function (b) {
//         return a + b;
//     };
// }
// var add = sum(10);
// console.log(add(20));

//IIFE

// (function (a) {
//     console.log(a);
// })(10);

//Đệ quy: gọi lại chính nó ở trong nó
//  - Áp dụng trong trường hợp cần thiết
//  - phải tính đến điều kiện dừng
function sum(n) {
    if (n == 1) {
        return n;
    }
    return n + sum(n - 1);
}
console.log(sum(10));
