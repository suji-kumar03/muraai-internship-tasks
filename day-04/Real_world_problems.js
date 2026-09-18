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
