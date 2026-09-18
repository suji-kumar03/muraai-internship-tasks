// Union gives multiple possible types.
//Narrowing helps us find which type it actually is.

////using typeof

//function printValue(value: string | number) {

//     if (typeof value === "string") {
//         console.log(value.toUpperCase());
//     } else {
//         console.log(value.toFixed(2));
//     }

// }
// printValue(12) //12.00

//using in


// interface Admin {
//     name: string;
//     permissions: string[];
// }

// interface User {
//     name: string;
//     email: string;
// }

// function showDetails(person: Admin | User) {

//     if ("permissions" in person) {
//         console.log(person.permissions);
//     } 
//     else {
//         console.log(person.email);
//     }

// }
// showDetails({
//     name: "Suji",
//     permissions: ["add", "delete"]
// });