// var checkboxMain = document.querySelector(".checkMain input");
// var checkboxItem = document.querySelectorAll(".checkbox-items input");
// var btn = document.querySelector(".btn button");
// var cnt = 0;
// var btnSpan = btn.querySelector("span");
// btnSpan.innerText = `${cnt}`;

// checkboxMain.addEventListener("change", function () {
//     checkboxItem.forEach(function (input) {
//         input.checked = checkboxMain.checked;
//     });
//     if (this.checked) {
//         cnt = checkboxItem.length;
//         btnSpan.innerText = `${cnt}`;

//         btn.removeAttribute("disabled");
//     } else {
//         cnt = 0;
//         btn.setAttribute("disabled", "disabled");
//         btnSpan.innerText = `${cnt}`;
//     }
// });
// checkboxItem.forEach(function (input) {
//     input.addEventListener("change", function (e) {
//         if (this.checked) {
//             ++cnt;
//         } else {
//             --cnt;
//         }
//         checkboxMain.checked = cnt === checkboxItem.length;
//         if (cnt > 0) {
//             btnSpan.innerText = `${cnt}`;
//             btn.removeAttribute("disabled");
//         } else {
//             btnSpan.innerText = `${cnt}`;
//             btn.setAttribute("disabled", "disabled");
//         }
//     });
// });
// btn.addEventListener("click", function (e) {
//     cnt = 0;
//     checkboxMain.checked = false;
//     btnSpan.innerText = `${cnt}`;

//     checkboxItem.forEach(function (input) {
//         input.checked = false;
//     });
//     btn.setAttribute("disabled", "disabled");
// });

var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector(".progress > span");
console.log(progressSpan);
var progressBarWidth = progressBar.clientWidth;

progressBar.addEventListener("mousedown", function (e) {
    if (e.which === 1) {
        dragSpace = e.offsetX;
        var rate = (dragSpace * 100) / progressBarWidth;
        progress.style.width = `${rate}%`;
        initialClientX = e.clientX;
        currentSpace = dragSpace;

        document.addEventListener("mousemove", handleDrag);
    }
});

var initialClientX = 0;
var currentSpace = 0;
progressSpan.addEventListener("mousedown", function (e) {
    e.stopPropagation();
    initialClientX = e.clientX;
    document.addEventListener("mousemove", handleDrag);
});
document.addEventListener("mouseup", function (e) {
    document.removeEventListener("mousemove", handleDrag);
    currentSpace = dragSpace;
});
var dragSpace = 0;
function handleDrag(e) {
    var clientX = e.clientX;
    dragSpace = clientX - initialClientX + currentSpace;
    var rate = (dragSpace * 100) / progressBarWidth;
    if (rate < 0) {
        rate = 0;
    }
    if (rate > 100) {
        rate = 100;
    }
    progress.style.width = `${rate}%`;
}
