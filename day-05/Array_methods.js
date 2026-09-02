// //Array->storing collection of multiple items with single variable name
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr.length);//5
// console.log(arr['3']);//4
// console.log(arr[3]);//4
// console.log(arr['1'] === arr['01']);//numeric string keys 2===undefined
// let fruits = [];
// console.log(fruits.length);//0
// fruits.push("apple", "banana", "peach");
// console.log(fruits);//[ 'apple', 'banana', 'peach' ]
// console.log(fruits.join(", "));//apple, banana, peach
// console.log(fruits.length);//3
// fruits[5] = "mango";
// console.log(fruits);//[ 'apple', 'banana', 'peach', <2 empty items>, 'mango' ]--array structure
// console.log(Object.keys(fruits));//[ '0', '1', '2', '5' ]-3,4 indices are not declared in memory
// console.log(Object.values(fruits));//[ 'apple', 'banana', 'peach', undefined, undefined, 'mango' ]
// console.log(fruits.length);//6
// fruits.forEach((item, index) => { //value,key
//     console.log(`${index}: ${item}`)
// });//0: apple 1: banana 2: peach 3: undefined 4: undefined 5: mango
// //1.push()--add item at the end of array
// const numbers=[1, 2, 3, 4, 5];
// numbers.push(6, 7, 8);
// console.log("after push:", numbers);//[ 1, 2, 3, 4, 5, 6, 7, 8 ]
// //2.pop()--remove item from the end of array
// numbers.pop();
// console.log("after pop:", numbers);//[ 1, 2, 3, 4, 5, 6, 7 ]
// //3.unshift()--add item at the beginning of array
// numbers.unshift(0);
// console.log("after unshift:", numbers);//[ 0, 1, 2, 3, 4, 5, 6, 7 ]
// //4.shift()--remove item from the beginning of array
// numbers.shift();
// console.log("after shift:", numbers);//[ 1, 2, 3, 4, 5, 6, 7 ]
// //5.map()--create new array by performing operation on each item of array
// const doubledNumbers = numbers.map((num) => num * 2);//manipulate
// console.log("doubled numbers:", doubledNumbers);//[ 2, 4, 6, 8, 10, 12, 14 ]
// //6.filter()--create new array by filtering items based on condition
// const salaries = [40000, 60000, 45000, 70000];
// const res=salaries.filter((salary)=>{
//     return salary>=50000;
// });
// console.log("filtered salaries:", res); //filtered salaries: [ 60000, 70000 ]
// //7.reduce()--reduce array to single value by performing operation ex:add,sub,mult..
// const totalsalary=salaries.reduce((sum,num)=>{
//     return sum+num;
// },0);
// console.log("total salary:",totalsalary)//total salary: 215000
// //initially sum+num=>0+40000=>40000, 40000+60000=>100000, 100000+45000=>145000, 145000+70000=>215000
// //8.forEach()--perform operation on each item of array= no need to create new array
// salaries.forEach((salary)=>{
//     console.log("salary:",salary*2);
// });//salary: 80000,salary: 120000,salary: 90000,salary: 140000
// //difference between map and forEach
// //map-create new array
// //forEach-iterate over array and perform operation on each item
// console.log("salary",salaries);
// //9.find()--return first item that satisfies condition
// const foundSalary=salaries.find((salary)=>{
//     return salary>50000;
// });
// console.log("found salary:",foundSalary);//found salary: 60000//if nothing found=>undefined
// //10.findIndex()--return index of first item that satisfies condition
// const foundSalaryIndex=salaries.findIndex((salary)=>{
//     return salary>50000;
// });
// console.log("found salary index:",foundSalaryIndex);//found salary index: 1
// //11.findLast()--return last item that satisfies condition->last item not index
// const foundsalary=salaries.findLast((salary)=>{
//     return salary>50000;
// });
// console.log("found last salary:",foundsalary);//found salary: 70000
// //if we want to change the existing array
// console.log("Salary:",salaries);//Salary: [ 40000, 60000, 45000, 70000 ]
// salaries.forEach((salary, index) => {
//     salaries[index] = salary * 2;
// });

