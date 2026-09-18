"use strict";
//TypeScript->static typed,strictly follows the datatype,superset of js
//ex:
// let name="suji";//default name->string
// name=23;   //it shows error
// console.log(name);
Object.defineProperty(exports, "__esModule", { value: true });
//Boolean->true or false
let isActive = true;
let hasPermission = false;
console.log(isActive);
console.log(hasPermission);
//Number->Both integers and floating point
let float = 3.14;
const num = 2;
console.log(num);
console.log(float);
//String ->single quotes ('), double quotes ("), or backticks (`) 
let color = "blue";
let fullName = 'Priya';
let age = 30;
let sentence = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;
console.log(color);
console.log(fullName);
console.log(age);
console.log(sentence);
//Bigint->...n=>large whole num
let a = 1000000000000000000n;
let b = 2000000000000000000n;
console.log(a);
console.log(b);
//symbol->unique property=>reating unique property keys and constants.
const uniqueKey = Symbol('description');
const obj = {
    [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]); // "This is a unique property"
//Ex:
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); //false
//
const obj1 = {
    uniqueKey1: 'This is a unique property'
};
console.log(obj1.uniqueKey1); // "This is a unique property"
//Using any->any datatype
function newgreet(name) {
    return `Hello, ${name}!`;
}
console.log(newgreet(2));
console.log(newgreet("Suji"));
//Function
//Explicit
// Function with explicit parameter and return types
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet(2));
function greet1(num) {
    return 'Num' + num;
}
console.log(greet1(2));
function mult(a, b) {
    console.log(a * b);
}
mult(2, 3);
//Automatically assigns datatype
let username = "alice";
let score = 100;
let flags = [true, false, true];
function add(a, b) {
    return a + b;
}
console.log(username);
console.log(score);
console.log(flags);
console.log(add(5, 3));
// let age: any= 25;
// let ageSample = age;
// age = true;
// console.log(age + ' ' + 'ageSample')
//# sourceMappingURL=types.js.map