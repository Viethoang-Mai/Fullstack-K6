console.log(Array.prototype);

var users = ["User 1", "User 2", "User 3", "User 4"];

//1. forEach --> Lặp qua từng phần tử
// users.forEach(function (user, index) {
//   console.log(user, index);
// });

//2. map
/*
- Trả về 1 mảng mới có số lượng phần tử = mảng ban đầu
- Từng phần tử của mảng mới phụ thuộc vào return của callback
*/
// var newArr = users.map(function (user, index) {
//   console.log(user, index);
//   return `<h2>${user}</h2>`;
// });
// console.log(newArr);

//3. filter
/*
- Trả về 1 mảng mới
- Giá trị và số lượng phần tử của mảng mới phụ thuộc vào return true của callback
- return 1 biểu thức logic
*/
// var newArr = users.filter(function (user, index) {
//   console.log(user, index);
//   //   if (index > 1) {
//   //     return true;
//   //   }
//   return index;
// });
// console.log(newArr);

var customers = [
    "Tạ Hoàng An",
    "Lưu Anh Quân",
    "Nguyễn Văn Hoàng",
    "Nguyễn Văn Dũng",
    "Mai Thị Hoa",
];

//Yêu cầu 1: Xóa phần tử mảng có email là user2@gmail.com
// var newArr = customers.filter(function (user) {
//   //   if (user.includes("user2@gmail.com")) {
//   //     return false;
//   //   }
//   //   return true;
//   //   console.log(user);
//   return !user.includes("user2@gmail.com");
// });
// console.log(newArr);

// var keyword = "an";
// // customers = customers.split(" ");
// // console.log(customers);
// var newArr = customers.findLastIndex(function (value) {
//     return value.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(newArr);

//find Chỉ khác filter trả về phần tử đầu tiên tìm được
//findLast: Chỉ khác filter là trả về pt cuối cùng tìm đc
//findIndex: Trả về index đầu tiên tìm được
/**
 khác indexOf: Có thể tự viết biểu thức logic trong hàm callback
 */

// var customers = [
//     ["User 1", "user1@gmail.com", 30],
//     ["User 2", "user2@gmail.com", 31],
//     ["User 3", "user3@gmail.com", 28],
//     ["User 4", "user2@gmail.com", 31],
// ];
// var newArr = [];
// var email = [];
// customers.forEach(function (value) {
//     if (!email.includes(value[1])) {
//         newArr.push(value);
//         email.push(value[1]);
//     }
// });

// console.log(newArr);

// var number = [1, 2, 4, 8];
// var res = number.every(function (value) {
//     console.log(value);
//     return value % 2 === 0;
// });
// console.log(res);

// Reduce
/*
 Nguyên tắc: 
 -  out put của lần lặp trước là output của lần lặp sau. Giống bài toán tính tổng
 -Cú pháp: Reduce(function(callback),initialValue)
    callback có 3 tham số
      + preValue
        TH1: không có initial
          + pre mặc định sẽ là phần tử đầu tiên
          + pre của lần lặp sau là return của lần lặp trước
        TH2: có initial
          + pre mặc định sẽ là initial
          + pre của lần lặp sau là return của lần lặp trước
      + currentValue:duyệt qua từng pt của mảng
      + index:index từng phần tử
    initialValue: giá trị khởi tạo ban đầu

    giá trị của hàm reduce sẽ là return lần cuối cùng
 */

// var numbers = [5, 2, 9, 1, 8];
// var res = numbers.reduce(function (pre, cur) {
//     if (cur > pre) pre = cur;
//     return pre;
// });
// console.log(res);

// var students = ["An", "Tâm", "Tùng", "Quý", "Hải"];
// var studentsActive = ["An", "Quý"];

// var res = students.reduce(function (pre, cur) {
//     if (!studentsActive.includes(cur)) pre.push(cur);
//     return pre;
// }, []);
// console.log(r);

var students = ["An", "Tâm", "Tùng", "Quý", "Tùng", "Hải"];
var res = students.reduce(function (pre, cur) {
    return !pre.includes(cur) && pre.push(cur), pre;
}, []);
console.log(res);

var arrC = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var flat = function (arr) {
    var newArr = arr.reduce(function (pre, cur) {
        if (Array.isArray(cur)) {
            return pre.concat(flat(cur));
        }
        return pre.concat(cur);
    }, []);
    return newArr;
};
console.log(flat(arrC));
