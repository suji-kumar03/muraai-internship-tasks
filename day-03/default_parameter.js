//default= named parameter with initialize with default values
const mult = (a, b = 2) => { return a * b; };
console.log(mult(5));
console.log(mult(5, 3));
const add = (x, y) => { return x + y; };
console.log(add(10));
console.log(add(10, 20));
function multiply(a = 2, b) {
    return a * b;
}
console.log(multiply(5, 2));
console.log(multiply(5));
console.log(multiply(5, undefined)); 

//template literals->backtick(``)->string interpolation(instead of concatenation)
let name="priya";
let dept="IT";
console.log(`Name: ${name} and Department: ${dept}`);