//Objects, this, closures, scope
//ES modules (import/export)
//Object is a collection of properties(key(property),value)
const obj = {
  property1: "value1", //variable,identifier
  2: "value2",//number
  "property n": "value3", //string
};
console.log(obj.property1);//value1
console.log(obj[2]);//value2
console.log(obj['2']);//value2
console.log(obj["property n"]);//value3
//nested
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
console.log(myHonda.engine.cylinders);//4
console.log(myHonda.engine.size);//2.2
//add,replace property
const employee = {
    name: "Priya",
    age: 22,
    department: "IT",
    salary: 50000
};
console.log(employee);//{ name: 'Priya', age: 22, department: 'IT', salary: 50000 }
employee["city"]="Bangalore";//add property
console.log(employee);
employee["salary"]=55000;//replace property
console.log(employee);// Updated=>salary: 55000,
//this->reference to the current object
const new_employee = {
    name: "Priya",
    greet: function() {//function inside the obj=method
        console.log("Hello " + this.name);//Hello Priya
        console.log("Hello " + new_employee.name);//Hello Priya
    }
};
new_employee.greet();
//diff:new_employee.name=>name of the object
//this.name=>who calls this method that object
//using in diff object
const emp1={
    name:"Priya",
    age:22,
    greet:function(){
        return("Hello "+this.name);//refers to Priya
    }
};
const emp2={
    name:"Rahul",
    age:30,
    greet:emp1.greet//refers to Rahul
};
//Same function but the obj is different then we used this keyword
console.log(emp1);//{ name: 'Priya', age: 22, greet: [Function: greet] }
console.log(emp1.greet());//Hello Priya
console.log(emp2);//{ name: 'Rahul', age: 30, greet: [Function: greet] }
console.log(emp2.greet());//Hello Rahul
//Example
const cart = {
    product: "Laptop",
    price: 50000,
    quantity: 2,

    total: function() {
        return this.price * this.quantity;//current obj value
    }
};
console.log(cart.total());//100000
//Function context
function getThis() {
  return this;//refer obj1
}// console.log(getThis());
const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };
obj1.getThis = getThis;//obj1={name:"obj1",getThis : function getThis() {return this;} }
//obj1.getThis = getThis();-->execute 
obj2.getThis = getThis;//obj1={name:"obj1",getThis : function getThis() {return this;} }
console.log(obj1);//{ name: 'obj1', getThis: [Function: getThis] }
console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }
//Scope->where the variable is accessible
//Global Scope->variable can be accessed outside the fuction,block
const price=12000;
const greet=()=>{
    console.log(price);//12000
};
greet();
//Function Scope-var->Variable can be accessed inside the function.
function calculatesalary(){
    let salary=13000;
    console.log(salary);//13000
}
calculatesalary();
//console.log(salary);->Reference error
//Block Scope-let,const->Variable can be accessed inside the block like if,for,while…
if(true){
    let salary=11000;
    console.log(salary);//11000
};
//console.log(salary);->reference error
//var inside block=>Function scoped
const greeting=()=>{
    var name="Priya";
    if(true){
        var name="Anu";
        console.log(name);//Anu //replace in name variable
    }
    console.log(name);//Anu
}
greeting();
//console.log(name);->reference error
//Corrected
const newgreeting=()=>{
    var name="Priya";
    if(true){
        let name="Anu";
        console.log(name);//Anu //replace in name variable
    }
    console.log(name);//Priya
}
newgreeting();
//var with block
var pi=3.14;
{
    var pi=3.141;
    console.log(pi);//3.141
}
console.log(pi);//3.141
//let and cost diff
let pival=3.14;
{
    let pival=3.141;
    console.log(pival);//3.141
}
console.log(pival);//3.14
//let vs var Inside a Block
const usingvar=()=>{
    if(true){
        var name="John";
        console.log(name);//John(function scope)
    }
    console.log(name);//John(function scope)
}
usingvar();
//console.log(name);->Reference Error
const usinglet=()=>{
    if(true){
        let name="Priya";
        console.log(name);//Priya
    }
    //console.log(name);->reference error
}
usinglet();
//console.log(name);->reference error
//closure-->outer function variable accessed inner function
function outer(){
    var name="Anu";
    function inner(){
        console.log("Hello "+name);//Hello Anu
    }
    return inner;//return inner function definition reference=>inner (val to outer)
}
const op=outer();//stores in op
op();// function is stored
//Example
function main(){
    let count=0;
    function counting(){
        count++;
        console.log(count);
    }
    return counting;
}
const result=main();
result();
result();
result();
//another method
// function main(){
//     let count=0;
//     return function(){
//         count++;
//         console.log(count);
//     };
// }
// const res=main();
// res();
// res();
//ES6 modules->import/export=>to get a function and variable from another file
//export->another file can use this func
 export function add(a, b) {
    return a + b;
}

//import-> using another file fuction to currently using func
// import { add } from "./.js";
// console.log(add(10, 20));
const employees = {
    name: "Priya",
    role: "Developer" 
};
export { employees };//multiple func {add,subtract}
// import {employee} from "./.js"
// console.log(employee.name);
// console.log(employee.role);





// const ages = { alice: 18, bob: 27 };
// console.log(Object.keys(ages));
// console.log(Object.values(ages));

// function hasPerson(name) {
//   return name in ages;
// }

// function getAge(name) {
//   return ages[name];
// }
//in returns true or false
// console.log(hasPerson("hasOwnProperty"));
// console.log(hasPerson("toString"));  // true (JavaScript inherited properties check)-->inherit from its prototype
// //prototype=>like a parent obj inherit properties from parent obj
// console.log(getAge("hasOwnProperty"));
// console.log(getAge("toString")); // [Function: toString]->it is a function