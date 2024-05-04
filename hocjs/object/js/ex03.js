// var user = {
//     name: "hoàng an",
//     email: "abc@gmail.com",
// };
// var user = { name: "hoàng an f8 ", address: "hanoi" };
// Object.prototype.getValue = function () {
//     var res = [];
//     cur = this;
//     Object.keys(this).forEach(function (key) {
//         typeof cur[key] !== "function" && res.push(cur[key]);
//     });
//     return res;
// };
// var mes = {};
// console.log(mes.getValue());
// // Prototype trong func constructor
// Array.prototype.mesA = "hello Array";
// var a = "00";

// console.log(Array.prototype);
// Array.prototype.map2 = function (cb) {
//     var Arr = [];
//     if (typeof cb === "function") {
//         for (let i = 0; i < this.length; i++) {
//             Arr[i] = cb(this[i], i);
//         }
//     }
//     return Arr;
// };

// var users = [5, 1, 3, 6, 9];

// var res = users.map2(function (value, index) {
//     return value;
// });
// console.log(res);

// function Person(name, email, address) {
//     this.name = name;
//     this.email = email;
//     this.address = address;
//     this.getInfo = function () {
//         return `
//         - Name:${this.name}
//         - Email:${this.email}
//         - Address:${this.address}
//         `;
//     };
// }
// var obj = new Person("User 1", "email@gmail.com", "hanoi");
// // console.log(obj.getInfo());

// // Array.prototype.reduce2=function(cb,innit){

// // }
// function Calculator() {
//     this.add = function (...args) {
//         var res = 0;
//         for (let value of args) {
//             res += value;
//         }
//         return res;
//     };
//     this.sub = function (...args) {
//         var res = 0;
//         for (let value of args) {
//             res -= value;
//         }
//         return res;
//     };
//     this.mul = function (...args) {
//         var res = 1;
//         for (let value of args) {
//             res *= value;
//         }
//         return res;
//     };
//     this.div = function (...args) {
//         return args.reduce(function (pre, cur) {
//             if (cur !== 0) {
//                 return pre / cur;
//             }
//             throw new Error(" khong nhap 0");
//         });
//     };
// }
// var total = new Calculator();
// console.log(total.div(1, 0, 1));
var a = {
    name: "Hoàng An",
    email: "hoangan@gmaul.com",
};

// var b = a;
//Coppy Oj
// var b = Object.assign({}, a);
// var b = { ...a };
var b = JSON.parse(JSON.stringify(a));
b.name = "Hoàng An F8";
// console.log(a);
// console.log(b);
// Optional chaining
// 1. với thuộc tính
// var a = null;
// console.log(a?.name);
// với phương thức
var b = {};
console.log(b?.getName?.());
