"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//A union means a value can be one of multiple types.
let id;
id = 123;
id = true;
// id="123";->Error
console.log(id);
console.log(typeof id);
//Ex
function printId(id) {
    console.log(id);
}
printId(101);
printId("EMP101");
//# sourceMappingURL=union.js.map