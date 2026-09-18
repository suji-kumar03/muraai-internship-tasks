//enum lets you create a set of named constants
enum Direction {
    Up, //default->0
    Down,//default->1
    Left,//default->2
    Right//default->3
}
let direction:Direction=Direction.Up;
console.log(direction);
//String enum-->key,value store
enum OrderStatus{
    pending="PENDING",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED"
}
const status:OrderStatus=OrderStatus.pending;
console.log(status);