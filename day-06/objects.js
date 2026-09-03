//Object is a collection of properties(key(property),value)
const obj = {
  property1: "value1", //variable,identifier
  2: "value2",//number
  "property n": "value3", //string
};
console.log(obj.property1);//value1
console.log(obj[2]);//value2
console.log(obj['2']);//value2
console.log(obj["property n"]);//value3
//nested
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
console.log(myHonda.engine.cylinders);
console.log(myHonda.engine.size);
//add,replace property
const employee = {
    name: "Priya",
    age: 22,
    department: "IT",
    salary: 50000
};
console.log(employee);
employee["city"]="Bangalore";//add property
console.log(employee);
employee["salary"]=55000;//replace property
console.log(employee);
//this->reference to the current object
const new_employee = {
    name: "Priya",
    greet: function() {//function inside the obj=method
        console.log("Hello " + this.name);//Hello Priya
        console.log("Hello " + new_employee.name);//Hello Priya
    }
};
new_employee.greet();
//diff:new_employee.name=>name of the object
//this.name=>who calls this method that object
//using in diff object
const emp1={
    name:"Priya",
    age:22,
    greet:function(){
        return("Hello "+this.name);//refers to Priya
    }
};
const emp2={
    name:"Rahul",
    age:30,
    greet:emp1.greet//refers to Rahul
};
//Same function but the obj is different then we used this keyword
console.log(emp1);//{ name: 'Priya', age: 22, greet: [Function: greet] }
console.log(emp1.greet());//Hello Priya
console.log(emp2);//{ name: 'Rahul', age: 30, greet: [Function: greet] }
console.log(emp2.greet());//Hello Rahul
//Example
const cart = {
    product: "Laptop",
    price: 50000,
    quantity: 2,

    total: function() {
        return this.price * this.quantity;//current obj value
    }
};
console.log(cart.total());//100000
//Function context
function getThis() {
  return this;//refer obj1
}
// console.log(getThis());

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;//obj1={name:"obj1",getThis : function getThis() {return this;} }
//obj1.getThis = getThis();-->execute 
obj2.getThis = getThis;//obj1={name:"obj1",getThis : function getThis() {return this;} }
console.log(obj1);//{ name: 'obj1', getThis: [Function: getThis] }
console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }



// const ages = { alice: 18, bob: 27 };
// console.log(Object.keys(ages));
// console.log(Object.values(ages));

// function hasPerson(name) {
//   return name in ages;
// }

// function getAge(name) {
//   return ages[name];
// }
//in returns true or false
// console.log(hasPerson("hasOwnProperty"));
// console.log(hasPerson("toString"));  // true (JavaScript inherited properties check)-->inherit from its prototype
// //prototype=>like a parent obj inherit properties from parent obj
// console.log(getAge("hasOwnProperty"));
// console.log(getAge("toString")); // [Function: toString]->it is a function