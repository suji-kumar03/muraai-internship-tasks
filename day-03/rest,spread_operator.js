//Spread-->Copy of existing array or obj(unpacking)
let arr1=[1,2,3];
let arr2=[4,5,6];
let new_arr=[...arr1,...arr2];
console.log(new_arr);
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
console.log(lyrics);
//rest-->collection of arguments into array(packing)
function myFun(a, b, ...manyMoreArgs) {
  console.log("a:", a);
  console.log("b:", b);
  console.log("manyMoreArgs:", manyMoreArgs);
}
myFun("one", "two", "three", "four", "five", "six");
function mult(...args){
const new_arr=args.map(num=>{ return num*2});
return new_arr;
}
console.log(mult(1,2,3,4,5));