var user = [
    {
        id: 1,
        name: "User 1",
        email: "user1.@email.com",
    },
    {
        id: 2,
        name: "User 2",
        email: "user2.@email.com",
    },
    {
        id: 3,
        name: "User 3",
        email: "user3.@email.com",
    },
];

var root = document.querySelector("#root");

var newUser = user
    .map(function (user) {
        return `<li>${user.name}-${user.email}<button class="close-btn">&times;</button></li>`;
    })
    .join("");

root.innerHTML = `<ul>${newUser}
</ul>`;
// root.forEach(function (user) {
//     user.addEventListener("click");
// });
root.addEventListener("click", function (e) {
    if (e.target.classList.contains("close-btn")) {
        e.target.parentElement.remove();
    }
});
