var age = 10;
var firstname = "Peter";
var flag = true;
var elems = [5, 3, 22, 1];
console.log(elems[0]);
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
var clr = Color.RED;
var data;
data = "A";
