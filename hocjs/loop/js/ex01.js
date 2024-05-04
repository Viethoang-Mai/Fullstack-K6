/*
 Vòng lặp
 */

var res = 1,
    gt = 1;
n = 5;

for (var i = 2; i <= n; i++) {
    gt *= i;
    res += gt;
}
console.log(res);
