//Promises, async/await, error handling

//Promise->handle the future success/failure of asynchronous operation
//asynchronous operation->that runs without blocking the execution of other code while waiting for its result.
console.log("Start");
setTimeout(() => { //setTimeout(function,Time=>3000 milli second)
    console.log("Hi");  //op:start,end,Hi
}, 3000);
console.log("End");//js doesn't wait
//Ex:any operations that takes time later
let promise = new Promise((resolve, reject) => {//resolve.,reject=>call back func
    let res = true; //new->keywod,Promise obj stores it in promise
    if (res) {
        resolve()
    }
    else {
        reject()
    }
});
promise.then(success)
    .catch(failure)
function success() {
    console.log("success");
}
function failure() {
    console.log("Failure");
}
//using setTimeout-promise=execute the setTimeout function late
console.log("Start");
const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello");//promise handle this asynchronous task
    }, 3000);
});
getData.then((data) => {//the res from asynchronous operation ,execute in this func
    console.log(data);
});
console.log("End");
//Example
let Login = new Promise((resolve, reject) => {
    let loggedIn = true;
    if (loggedIn) {
        resolve("Login Successfully");
    }
    else {
        reject("Something went wrong");
    }
})
Login.then((data) => {
    console.log(data);//Login Successfully

})
    .catch((data) => {
        console.log(data);
    })
//Another->function define
function new_login() {
    return new Promise((resolve, reject) => {
        let loggedIn = true;
        if (loggedIn) {
            resolve("Login Successfully");
        }
        else {
            reject("Something went wrong");
        }
    })
}
new_login().then((data) => {
    console.log("using function", data);
})
    .catch((data) => {
        console.log("using function", data);
    })
//promise chaining
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
    }, 3000);
});

myPromise
    .then((data) => { return (`${data} 1st`) })// foo 1st
    .then((data1) => { return (`${data1} 2nd`) })// foo 1st 2nd
    .then((data2) => { return (`${data2} 3rd`) })// foo 1st 2nd 3rd
    .then((res) => { console.log(res) });//foo 1st 2nd 3rd
//Example
const promiseA = new Promise((resolve, reject) => {
    resolve(777);
});
promiseA.then((val) => console.log("asynchronous logging has val:", val))
    .catch(() => { console.log("nothing happened", val) })
console.log("immediate logging");// immediate logging // asynchronous logging has val: 777
//async/await=>keyword async-> before func declaration ,await->inside the func body
const ngetData = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Data received!");
    }, 2000);

});
//instead of this .then and .catch
// ngetData.then((data)=>{
//     console.log(data)
// })
//use async and await (await placed inside async)
//async-function works with Promise
//awiat-wait for Promise result
async function displayData() {
    const result = await ngetData;
    console.log(result); //Data received
}
displayData();
//Example

function newlogin() {
    return new Promise((resolve) => {
        resolve(10);
    })
}
async function asynfunc() {
    const res = await newlogin();
    console.log(res);//10 // return (res)->Promise { <pending> }//immediately  promise didn't return 
}
asynfunc();

