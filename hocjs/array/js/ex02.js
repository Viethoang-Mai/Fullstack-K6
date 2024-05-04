console.log(Array.prototype);
var users = ["User 1", "User 2", "User 3", "User 4"];
//1. At()--> trả vể phần tử theo index
// console.log(users.at(1));

//2. concat() nối mảng, không làm thay đổi mảng cũ
// var newArr = users.concat(["user4"], "abc", 1);
// console.log(users);

//3. fill() update  từng phần tử mảng thành 1 giá trị
// var newArr = users.fill(1);
// console.log(newArr);
//tip
// var newArr = Array(100).fill(0);
// console.log(newArr);

//4. include() tìm phần tử trong mảng theo value trả về true/false
// console.log(users.includes("User 2"));

//5. indexOf(value) tìm phần tử trong mảng theo value trả về index đầu tiên
// console.log(users.indexOf("User 2"));

//6. indexOf(value) tìm phần tử trong mảng theo value trả về index cuối cùng
// console.log(users.indexOf("User 2"));

//7. slice(index1, index 2) cắt mảng theo index, tạo ra mảng mới
// console.log(users.slice(0, 1));

//8. push() thêm phần tử về cuối mảng, trả về tổng số lượng sau khi thêm, làm thay đổi mảng ban đầu
// users.push("User 4");
// console.log(users);

//9. unshift() thêm phần tử vào đầu mảng trả về như push
// users.unshift(["item 2"]);
// console.log(users);

//10. pop() Xóa phần tử cuối mảng và trả về gtri vừa xóa
// users.pop();
// console.log(users);

//11. shift() Xóa phần tử đầu mảng
// users.shift();
// console.log(users);

//12. splice(index,number,...args);
// var newArr = users.splice(1, 0, "Hoàng", "Việt");
// console.log(users);
// console.log(newArr);

//13 sort()
// Sắp xếp xếp tăng dần theo ký tự
// Hàm sort nhận về ....
// var numbers = [1, 2, 3, 4, 5];
//14. reverse
// var newArr = numbers.reverse();
// console.log(newArr);
// console.log(numbers);

//15 join() --Nối mảng thành chuỗi
// console.log(users.join());

// var customers = [
//     "Nguyễn Minh Nhật Dương",
//     "Đặng Ngọc Sơn",
//     "Phạm Xuân Yến",
//     "Phạm Xuân Hải",
//     "Tạ Hoàng An",
// ];

// function getFirstName(customer) {
//     return customer.split(" ").slice(-1).join( ).toLowerCase();
// }
// console.log(getFirstName("Tạ Hoàng An"));
// customers.sort(function (a, b) {
//     if (getFirstName(b) > getFirstName(a)) {
//         return -1;
//     }
// });
// console.log(customers);

//  VÒNG LẶP JS
//1. forEach lặp qua tầng phần tử
// users.forEach(function (user, index) {
//     console.log(index, user);
// });

//2. Map trả về một mảng mới có số lượng phần tử bằng mảng ban đầu, từng phần tử của mảng mới phụ thuộc vào return của callback
// var newArr = users.map(function (user, index) {
//     console.log(user, index);
//     if (user === "User 2") {
//         return user;
//     }
// });
// console.log(newArr);

//3. filter trả về 1 mảng mới, giá trị và số lượng của mảng mới phụ thuộc và return true của callback\
// var newArr = users.filter(function (user, index) {
//     console.log(user, index);
//     return index > 1;
// });
// console.log(newArr);

var customers = [
    ["User 1", "user1@gmail.com", 41],
    ["User 2", "user2@gmail.com", 32],
    ["User 3", "user3@gmail.com", 33],
    ["User 4", "user4@gmail.com", 34],
];
// var newArr = customers.filter(function (arr) {
//     return arr.includes("user2@gmail.com");
// });
// thay đổi email người có tên lớn nhất thành admin@gmail.com
maxUser = customers[0];
indexMax = 0;
customers.forEach(function (value, index) {
    if (maxUser[2] < value[2]) {
        maxUser = value;
        indexMax = index;
    }
});
if (indexMax !== -1) {
    customers[indexMax][1] = "admin@gmail.com";
}

console.log(customers);
// var str = "tạ hoàng an";
// var newArr = str
//     .split(" ")
//     .map(function (value) {
//         return value.slice(0, 1).toUpperCase() + value.slice(1);
//     })
//     .join(" ");
// console.log(newArr);
// var num = [1, 3, 3, 5, 7];
// var res = num.some(function (value) {
//     return value % 2 === 0;
// });
// console.log(!res);

// var number = [5, 10, 100, 15, 2000, 25];
// var getMax = number.reduce(function (pre, cur) {
//     return pre < cur ? cur : pre;
// });
// console.log(getMax);

// var arrA = [1, 3, 5, 7, 2];
// var arrB = [1, 5, 7];
// var newArr = arrA.reduce(function (pre, cur) {
//     if (!arrB.includes(cur)) pre.push(cur);
//     return pre;
// }, []);
// console.log(newArr);
