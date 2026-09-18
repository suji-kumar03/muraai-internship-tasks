"use strict";
//create a new types from existing types
// interface User {
//     name: string;
//     age: number;
//     email: string;
// }
// let user: User = {
//     name: "Suji",
//     age: 22,
//     email: "suji@gmail.com"
// };
// console.log(user);
//1.Partial=>for optional(update)
//update only one
// let updateUser: Partial<User> = { //name and age are optional
//     email: "suji@gmail.com"
// };
// console.log(updateUser);
// function updateUser(id:number,data:Partial<User>){
//     console.log(id,data)
// }
// updateUser(101,{email:"new@gmail.com"})
//2.Required->in an obj with required
//opp to partial
// interface User {
//     name?: string;
//     age?: number;
// }
// let user:Required<User>={
//     name:"anu",
//     age:23
// }
// console.log(user);
//3.Readonly->not able to update
// interface User {
//     name: string;
//     age: number;
// }
// let user: Readonly<User> = {
//     name: "Suji",
//     age: 22
// };
// user.name="Rahul";=>it shows error
// 
//4.Pick-> used to pick the variable
//specific property from existing val
// interface Employee {
//     id: number;
//     name: string;
//     salary: number;
//     department: string;
// }
// type EmployeeBasic = Pick<Employee, "id" | "name" >
// let employee: EmployeeBasic = {
//     id: 101,
//     name: "Suji",
//     // salary:20000=>error
// };
// console.log(employee)
//5.Omit=>opp to pick
//except salary
// type EmployeePublic = Omit<Employee, "salary">;
// let new_emp:EmployeePublic={
//     id: 11,
//     name: "anu",
//     // salary: 20000->it shows error it is omitted
// }
