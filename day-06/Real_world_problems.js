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


function makeAdder(x){
    return function(y){
        return x+y;
    };
}
const newop=makeAdder(2);
console.log(newop(1));