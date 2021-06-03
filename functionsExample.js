// basic functions
function add(a, b) {
    return a + b;
}
console.log(add(4, 5));
// console.log(add("A","B")); // ERROR
function doTask(a, b) {
    console.log(a, b);
}
doTask(4, 5); // Type Inferenc
doTask("A", "B");
