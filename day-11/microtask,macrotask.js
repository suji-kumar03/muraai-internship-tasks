//event loop->decides when queued callbacks can be moved onto the call stack.
//JavaScript is generally single-threaded.->execute single piece of code
console.log("One");
console.log("Two");
console.log("Three");
//Microtask has higher priority as compared to macrotask
//web API,call stack,task queue
console.log("A");
setTimeout(()=>{
    console.log("macrotask");//event loop processes pending microtasks
},0)
Promise.resolve().then(()=>{
    console.log("microtask")
})
console.log("D") //A,D,microtask,macrotask
//Macrotask queue=>setTimeout,setInterval,DOM events like click,keydown..
// setTimeout(()=>{
//     console.log("macrotask");
// },0)
//Microtask Queue=>more priority->Promise.then(),Promise.catch(),queueMicrotask(),MutationObserver
// Promise.resolve().then(()=>{
//     console.log("microtask")
// })
//Another Example
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

queueMicrotask(() => {
  console.log("D");
});

console.log("E"); //A,E,C,D,B
//more microtask
Promise.resolve().then(() => {
  console.log("A");

  Promise.resolve().then(() => {
    console.log("B");
  });
});

Promise.resolve().then(() => {
  console.log("C");
}); //ACB
//Example with dom
const button=document.getElementById("btn")
console.log("A");
setTimeout(()=>{
    console.log("B")
})
button.addEventListener("click",()=>console.log("c"))//macrotask
Promise.resolve().then(() => {
  console.log("D");
});
console.log("E") //AEDBC
