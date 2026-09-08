//Promise(pending,fulfilled,rejection)
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(10)
    }, 1000)
})
promise.then((data) => console.log("resolve", data))
//Promise.all waits for all fulfillments (or the first rejection)
//can accept normal values and follows the order
const promise1 = Promise.resolve(10);
const promise2 = new Promise((resolve) => {
    setTimeout(resolve, 3000, "foo")
})
const promise3 = 20;
Promise.all([promise1, promise3, promise2]).then((data) => {
    console.log(data);//[ 10, 20, 'foo' ]
})
//using async and await
//using promise
const new_promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(10)
    }, 1000)
})
async function output() {
    const res = await new_promise;
    console.log(res);
}
output();
//using promise.all() with async and await
const new_promise1 = Promise.resolve(40);
const new_promise2 = new Promise((resolve) => {
    setTimeout(resolve, 3000, "Bye")
})
const new_promise3 = 50;
Promise.all([new_promise1, new_promise2, new_promise3]).then((data) => {
    console.log(data);//[ 40, 'Bye', 50 ]
})
//using promise.any()=>ANY ONE must succeed
const promise21 = Promise.reject("error");
const promise22 = new Promise((resolve) => setTimeout(resolve, 1000, "slow"));
const promise23 = new Promise((resolve) => setTimeout(resolve, 500, "quick"));
Promise.any([promise21, promise23, promise22]).then((value) => console.log(value));//quick
//Promise.race()=>fast it may be reject or resolve
const promise31 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise32 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise31, promise32]).then((value) => {
  console.log(value);//two
});
//Diff with race and any
const promised41 = Promise.reject("ERROR");
const promised42 = new Promise((resolve) => {
    setTimeout(resolve, 100, "quick");
});
Promise.race([promised41, promised42])
    .then(console.log)//ERROR=>first completed
    .catch(console.log);
//Promise.allSettled=> single value=>everyone finish then shows the result
const promise51 = Promise.resolve(3);
const promise52 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo"),
);
const promises = [promise51, promise52];

Promise.allSettled(promises).then((results) =>
    console.log(results)
//   results.forEach((result) => console.log(result.status)),
);



