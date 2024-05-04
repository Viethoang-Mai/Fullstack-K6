/**
DOM Nodes: 
    - tự tạo ra các Node bằng Js mà không cần có sẵn HTML
    - Dễ dàng thao tác cập nhật với các Nodes mà không cần tao lại
    - Trong các Framework đều sử dụng

 */
var root = document.querySelector("#root");
// root.innerHTML = `<h1>F8-Học lập trình không khó</h1>`;
// Tạo Node Element
// var h1 = document.createElement("h1");
// // Thao tác giống như kiến thức đã học
// h1.classList.add("title");
// h1.innerText = `Hoc lap trinh không khó`;
// var button = document.createElement("button");
// button.type = "button";
// button.innerText = "Click me";
// button.addEventListener("click", function () {
//     h1.innerHTML = "Học Js thật dễ";
// });
// // Render
// root.append(h1);
// root.append(button);

var content = document.createElement("div");
content.classList.add("content");
var h1 = document.createElement("h1");
h1.innerText = `F8 - Học lập trình không khó`;
var ul = document.createElement("ul");
ul.classList.add("menu");
var button = document.createElement("button");
for (let i = 1; i <= 3; i++) {
    var li = document.createElement("li");
    li.innerText = `Item ${i}`;
    ul.append(li);
}
button.innerText = `Add`;

root.append(content);
content.append(h1);
content.append(ul);
content.append(button);

button.addEventListener("click", function () {
    var li = document.createElement("li");
    li.innerText = `Item ${ul.children.length + 1}`;
    ul.append(li);
});
var button = document.createElement("button");
button.innerText = "Insert Before Ul";
content.append(button);
button.addEventListener("click", function () {
    var h2 = document.createElement("h2");
    h2.innerText = "hello anh em";
    content.insertBefore(h2, ul);
});
var button = document.createElement("button");
button.innerText = "Change Node";
content.append(button);
button.addEventListener("click", function () {
    var p = document.createElement("p");
    p.innerText = "hello anh em the p";
    content.replaceChild(p, h1);
    content.removeChild(ul);
});
