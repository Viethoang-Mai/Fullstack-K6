/*
Kiểu dữ liệu Tham chiếu
*/
var a = ["Hoàng An", 32];
var b = a;
console.log(a);

b[0] = "Hoàng An F8";

var b = JSON.parse(JSON.stringify(a));
console.log(b);

// Kiểu dữ liệu tham chiếu không so sánh được
