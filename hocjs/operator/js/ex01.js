/*
Toán tử - Biểu thức
    toán tử + toán hạng = biểu thức
    VD: a + b = c

1. Toán tử số học ( + - * / % ** ++ --)

*/
var count = 1;
var a = "20",
    b = "10";
var res = +a + +b;
console.log(res);
/*
2. Toán tử gán
=, +=, /=, %=,-=
*/
/*
3. Toán tử so sánh
<, >, <=, >=, ==(Chỉ so sánh giá trị), ===(so sánh giá trị va kiểu dữ liệu), !=, !==;

--> trả về kiểu kết quả boolean(true/false)

4. Toán tử kết hợp
- &&: Và, ||: Hoặc, !: Phủ định
thứ tự ưu tiên : && > || > !

5. Toán tử 3 ngôi
dieukien ? gtri dung : gtri sai;

6. Toán tử nullish(??)
    bien ?? gtri
Nếu bien là undefine hoặc Null -> lấy phía sau ?? ngược lại thì lấy phía trước ??
var a = 10;
var b = a ?? "Không xác định" 
*/

var a = 10;
var b = a === null || a === undefined ? "Không xác định" : a;
console.log(b);
/*
7. Falsy
Trong trường hợp cần chuyển về boolean mà gtri chuyển về false -->> Falsy
0, "", false, NaN, undefined, null.

8.Truthy
Các trường hợp không phải falsy là truthy
*/
/*

*/
