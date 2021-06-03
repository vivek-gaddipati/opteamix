
// HOF
function forEach<T>(elems:T[], action:(elem:T) => void) : void {
    let i : number;
    for(i = 0; i < elems.length; i ++) {
        action(elems[i]);
    }
}

//HOF
function filter<T>(elems:T[], predicate:(elem:T) => boolean): T[] {
    let res:T[] = [];
    forEach(elems, elem => {
            if(predicate(elem)) {
                res.push(elem);
            }
    });
    return res;
}

let nos:number[] = [5,2,6,88,21];

let names:string[] = ["Raj","Sita","Geetha","Peter"];

forEach<number>(nos ,console.log);
forEach(names, console.log);

//console.log("A");

let res = filter(nos, no => no %2 == 0);

console.log(res);


