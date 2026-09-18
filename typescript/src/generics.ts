//allow you to write reusable code that works with different types
//user decide the datatype

//Normal function

// function greet(value){
//     return value;
// }
// console.log(greet(1))

//Generic = reusable + type-safe
function identity<T>(value:T):T{
    return value;
}
console.log(identity<number>(1));
console.log(identity<string>("1"));
console.log(identity<boolean>(true));
//any = reusable but loses type safety
function identity1(val:any): any{
    return val;
}
let res1=identity1(1)
// console.log(res1.toUpperCase());
console.log(identity1("1"));
// console.log(identity1(true));
function identity_for_generic<T>(value: T): T {
    return value;
}

function identity1_for_any(val: any): any {
    return val;
}

let result = identity_for_generic(10);//T->stores and remember value with type
let result1 = identity1_for_any(10);
//both shows error
console.log(result.toUpperCase());   //compile time error
console.log(result1.toUpperCase());  //typescript doesn't check

//generic array Example
function getFirst<T>(items: T[]): T | undefined  { // if we didn't mention undefined same o/p only
    //but inform to ts that empty->undefined 
    return items[0];
}
const arr_result=getFirst<number>([]);
console.log(arr_result);
const arr_result2=getFirst<number>([1,2,3,4,5]);
console.log(arr_result2)
