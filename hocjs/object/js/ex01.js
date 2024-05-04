/*
Đối tượng
    - Thuộc tính (Biến)
    - Phương thức (Hàm)

Các cách tạo đối tượng trong Js
    - Object Literal
    - Function Constructor
 */
// console.log([Object.getPrototypeOf(String)]);
var user = {
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
    getname: function () {
        return "hoàng an";
    },
};
// getname là phương thức
// Còn lại là thuộc tính

// truy cập vào key
// console.log(user.name);
// console.log(user["email"]);
// thêm key mới
user.address = "Hanoi";
// cập nhật
user.name = "Hoàng An F8";
// xóa key
// delete user.address;
for (let key in user) {
    console.log(key, user[key]);
}

// bài tap
var a = {
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
};
var b = {
    teacher: "Hoàng An F8",
    course: "Fullstack",
};
var c = {};
for (let key in a) {
    c[key] = a[key];
}
for (let key in b) {
    c[key] = b[key];
}
console.log(c);

var product = [
    1,
    false,
    {
        name: "Sp1",
        price: "20000",
    },
    {
        name: "Sp2",
        price: "10000",
    },
    undefined,
    {
        name: "Sp3",
        price: "15000",
    },
];

function checkOj(oj) {
    return oj.filter(function (value) {
        console.log(typeof value);
    });
}

product = checkOj(product);

var indexMax = 0;
var max = 0;
console.log(product);
product.forEach(function (arr, index) {
    if (
        arr.price > max &&
        arr.price &&
        typeof arr === "object" &&
        typeof arr !== "object"
    ) {
        max = arr.price;
        indexMax = index;
    }
});
console.log(product[indexMax]);
