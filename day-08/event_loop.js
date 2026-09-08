//event loop,hoisting,TDZ,DOM events,Math,Date
//event loop->manage multiple piece of code,includes asynchronous ->timers,callbacks,promises.
//single threaded->without blocking main chain
//js-normally synchronous (step by step)
//Ex:
console.log("step 1");
console.log("step 2");
console.log("step 3");
//web API,call stack(synchronous),task queue(setTimeout)
//when the call stack empty then only the func from task queue move into call stack
console.log("start");
setTimeout(() => {
    console.log("setTimeout")//start,end,setTimeout
}, 0);
console.log("end");
//Another Example
console.log("start1");
setTimeout(() => {
    console.log("setTimeout 1st")//start1,end1,setTimeout 3rd,setTimeout 2nd,setTimeout 1st
}, 4000);
setTimeout(() => {
    console.log("setTimeout 2nd")
}, 2000);
setTimeout(() => {
    console.log("setTimeout 3rd")
}, 1000);
console.log("end1");
//setTimeout and promises
//microtask queue and macrotask queue
console.log("start2");
setTimeout(() => {
    console.log("Macrotask");//start2,end2,Microtask,Macrotask
},0)
Promise.resolve().then(() => { console.log("Microtask") })
console.log("end2");