//get Date-->out of date=>undefined
var date= new Date();
console.log(date.getDate());
//get Day->1,2,3...
var date= new Date();
console.log(date.getDay());
//toString()
const str=new Date(8.64e15).toString(); //IST
console.log(str);
console.log(typeof(str));
console.log(new Date(2024, 2, 10, 2, 30).toString());//year,month(jan-0,feb-1,...),date,2:30 AM
//update month
const event = new Date("August 19, 1975 23:15:30");
event.setMonth(3);
console.log(event.getMonth());
console.log(event);
//update year,setMinutes,setSeconds,
const event1 = new Date("August 19, 1975 23:15:30");
event1.setFullYear(2003);
console.log(event1.getFullYear());
console.log(event1);