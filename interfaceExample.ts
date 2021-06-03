// interface as a shape
interface Product {
    id:number,
    name:string,
    price: number,
    category?: string // optional
}

function addProduct(p : Product): void {
    console.log(p);
}

addProduct({"id":1, "name":"iPhone", "price":124447.44, "category" : "mobile"});

addProduct({"id":4, "name":"HDMI connector", "price":2444.00 });

// addProduct({"name":"iPhone", "price":124447.44});

// interface as contract
interface Flyable {
    fly(): void;
}

class Bird implements Flyable {
    fly(): void {
        throw new Error("Method not implemented.");
    }
}

/*

[
    {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
    {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
    {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
    {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
      {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}]


*/