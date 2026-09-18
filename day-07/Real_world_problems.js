//Problem 1 — User Login
function login(username, password) {
    return new Promise((resolve, reject) => {
        if (username === "admin" && password === 1234) {
            resolve("Login Successful")
        }
        else {
            reject("something went wrong")
        }
    })
}
async function result() {
    try {
        const res = await login("admin", 1234);
        console.log(res);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("all block completed");
    }
}
result();
//Problem 2 — Fetch User Details
function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User data fetched");
        }, 2000);
    })
}
async function fetchdetails() {
    console.log("Fetching user...")
    const res = await getUser();
    console.log(res);
}
fetchdetails();
//Problem 3 — Product Stock Check
function checkStock(product) {
    return new Promise((resolve,reject)=>{
        if(product==="Laptop" || product ==="Phone"){
            resolve(`${product} is available`)
        }
        else{
            reject("Product is out of stock")
        }
    })

}
async function status() {
    console.log("checking...")
    try {
        const res = await checkStock(
            "Laptop");
        console.log(res);

    }
    catch(error){
        console.log(error);
    }
} 
status();
//Problem 4 — Payment Processing
function makePaymant(amount){
    return new Promise((resolve,reject)=>{
        if(amount>0){
            resolve("payment successful")
        }
        else{
            reject("payment failed")
        }
    })
}
async function processPayment(){
    try{
        const res= await makePaymant(1000);
        console.log(res);
    }
    catch(error){
        console.log(error);
    }
}
processPayment();
