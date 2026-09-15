//A type alias gives a name to a type.
type Employee={ //Employee=>type alias name.
    name:string;
    age:number;
    salary?:Number;
}
const user01:Employee={
    name:"suji",
    age:23
}
const user02:Employee={
    name:"Anu",
    age:22
}
console.log(user01);
console.log(user02);
//primitive types
type ID1 = number;
let employeeId: ID = 101;
//Example
type ID=number| string;
let employeeid :ID ="123";
employeeid=123;
console.log(employeeid);
//Diff b/w interface and type_alises
interface User {
    name: string;
    age: number;
}
const user1: User = {
    name: "Suji",
    age: 22
};
console.log(user1)
//In type
type empid = number | string;
type status = "pending" | "success" | "failed";
let orderStatus: status = "pending";
console.log(orderStatus);
orderStatus = "success";
console.log(orderStatus);
orderStatus = "failed";
console.log(orderStatus);
// console.log("completed");->error
//In interface 
// interface empid1 = number | string;=> Reference error
interface Product {
    name: string;
}

interface ElectronicProduct extends Product {
    brand: string;
}
const laptop:ElectronicProduct={
    name:"Somebrand",
    brand:"new"
}
console.log(laptop)