/*
Web Component: Kỹ thuật tách các thành phần thành các thẻ HTML riêng biệt để thuận tiện trong việc tái sử dụng
*/
// console.dir(HTMLElement);
// HTMLDivElement.prototype.css = function (input = {}) {
//     Object.assign(this.style, input);
// };

// document.querySelector(".content").css({ color: "red" });
//Các bước tạo ra 1 component

//B1: Tạo ra 1 constructor/class kế thừa từ HTMLElement
//B2: Đưa constructor vào phương thức customElement.define();

// class HelloWorld extends HTMLElement {
//     static observedAttributes = ["data-id"];
//     connectedCallback() {
//         // khi them node vao dom
//         console.log("Hello Anh Em");
//         var _this = this;
//         this.innerHTML = "<h1>Hoc lập trình không khó</h1>";
//         this.querySelector("h1").addEventListener("click", function () {
//             _this.setAttribute("data-id", Math.random());
//         });
//     }
//     disconnectedCallback() {
//         // khi loai bo node khoi dom
//         console.log("loai bo");
//     }
//     attributeChangedCallback(name, oldValue, newValue) {
//         console.log("chang attribute");
//         console.log(name, oldValue, newValue);
//     }
// }
// customElements.define("hello-word", HelloWorld);
// var button = document.querySelector("button");
// var hello_word = document.createElement("hello-word");
// var flag = false;
// var body = document.querySelector("body");
// button.addEventListener("click", function () {
//     if (!flag) {
//         body.append(hello_word);
//         flag = true;
//     } else {
//         hello_word.remove();
//         flag = false;
//     }
// });

customElements.define(
    "todo-app",
    class extends HTMLElement {
        connectedCallback() {
            var shadow = this.attachShadow({
                mode: "open",
            });
            var _this = this;
            var html = `
            <div class="todo-app">
                <ul>
                    <li>Công việc 1</li>
                    <li>Công việc 2</li>
                    <li>Công việc 3</li>
                </ul>
                <input type="text" placeholder="Tên..."/>
                <button>Thêm</button>
            </div>`;
            shadow.innerHTML = _this.innerHTML + html;
            var style = document.createElement("style");
            style.textContent = `.todo-app{
                background:${_this.dataset.bg};
                padding:15px;
            }`;
            shadow.append(style);
            shadow
                .querySelector("button")
                .addEventListener("click", function () {
                    var liEl = document.createElement("li");
                    liEl.innerText = `${shadow.querySelector("input").value}`;
                    shadow.querySelector("ul").append(liEl);
                    shadow.querySelector("input").value = "";
                });
        }
    }
);

customElements.define(
    "todo-count",
    class extends HTMLElement {
        connectedCallback() {
            var shadow = this.attachShadow({
                mode: "open",
            });
            var todoAppEl = document.querySelector("todo-app");
            var ul = todoAppEl.shadowRoot.querySelector("ul");
            shadow.innerHTML = `<h3>Count: ${ul.children.length}</h3>`;
        }
    }
);

//Shadow DOM

//Document ==> Host ==> Root ==> Content
// var content = document.querySelector(".content");

// var shadow = content.attachShadow({
//     mode: "open",
// });
// shadow.innerHTML = content.innerHTML;
// content.innerText = "";
// console.log(content);
// var h1 = document.createElement("h1");
// h1.innerText = `Hoc lap trinh khong kho`;

// var style = document.createElement("style");
// style.textContent = `
// h1 {
//     color:red;
// }`;
// shadow.append(h1);
// shadow.append(style);
// var h1 = document.createElement("h1");
// h1.innerText = `Hoc lap trinh khong kho`;
// content.append(h1);
