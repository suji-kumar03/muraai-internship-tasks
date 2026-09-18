//Instead of using repeatedly
//structure/shape that an object must follow in TypeScript.
interface User {
    name: string;
    age: number;
}
const user1: User = {
    name: "Suji",
    age: 22
};
const user2: User={
    name:"Vasu",
    age:20
}
console.log(user1);
console.log(user2);
//Interface with optional property
const name:string="suji"
interface Product {
    name:string;
    price:number;
    discount?:number;
}
const product1 : Product ={
     name:"Laptop",
     price:50000
}
const product2 : Product ={
     name:"Laptop",
     price:50000,
     discount:10
}
console.log(product1);
console.log(product2);
