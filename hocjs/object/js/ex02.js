var user = {
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
    age: 31,
};

// Object.keys()--> lấy danh sách các key và trả về 1 mảng(không lấy prototype)
// var keys = Object.keys(user);
// console.log(keys);

// Object.values()--> lấy danh sách các values và trả về 1 mảng(không lấy prototype)
// var values = Object.values(user);
// console.log(values);

// Object.entries()--> lấy danh sách các keys và values  trả về 1 mảng 2 chiều
// var values = Object.entries(user);
// console.log(values);

// Object.assign(target,source1,source2,...)--> Trả về Oj mới sau khi nối và cũng làm thay đổi target

// var Oj = Object.assign({}, user, a);
var query = {
    status: true,
    category: 1,
    keyword: "Hoàng An",
};
var getArr = Object.entries(query).map(function (value) {
    return value.join("=").replaceAll(" ", "+");
});
console.log(getArr.join("&"));

// var newArr = getArr.map(function (value) {
//     return Object.fromEntries(value);
// });
console.log(getArr);
var allow = ["true", "false"];
var getOj = getArr.map(function (value) {
    var item = value.replaceAll("=", ",").split(",");
    if (allow.includes(item[1])) {
        item[1] = item[1] === "true";
    }
    return item;
});
console.log(getOj);
var query = Object.fromEntries(getOj);
console.log(query);
