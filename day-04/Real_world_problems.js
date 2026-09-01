//1. The employee gets a salary hike of ₹5000.
//const->not reassign,but obj properties can be changed
const employee = {
    name: "Rahul",
    salary: 45000
};
console.log('1.Employee Salary Update ');
console.log(`Before Salary hike:${employee.salary}`);
const new_salary = 5000;
employee.salary = employee.salary + new_salary;
console.log(`After Salary hike:${employee.salary}`);
//2. Product Bill — Template Literals
const product = "Laptop";
const price = 55000;
const quantity = 2;
console.log('2.Product Bill');
console.log(`Product: ${product}`);
console.log(`Price: ${price}`);
console.log(`Quantity: ${quantity}`);
console.log(`Total: ${price * quantity}`);
//3.Employee Greeting — Arrow Function
const greetEmployee = (name, dept) => {
    return `Hello ${name}, Welcome to the ${dept} department!`;
}
console.log('3.Employee Greeting');
console.log(greetEmployee("Priya", "IT"));
//4.Destructuring User Profile
const user = {
    id: 101,
    name: "Anitha",
    email: "anitha@gmail.com",
    city: "Bangalore"
};
const { id, name, email, city } = user;
console.log(`4.User Profile`);
console.log(`${name} lives in ${city}`);
console.log(`Email: ${email}`);
//5. Shopping Cart — Array Destructuring
const cart = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor"
];
console.log('First product before destructuring', cart[0]);
const [FirstProduct, SecondProduct, ThirdProduct, FourthProduct] = cart;
console.log(`5.Shopping Cart`);
console.log(`First Product: ${FirstProduct}`);
console.log(`Second Product: ${SecondProduct}`);
console.log(`Third Product: ${ThirdProduct}`);
console.log(`Fourth Product: ${FourthProduct}`);
//6. Employee Information
const employees = {
    name: "Arun",
    age: 25,
    department: "IT",
    salary: 60000
};
//use destructuring to extract:
function displayEmployee(employee) {
    const { name, age, department, salary } = employees;
    console.log('6.Employee Information');
    console.log(`${name} works in ${department} and earns ${salary}`);
}
displayEmployee(employees);
//7. Spread Operator Combine Skills
const frontendSkills = ["HTML", "CSS", "JavaScript"];
const backendSkills = ["Node.js", "MongoDB", "Express"];
const fullStackSkills = [...frontendSkills, ...backendSkills];
console.log('7.Spread Operator Combine Skills');
console.log(fullStackSkills);
console.log(`Full Stack Skills: ${fullStackSkills.join(", ")}`);
//8.Update Employee Details(spread operator)
const newemployee = {
    name: "John",
    department: "IT",
    salary: 50000
};
const updatedEmployee = { ...newemployee, salary: 60000, designation: "Software Engineer" };
console.log('8.Update Employee Details');
console.log(updatedEmployee);
//9.Add New Items to Cart
const newcart = ["Laptop", "Mouse"];
const newItems = ["Keyboard", "Headset"];
const updatedCart = [...newcart, ...newItems];
console.log('9.Add New Items to Cart');
console.log(updatedCart);
//Rest Operator 10. Calculate Total Order Amount
function calculateTotal(...numbers) {
    return numbers.reduce((total, num) => { return total + num }, 0);
}
console.log(calculateTotal(100, 200, 300, 400, 500));
//11.Send Notification to Multiple Users =>map= manipulate or change the existing array
function sendNotification(message, ...users) {
    const msg = users.map(user => { return `Sending ${message} to ${user}` });
    return msg;
}
console.log('11.Send Notification to Multiple Users');
console.log(sendNotification("Meeting at 10 AM", "Rahul", "Priya", "Arun").join("\n"));
//Default Parameters 12. Create Employee -->position should be same
function createEmployee(name,department='IT'){
    console.log(`12.Create Employee`);
    console.log(`${name} works in ${department} department.`)
}
createEmployee("John");
//13. Order Delivery
function createOrder(product,quality,deliveryType='Standard Delivery'){
console.log('13.Order Delivery');
console.log(`${product} x ${quality} - ${deliveryType}`);
} 
createOrder ("Laptop",1);
createOrder("Laptop",1," Express Delivery");