//1.Employee Names — map()
//Get only the employee names.
const employees = [
    { name: "John", salary: 40000 },
    { name: "Priya", salary: 55000 },
    { name: "Rahul", salary: 60000 },
    { name: "Arun", salary: 45000 }
];
const empname = employees.map((employee) => {
    return (employee.name);
});
console.log(empname);
//2. High Salary Employees — filter()
//Using the same employees, find employees whose salary is greater than ₹50,000
const filterSalary = employees.filter((employee) => {
    return employee.salary > 50000;
});
console.log(filterSalary);
//3. Find Employee — find()
//Find the employee whose name is "Rahul".
const findEmp = employees.find((employee) => {
    return employee.name === 'Rahul';
});
console.log(findEmp);
//4. Check Employee — some()
//Check whether at least one employee earns more than ₹70,000.
const someEmp = employees.some((employee) => {
    return employee.salary > 70000;
});
console.log(someEmp);
//5. Salary Requirement — every()
//Check whether all employees earn at least ₹40,000.
const everyEmp = employees.every((employee) => {
    return employee.salary >= 40000;
});
console.log(everyEmp);
//6. Shopping Cart Total — reduce()
const cart = [
    { product: "Laptop", price: 50000, quantity: 1 },
    { product: "Mouse", price: 1000, quantity: 2 },
    { product: "Keyboard", price: 2000, quantity: 1 }
];
const total = cart.reduce((sum, item) => {
    return sum + (item["price"] * item["quantity"]);
}, 0);
console.log(total);
//7. Passed Students — filter()
const students = [
    { name: "John", mark: 85 },
    { name: "Priya", mark: 45 },
    { name: "Rahul", mark: 72 },
    { name: "Arun", mark: 38 },
    { name: "Meena", mark: 91 }
];
const passedstudents = students.filter((student) => {
    return student.mark >= 50;
});
console.log(passedstudents);
//8. Student Names — map()
//Using the same students, create an array containing only their names.
//using map()
const name = students.map((student) => {
    return student.name;
});
//using forEach()
console.log(name);
students.forEach((student) => {
    console.log(student.name);
});
//9. Find Product — find()
const products = [
    { id: 101, name: "Laptop", stock: 5 },
    { id: 102, name: "Mouse", stock: 20 },
    { id: 103, name: "Keyboard", stock: 0 },
    { id: 104, name: "Monitor", stock: 8 }
];
const findproduct = products.find((product) => {
    return product.id === 103;
});
console.log(findproduct);
//10. IT Employees' Names
//Get the names of only IT employees.
const newemployees = [
    { name: "John", department: "IT", salary: 60000 },
    { name: "Priya", department: "HR", salary: 50000 },
    { name: "Rahul", department: "IT", salary: 70000 },
    { name: "Meena", department: "Finance", salary: 65000 },
    { name: "Arun", department: "IT", salary: 55000 }
];
const IT_name = newemployees.filter((newemployee) => newemployee.department === "IT")
    .map((newemployee) =>
        newemployee.name
    );
console.log(IT_name);
//11. IT Department Salary
//Using the same data, calculate the total salary of IT employees.
const salary_IT = newemployees.filter((newemployee) => { return newemployee.department === "IT" })
    .reduce((sum, newemployee) => {
        return sum + newemployee.salary;
    }, 0);
console.log(salary_IT);
//12. Highest Paid Employee sort=>no need to create new array
//Using the same employees, find the employee with the highest salary.
const highest = newemployees.reduce((highest, employee) => {
    return employee.salary > highest.salary ? employee : highest;
});
console.log(highest);
//13. E-commerce Order System
//Find the total revenue from delivered orders only.
const orders = [
    { id: 1, customer: "John", amount: 2500, status: "delivered" },
    { id: 2, customer: "Priya", amount: 5000, status: "pending" },
    { id: 3, customer: "Rahul", amount: 3500, status: "delivered" },
    { id: 4, customer: "Meena", amount: 7000, status: "cancelled" },
    { id: 5, customer: "Arun", amount: 4500, status: "delivered" }
];
const total_revenue = orders.filter((order) => order.status === "delivered").reduce((sum, order) => { return sum + order.amount }, 0);
console.log(total_revenue);
//14. Out-of-Stock Products
//Get the names of products that are out of stock.
const new_products = [
    { name: "Laptop", stock: 5 },
    { name: "Mouse", stock: 0 },
    { name: "Keyboard", stock: 10 },
    { name: "Monitor", stock: 0 },
    { name: "Headset", stock: 3 }
];
const out_of_stock = new_products.filter((product) => product.stock === 0).map((product) => product.name);
console.log(out_of_stock);
//15. Discounted Products
//Give every product a 10% discount and create a new array
const dis_products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];
const discount_products = dis_products.map((product) => { return { name: product.name, price: product.price - (product.price * 0.10) }; });
console.log(discount_products);
//16. Find Second Highest Salary
const salaries = [45000, 70000, 55000, 90000, 60000, 80000];
const sort_salary = salaries.sort((a, b) => {
    return a - b;
});
console.log(sort_salary[sort_salary.length - 2]);
//17. Remove Duplicate Skills
const skills = [
    "JavaScript",
    "Python",
    "SQL",
    "JavaScript",
    "React",
    "Python",
    "SQL"
];
const unique_elements = [new Set(skills)]
console.log(unique_elements);
//18. Most Expensive Product
const exp_products = [
    { name: "Laptop", price: 55000 },
    { name: "Phone", price: 30000 },
    { name: "Tablet", price: 25000 },
    { name: "Monitor", price: 18000 }
];
const high_expen = exp_products.sort((a, b) => {
    return a.price - b.price;
});
console.log(high_expen[high_expen.length - 1]);
//another methods->same price use this method
const high = exp_products.reduce((high, product) => {
    return product.price > high.price ? product : high;
});
console.log(high);
