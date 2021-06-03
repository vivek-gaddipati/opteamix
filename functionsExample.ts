// basic functions

function add(a:number, b: number) : number {
    return a + b;
}
console.log(add(4,5));
// console.log(add("A","B")); // ERROR

function doTask<T>(a:T, b:T): void {
    console.log(a, b);
}

 doTask(4,5);  // Type Inference

 doTask<string>("A","B") ;





