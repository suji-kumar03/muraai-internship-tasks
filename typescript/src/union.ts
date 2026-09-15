//A union means a value can be one of multiple types.
let id:number | boolean ;
id=123;
id=true;
// id="123";->Error
console.log(id);
console.log(typeof id);
//Ex
function printId(id: number | string) {
    console.log(id);
}

printId(101);
printId("EMP101");