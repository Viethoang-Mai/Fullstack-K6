var root = document.querySelector("#root");
// var element = F8.createElement(
//     "div",
//     { className: "content", id: "content-1" },

//     F8.createElement("h1", {}, "Hoc lap trinh khong kho "),
//     F8.createElement(
//         "button",
//         {
//             type: "button",
//             onClick: function () {
//                 console.log("ok");
//             },
//         },
//         "click me"
//     )
// );
// F8DOM.render(root, element);

// var h1 = F8.createElement("h1", {}, 0);
// var element = F8.createElement(
//     "div",
//     { className: "counter-app" },
//     h1,

//     F8.createElement(
//         "button",
//         {
//             type: "button",
//             onClick: function () {
//                 h1.innerText++;
//             },
//         },
//         "+"
//     ),
//     F8.createElement(
//         "button",
//         {
//             type: "button",
//             onClick: function () {
//                 h1.innerText--;
//             },
//         },
//         "-"
//     )
// );
// F8DOM.render(root, element);
// var h1 = document.createElement("h1");
// h1.innerText = "Hello anh em: ";
// var textNode = document.createTextNode(0);
// h1.append(textNode);
// root.append(h1);
// var button = document.createElement("button");
// button.innerText = "Add";
// root.append(button);
// button.addEventListener("click", function () {
//     textNode.data++;
// });
// var commentNode = document.createComment("hello anh em");
// root.append(commentNode);
// var h2 = document.createElement("h2");
// h2.innerText = "Hoc Js";
// root.append(h2);
// root.append(h2.cloneNode(true));

var users = [
    {
        id: "1",
        name: "User 1",
        email: "user1.email.com",
    },
    {
        id: "2",
        name: "User 2",
        email: "user2.email.com",
    },
    {
        id: "3",
        name: "User 3",
        email: "user3.email.com",
    },
];

var render = function () {
    var html = users
        .map(function (user) {
            return `<h3>${user.name}</h3>`;
        })
        .join("");
    var form = `<input type="text" class="name" placeholder="Nhap ten..."/><button>Add</button>`;
    root.innerHTML = form + html;
};
render();
var btn = root.querySelector("button");
var input = root.querySelector("input");
btn.addEventListener("click", function () {
    var name = input.value;
    users.push({
        id: users.length,
        name: name,
    });
    render();
});
class User {
    constructor() {
        this.name = "Hoang an";
        this.email = "Hoang an email";
    }
}

var user = new User();
console.log(user);
