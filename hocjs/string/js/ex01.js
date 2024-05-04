// /*
// Kiểu dữ liệu nguyên thủy
//     -Number
//     -Boolean
//     -Null
//     -undefined
//     -String
// Kiểu dữ liệu tham chiếu
//     -Function
//     -Object

// */

// var fullName = "Hello anh em F8 Hello anh em F8";
// //1. lấy độ dài 1 chuỗi
// console.log(fullName.length);

// //2. lấy kí tự theo index
// console.log(fullName.charAt(0));

// //3. lấy mã ASCII của ký tự trong chuỗi
// console.log(fullName.charCodeAt(0));

// //4. Tìm chuỗi con trong chuỗi cha trả về true false
// console.log(fullName.includes("F8"));

// //5. Tìm vị trí xuất hiện đầu tiên , cuối cùng của chuỗi con trong chuỗi cha
// console.log(fullName.indexOf("F8"));
// console.log(fullName.lastIndexOf("F8"));

// //7. Tìm chuỗi con trong chuỗi cha trả về true false
// console.log(fullName.slice(0, 10));
// console.log(fullName.slice(10));
// console.log(fullName.slice(-10));

// //8. Tách chuỗi thành mảng
// console.log(fullName.split(" "));

// //9. Thay thế chuỗi
// console.log(fullName.replace("F8", "F88")); // thay thế vị trí tìm đc đầu tiên
// console.log(fullName.replaceAll("F8", "F88")); // thay thế tất cả

// //11. chuyển thành chữ thường
// console.log(fullName.toLowerCase());

// //12. chuyển thành chữ hoa
// console.log(fullName.toUpperCase());

// //13. Loại bỏ khoảng trắng đầu và cuối chuỗi
// console.log(fullName.trim());

// var phone = "038887510000079";
// var first = phone.slice(0, 4);
// var middle = "****";
// var last = phone.slice(8);
// var res = first + middle + last;
// console.log(res);

keyword = " ";
var content =
    "Abcd Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum asperiores delectus reiciendis, lorem iusto harum nesciunt eaque a animi lorem atque. Lorem consectetur?";

var lengKey = keyword.length;
var position = content.toLowerCase().indexOf(keyword.toLowerCase());
// content =
//     content.slice(0, position) +
//     `<span class="highlight">${content.slice(
//         position,
//         position + lengKey
//     )}</span>` +
//     content.slice(position + lengKey);
// console.log(content);
// var display = "";
// var cnt = 0;
// while (position !== -1) {
//     display +=
//         content.slice(0, position) +
//         `<span class="highlight">${content.slice(
//             position,
//             position + lengKey
//         )}</span>`;
//     content = content.slice(position + lengKey);
//     position = content.toLowerCase().indexOf(keyword.toLowerCase());
//     cnt++;
// }
// display += content;
// document.write(`<p>Tìm kiếm từ khóa <b>${keyword}</b></p>`);
// document.write(display);
// document.write(`<p>Đã tìm thấy <b>${cnt}</b> từ khóa <b>${keyword}</b></p>`);
var fullName = "tạ     hoàng an";
// console.log(fullName);
var display = "";
fullName = fullName.trim();
fullName = fullName.charAt(0).toUpperCase() + fullName.slice(1);
console.log(fullName);

for (var i = 0; i < fullName.length; i++) {
    if (fullName.charAt(i) === " " && fullName.charAt(i + 1) !== " ") {
        var pos = i + 1;
        fullName =
            fullName.slice(0, pos) +
            fullName.charAt(pos).toUpperCase() +
            fullName.slice(pos + 1);
    }
}
console.log(fullName);
