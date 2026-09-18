//destructing-taking the values from obj or array and store in variable
//In array
const arr=[1,2,3,4,5];
const [one,two,three,four,five]=arr;
console.log(`one: ${one}`);
console.log(`two: ${two}`);
console.log(`three: ${three}`);
console.log(`four: ${four}`);
console.log(`five: ${five}`);
//In Object
const obj = { name: "suji", age: 23, city: "Bangalore" };
const { name, age, city } = obj;
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`City: ${city}`);
//with rest operator
let a,b,rest;
[a,b]=[10,20];
console.log(a);
console.log(b);
[a,b,...rest]=[10,20,30,40,50]; //don't use let because it is already declared
console.log(rest);