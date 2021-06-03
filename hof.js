// HOF
function forEach(elems, action) {
    var i;
    for (i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}
//HOF
function filter(elems, predicate) {
    var res = [];
    forEach(elems, function (elem) {
        if (predicate(elem)) {
            res.push(elem);
        }
    });
    return res;
}
var nos = [5, 2, 6, 88, 21];
var names = ["Raj", "Sita", "Geetha", "Peter"];
forEach(nos, console.log);
forEach(names, console.log);
//console.log("A");
var res = filter(nos, function (no) { return no % 2 == 0; });
console.log(res);
