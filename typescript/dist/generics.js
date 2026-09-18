"use strict";
//allow you to write reusable code that works with different types
//user decide the datatype
Object.defineProperty(exports, "__esModule", { value: true });
//Normal function
// function greet(value){
//     return value;
// }
// console.log(greet(1))
//Generic = reusable + type-safe
function identity(value) {
    return value;
}
console.log(identity(1));
console.log(identity("1"));
console.log(identity(true));
//any = reusable but loses type safety
function identity1(val) {
    return val;
}
let res1 = identity1(1);
// console.log(res1.toUpperCase());
console.log(identity1("1"));
// console.log(identity1(true));
function identity_for_generic(value) {
    return value;
}
function identity1_for_any(val) {
    return val;
}
let result = identity_for_generic(10); //T->stores and remember value with type
let result1 = identity1_for_any(10);
//both shows error
// result.toUpperCase();   //compile time error
// result1.toUpperCase();  //typescript doesn't check
//generic array Example
function getFirst(items) {
    //but inform to ts that empty->undefined 
    return items[0];
}
const arr_result = getFirst([]);
console.log(arr_result);
const arr_result2 = getFirst([1, 2, 3, 4, 5]);
console.log(arr_result2);
//# sourceMappingURL=generics.js.map