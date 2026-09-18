//error handling->try,catch,throw,finally
//used to handle the error
//try->the code part where the error came
// try {
//     let result = 10 / 0;
//     console.log(result);
// }
//catch->used to handle the error from try
try{
    let age=undefined;
    console.log(age.name);//TypeError
}
catch(error){
    console.log(error);

}
// const age = 15;//this throw an error
// if (age < 18) {
//     throw new Error("You are not eligible!");
// }
//example
try{
    let age=23;
    if(age<=18){
        throw new Error("not eligible");//throw new error
    }
    console.log("eligible");//eligible
}
catch(error){
    console.log(error);
}
finally{
    console.log("Completed")//completed
}
//Another Example
function withdraw(amount) {
    try{
    if (amount <= 0) {
        throw new Error("Invalid amount");//Error: Invalid amount
    }

    console.log("Withdrawal successful");
} catch(error){
    console.log(error);
}
}
withdraw(0);
//Example using promise,async,await,error handling
function login(username,password){
    return new Promise((resolve,reject)=>{
        if(username==="admin" && password===1234){
            resolve("Login Successful")
        }
        else{
            reject("something went wrong")
        }
    })
}
async function result(){
    try{
    const res= await login("admin",1234);
    console.log(res);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("all block completed");
    }
}
result();
