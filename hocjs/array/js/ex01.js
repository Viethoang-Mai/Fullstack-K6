var element = ["e1", "e2", "e3"];
var newE = "e0";
var res = [newE];
for (var value of element) {
    res[res.length] = value;
}
console.log(res);
