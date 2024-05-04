/*
if(dieukien){
    //code
}

if(dieukien){
    //code
}else{
    //code sai
}
if(dieukien 1){
    //code 1
}else if(dieukien 2){
    //code 2
}else{code 3}
*/

// var salary = 15000000;
// var income, rate;
// if (salary < 5000000) {
//     rate = 0;
// } else if (salary > 15000000) {
//     rate = 3;
// } else {
//     rate = 5;
// }
// income = salary - (salary * rate) / 100;
// console.log(income);

// var action = "remove";
// if (action === "create" || action === "add" || action === "insert") {
//     console.log("Thêm");
// } else if (action === "edit" || action === "update") {
//     console.log("Sửa");
// } else if (action === "delete" || action === "remove" || action === "destroy") {
//     console.log("Xóa");
// } else {
//     console.log("Danh sách");
// }

var month = "2";
month = +month;
if (month % 1 === 0 && month >= 1 && month <= 12) {
    switch (month) {
        case 2:
            console.log("28 hoặc 29 ngày");

            break;

        case 4:
        case 6:
        case 9:
        case 11:
            console.log("30 ngày");
            break;

        default:
            console.log("31 ngày");

            break;
    }
} else {
    console.log(`NHẬP LẠI`);
}
