//Hoisting is JavaScript's behavior of processing declarations before executing code in that scope.
//Declaration is hoisted but initialization is not hosted
console.log(x);
var x = 10;//or x;//undefined,because x has automatically assigned the value ‘undefined’
console.log(x);
//with let and const are hoisted but inaccessible
// console.log(a);
// let a=10;//reference error;//hoisted but uninitialized this is temporal dead zone
// console.log(b);//accessible before initialization
// const b=10;//reference error;//hoisted but uninitialized this is temporal dead zone
//Temporal dead Zone(let and const)
{
    //console.log(y)//reference error
    let y = 20;
    console.log(y);
}
{
    const z = 30;
    console.log(z);
}
//Function hoisting:
greet();//entire func hoist
function greet() {
    console.log("Hello");
}//function is called before the function declaration.//works
//Function expression hoisting:
// new_greet();//var newgreet->hoisted
var new_greet = function () {
    console.log("hello");
}
//new_greet();->shows output
// //type error->func expression
//because var is initialized with greet-undefined so it shows error, the function runs on runtime 
hello();//reference error
const hello=()=>{
    console.log("Hi");
}
//hello();->shows o/p


