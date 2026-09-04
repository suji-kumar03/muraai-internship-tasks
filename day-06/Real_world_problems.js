//Problem 1 — Employee Greeting (this)
//Create one common greet function and attach it to both objects.
const employee1 = {
    name: "Priya",
    role: "Developer",
    greet: function(){
        return "Hello "+ this.name+",  you are a "+this.role;
    }
};

const employee2 = {
    name: "Rahul",
    role: "Tester",
    greet:employee1.greet
};
console.log(employee1.greet());
console.log(employee2.greet());
//Problem 2 — Bank Account (this)
//Create methods:
//deposit(amount) → balance increase
//withdraw(amount) → balance decrease
//checkBalance() → current balance display
const account = {
    owner: "Suji",
    balance: 10000,
    deposit: function(dep_amount){
        this.balance=this.balance+dep_amount;
        return "Deposited: "+dep_amount;

    },
    withdrawn: function(withdraw_amount){
        this.balance=this.balance-withdraw_amount;
        return "Withdrawn: "+withdraw_amount;
    },
    current_balance:function(){
        return "Current Balance: "+this.balance;
    }
};
console.log(account.deposit(2000));
console.log(account.withdrawn(3000));
console.log(account.current_balance());
//Problem 3 — Shopping Cart (this)
//Total price
const cart = {
    product: "Laptop",
    price: 50000,
    quantity: 3,
    totalPrice: function(){
        return "Total Price: "+(this.quantity*this.price);
    }
};
console.log(cart.totalPrice());
//Problem 4 — Private Counter (Closure)
//It should return a function.
function createCounter(){
    let count=0;
    return function(){
        count++;
        console.log(count);
    }
}
const Counter = createCounter();
Counter();
Counter();

function makeAdder(x){
    return function(y){
        return x+y;
    };
}
const newop=makeAdder(2);
console.log(newop(1));
//Problem 5 — User Login Attempts (Closure)
//Every time the returned function is called, it should increase the login attempt count.
function createLoginTracker(){
    let count=0;
    return function(){
        count++;
        return (count);
    }
}
const tracker=createLoginTracker();
console.log(tracker());
console.log(tracker());
console.log(tracker());
//Problem 6 — Employee Performance
//Performance: 80%
//Formula:tasksCompleted / totalTasks × 100
const employee = {
    name: "Priya",
    tasksCompleted: 8,
    totalTasks: 10,
    performance:function(){
        return "Performance:"+((this.tasksCompleted/this.totalTasks)*100)+"%";
    }
};
console.log(employee.performance());
//Problem 7 — Product Objects + Common Function
const product1={
    name:"Laptop",
    price:50000,
    costs:function(){
        return this.name+" costs "+this.price;
    }
};
const product2={
    name:"Phone",
    price:30000,
    costs:product1.costs
};
const product3={
    name:"Tablet",
    price:20000,
    costs:product1.costs
};
console.log(product1.costs());
console.log(product2.costs());
console.log(product3.costs());
//Problem 8 — Employee Salary Increment
const employee01 = {
    name: "Priya",
    salary: 40000,
    increaseSalary:function(percentage){
        this.salary=this.salary+(percentage*100);
        // this.salary=this.salary+op;
        return this.salary
    }
};

const employee02 = {
    name: "Rahul",
    salary: 50000
};
console.log(employee01.increaseSalary(10))