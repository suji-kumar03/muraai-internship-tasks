//1.Employee Names — map()
//Get only the employee names.
const employees = [
    { name: "John", salary: 40000 },
    { name: "Priya", salary: 55000 },
    { name: "Rahul", salary: 60000 },
    { name: "Arun", salary: 45000 }
];
const empname = employees.map((employee)=>{
    return(employee.name);
});
console.log(empname);
//2. High Salary Employees — filter()
//Using the same employees, find employees whose salary is greater than ₹50,000
const filterSalary=employees.filter((employee)=>{
    return employee.salary>50000;
});
console.log(filterSalary);
//3. Find Employee — find()
//Find the employee whose name is "Rahul".
const findEmp = employees.find((employee)=>{
    return employee.name==='Rahul';
});
console.log(findEmp);
//4. Check Employee — some()
//Check whether at least one employee earns more than ₹70,000.
const someEmp=employees.some((employee)=>{
    return employee.salary>70000;
});
console.log(someEmp);
//5. Salary Requirement — every()
//Check whether all employees earn at least ₹40,000.
const everyEmp=employees.every((employee)=>{
    return employee.salary>=40000;
});
console.log(everyEmp);
//6. Shopping Cart Total — reduce()
const cart = [
    { product: "Laptop", price: 50000, quantity: 1 },
    { product: "Mouse", price: 1000, quantity: 2 },
    { product: "Keyboard", price: 2000, quantity: 1 }
];
const total=cart.reduce((sum,item)=>{
    return sum+(item["price"]*item["quantity"]);
},0);
console.log(total);
//7. Passed Students — filter()
const students = [
    { name: "John", mark: 85 },
    { name: "Priya", mark: 45 },
    { name: "Rahul", mark: 72 },
    { name: "Arun", mark: 38 },
    { name: "Meena", mark: 91 }
];
