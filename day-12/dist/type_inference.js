"use strict";
//TypeScript automatically understands the datatype based on the value you assign.
let age = 25; // we can change the val by number only
// let name = "Suji";//string
let isStudent = true; //boolean
// age="25";-->Error
//In js
// let age1 = 25;
// age1="25";=>valid
//no need to write datatype
let employeeName = "Rahul";
let salary = 45000;
let isActive = true;
let emp = {
    name: "priya",
    age: 23,
    salary: 40000,
    email: "priya@example.com"
};
// let emp1:Employee={ 
//     name:"priya",
//     age:"23",     //Error
//     salary:40000
// }
//Implicit
let company = "company"; //string no change
// company =23; ->error
console.log(company);
console.log(emp);
