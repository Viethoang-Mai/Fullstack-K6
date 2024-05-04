// //DOM Navigation
// // - parentElement---> Trả về 1 element
// // - children ---> trả về 1 danh sách
// // - nextElementSibling ---> Element kế tiếp
// // - previousElementSibling ---> Element kế sau
// var btn = document.querySelector(".btn");
// var menu = document.querySelector(".menu");
// // btn.addEventListener("click", function () {
// //     console.log(this.parentElement);

// // });
// // btn.addEventListener("click", function () {
// //     console.log(this.parentElement);
// // });
// // console.log(menu.children);
// // var menuItems = document.querySelectorAll(".menu > li");
// // menuItems.forEach(function (item) {
// //     item.addEventListener("click", function () {
// //         if (this.nextElementSibling !== null) {
// //             this.nextElementSibling.style.color = "red";
// //             return;
// //         }
// //         alert("con gi nua dau");
// //     });
// // });

// var listItem = document.querySelector(".list-item");
// var linkItem = document.querySelectorAll(".list-item > li > a");
// var checkIndex;
// linkItem.forEach(function (item, index) {
//     var ulEl = item.nextElementSibling;
//     if (ulEl) {
//         item.parentElement.classList.add("has-child");
//     }
//     item.addEventListener("click", function (e) {
//         if (ulEl) {
//             this.parentElement.classList.add("has-child");
//             e.preventDefault();
//             var subUl = document.querySelector(".list-item > li>ul.ul-open");
//             ulEl.classList.toggle("ul-open");
//             this.parentElement.classList.toggle("ul-open");
//             if (subUl) {
//                 subUl.classList.remove("ul-open");
//                 subUl.parentElement.classList.remove("ul-open");
//             }
//         }
//         // checkIndex = index;
//         // console.log(index);
//     });
// });
