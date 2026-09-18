//1. Interface — Employee
// //You are building an employee management system.
//if i miss name or anything=>it will show error for property
interface Employee{
    id:number,
    name:string,
    department:string,
    salary:number,
    email:string,
    phone?:string
}
const employee1:Employee={
    id:1,
    name:"Priya",
    department:"IT",
    salary:50000,
    email:"priya@gmail.com",
}
const employee2:Employee={
    id:2,
    name:"Anu",
    department:"Finance",
    salary:30000,
    email:"anu@gmail.com",
}
console.log(employee1);
console.log(employee2);

//2. Type Alias — Product ID
//A shopping application allows product IDs to be either a number or a string.
type Product_ID = number | string;
let id:Product_ID=101;
id="PROD101";
// id=true;//error
console.log(id);

//3. Union — Payment Method
//A payment system supports only:"cash","card","upi"
type paymentmethod = "cash" | "card" | "upi"
let payment:paymentmethod;
payment="cash";
console.log(payment);
payment="card";
console.log(payment);
payment="upi";
console.log(payment);
//payment="bitcoin";//error


//4. Enum — Order StatusAn online shopping application has these order statuses:
//Pending,Confirmed,Shipped,Delivered,Cancelled
enum OrderStatus{
    Pending="PENDING",
    Confirmed="CONFIRMED",
    Shipped="SHIPPED",
    Delivered="DELIVERED",
    Cancelled="CANCELLED"
}
let order:OrderStatus=OrderStatus.Shipped;
console.log(order)

//5. Generic — First Item
//Create a generic function:
function getFirst<T>(items:T[]): T | undefined{
    return items[0];
}
let res: number | string | undefined = getFirst<number>([10,20,30]);
console.log(res);
res = getFirst<string>(["Apple","Banana","Orange"]);
console.log(res);
res=getFirst([]);
console.log(res)

//6. Generic — API Response 
//Imagine an API can return different types of data.
function displayData<T>(data: T): T  {
    return data;
}
console.log(displayData<string>("Suji"));
console.log(displayData<number>(50000));
console.log(displayData<boolean>(true));