// console.log("Updated Salaries:", salaries);// Updated Salaries: [ 80000, 120000, 90000, 140000 ]
// //12.findLastIndex()->last matching element which satisfies condition
// const findlastsalary=salaries.findLastIndex((salary)=>{
//     return salary >= 110000;
// });
// console.log("findlastsalary:",findlastsalary);
// //13.some()->return true or false atlest one satisfies it returns true
// const somesalary = salaries.some((salary)=>{
//     return salary>=130000;
// });
// console.log("somesalary:",somesalary);
// //14.every()->return true or false all element should satisfies the consition
// const everysalary = salaries.every((salary)=>{
//     return salary>=130000;
// });
// console.log("everysalary:",everysalary);
// //15.includes()->returns true or false whether the element is present or not
// const skills = ["JavaScript", "Python", "SQL"];
// const checkinclude =skills.includes("Python")
// console.log("check using includes():",checkinclude);//true
// //16.indexOf()->return the index of first occurance
// const number = [10, 20, 30, 20];
// console.log("first Index:",number.indexOf(20));//1
// //17.lastIndexOf()->Returns the index of the last occurrence.
// console.log("last Index:",number.lastIndexOf(20));//3
// console.log("original num arr:",number);//[10,20,30,20]
// //18.slice()->Extracts part of an array without changing the original.
// const result = number.slice(1, 4);//1 to 4-1->1,2,3
// console.log("slice:",result);//slice: [ 20, 30, 20 ]
// number.splice(1,2)//(startindex,delcount)
// console.log("splice:",number);//[10,20]
// //add:
// number.splice(1, 0, 30);
// console.log(number);//[10,30,20]
// //replace:
// number.splice(1,1,23);
// console.log(number);//[10,23,20]
// //20.concat()->combine array
// const frontend = ["HTML", "CSS"];
// const backend = ["Node.js", "Python"];
// const skill = frontend.concat(backend);
// console.log(skill);//[ 'HTML', 'CSS', 'Node.js', 'Python' ]
// //21.join()->Converts array elements into a string.
// const joinres=skill.join("-");//'-'->seperator
// console.log("using join:",joinres);
// console.log(typeof(joinres));
// //22.sort() ->Sorts elements.
// console.log("original:",number);
// number.sort((a,b)=>{
//     return a-b;
// });
// //a-b=10-23=>-13(negative) no shift //[10,23,20]
// //a-b=23-20=>3(positive) swap //[10,20,23]
// //a-b=10-20=>(negative) no shift //[10,20,23]
// console.log("after sorting:",number);
// // sorting num=>string/lexicographic order(first character comparision)
// const newnum=[5,2,4,3,1];
// console.log(newnum.sort());//not same [10,5,30,2]=>[10,2,30,5]
// //23.reverse()->reverse the array
// console.log("original:",number);
// console.log("Reverse:",number.reverse());
// //24.toString()->convert arrray to string
// const fruitname = ["Apple", "Banana", "Mango"];
// console.log(fruitname.toString());//default seperator is ','
// console.log(typeof(fruitname));
// console.log(fruitname);
// const newfruitname=fruitname.join("-");
// console.log(newfruitname);
// console.log(typeof(newfruitname));
//Find Invoice Position of INV0003
const invoiceNumbers = [
  "INV001",
  "INV002",
  "INV003",
  "INV004"
];
const findindex=invoiceNumbers.findIndex((num)=>{
    return num==="INV003";
});
console.log(findindex);
console.log(invoiceNumbers.includes("INV003"));
const invoices = [   { invoiceNo: "INV001", amount: 15000, status: "PAID" },   { invoiceNo: "INV002", amount: 25000, status: "PENDING" },   { invoiceNo: "INV003", amount: 10000, status: "PAID" },   { invoiceNo: "INV004", amount: 30000, status: "REJECTED" } ];
invoices.forEach((invoice)=>{
    console.log(`${invoice.invoiceNo} - ${invoice.amount} - ${invoice.status}`);
})
