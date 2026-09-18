"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee1 = {
    id: 1,
    name: "Priya",
    department: "IT",
    salary: 50000,
    email: "priya@gmail.com",
};
const employee2 = {
    id: 2,
    name: "Anu",
    department: "Finance",
    salary: 30000,
    email: "anu@gmail.com",
};
console.log(employee1);
console.log(employee2);
let id = 101;
id = "PROD101";
// id=true;//error
console.log(id);
let payment;
payment = "cash";
console.log(payment);
payment = "card";
console.log(payment);
payment = "upi";
console.log(payment);
//payment="bitcoin";//error
//4. Enum — Order StatusAn online shopping application has these order statuses:
//Pending,Confirmed,Shipped,Delivered,Cancelled
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Confirmed"] = "CONFIRMED";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
    OrderStatus["Cancelled"] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
let order = OrderStatus.Shipped;
console.log(order);
//5. Generic — First Item
//Create a generic function:
function getFirst(items) {
    return items[0];
}
let res = getFirst([10, 20, 30]);
console.log(res);
res = getFirst(["Apple", "Banana", "Orange"]);
console.log(res);
res = getFirst([]);
console.log(res);
//6. Generic — API Response 
//Imagine an API can return different types of data.
function displayData(data) {
    return data;
}
console.log(displayData("Suji"));
console.log(displayData(50000));
console.log(displayData(true));
//# sourceMappingURL=real_world_problems.js.map