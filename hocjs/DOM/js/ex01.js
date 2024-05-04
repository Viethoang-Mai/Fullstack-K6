// DOM
// Trình duyệt mô hình hóa HTML thành đối tượng để dễ dàng thao tác chỉnh sửa trước khi hiển thị cho người dùng

/**
 *Element (Tag): Oject
    - text: Object
    - attribute: Object

Các loại DOM
    -DOM element
    -DOM HTML
    -DOM CSS
    -DOM Event
    -DOM element listener
    -DOM Navigation
    -DOM Nodes

Muốn thao tác được với DOM thì phải có Node Element(Oj)

DOM Element: Truy cập vào các thẻ html --> tạo ra Node(5 cách)

document.getElementById(id)--> trả về element đầu tiên
document.getElementsByClassName(class)--> trả về danh sách
document.getElementsByTagName(tag)--> trả về danh sách
document.querySelector(selector)--> trả về element đầu tiên
document.querySelectorAll(selector)--> trả về danh sách


 */

// Gán event vào html
var btn = document.querySelector(".btn");

// element.onTenEvent=function(){};
// btn.onmouseover = function () {
//     console.log("Hello");
// };
// btn.onmouseout = function () {
//     console.log("Hello out");
// };

// btn.addEventListener("click", function () {
//     console.log("hello ae");
// });
btn.addEventListener("dblclick", function () {
    console.log(this);
    console.log("hello ae dbl");
});
