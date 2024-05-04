// var age = 32;
// console.log(age);
// Kiểm tra kiểu Number
// console.log(typeof age);
// Số NaN(Not s Number)
// --Khi quá trình ép kiểu thất bại->NaN
// Ép kiểu có 2 trường hợp là chủ động ép kiểu và biểu thức tự ép kiểu
// var a = "a9";
// console.log(a);

// Kiểm tra 1 số NaN
// isNaN()
// Kiểm tra số Nguyên
// Number.isInteger()
// Ép kiểu

// var a = "10.2";
// a = +a;
// a = parseInt(a);
// console.log(a);
// console.dir(Number);

// Trong Js bắt buộc phải ép kiểu nếu sử dụng Number

// Số Infinity,-Infinity

// var a = 1000 ** 1000;
// console.log(a);

// Lấy số chữ số phần thập phân và làm tròn
var a = 10.3533;
// a = a.toFixed(2);
a = a.toPrecision(3);
console.log(a);
