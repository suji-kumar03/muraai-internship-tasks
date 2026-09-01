// var,let,const
//var->function scope,reassignable,redeclare
var x=10;
x=20;
console.log(`x: ${x}`);
var x=30;
{
    var x=40;
    console.log(`x:inside the block: ${x}`);//temp hides outer x
}
console.log(`x: ${x}`);
//let->block scoped,not redeclare,reassignable
let a=20;
a=40;
console.log(`a: ${a}`);
let b=50;
{
    let b=100;
    console.log(`b:inside the block: ${b}`);
}
console.log(`b: ${b}`);
//const->block scoped,not redeclare,not reassignable
const pi=3.14;
console.log(`pi: ${pi}`);
{
    const pi=3.1415;
    console.log(`pi:inside the block: ${pi}`);
}
console.log(`pi: ${pi}`);
