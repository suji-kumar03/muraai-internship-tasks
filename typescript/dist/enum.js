"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//enum lets you create a set of named constants
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; //default->3
})(Direction || (Direction = {}));
let direction = Direction.Up;
console.log(direction);
//String enum-->key,value store
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["pending"] = "PENDING";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
})(OrderStatus || (OrderStatus = {}));
const status = OrderStatus.pending;
console.log(status);
//# sourceMappingURL=enum.js.map