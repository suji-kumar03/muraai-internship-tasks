//Math.abs->absolute value(positive val only)
function difference(a,b){
    return Math.abs(a-b);
}
console.log(difference(2,5));
//Math.floor
console.log(Math.floor(6.23));
console.log(Math.floor(6.9));
console.log(Math.floor(6.99));
//Math.ceil
console.log(Math.ceil(6.23));
console.log(Math.ceil(6.9));
console.log(Math.ceil(6.1));
//Math.exp()->e^x approx-2.718
console.log(Math.exp(0));
console.log(Math.exp(1));
console.log(Math.exp(-1));
console.log(Math.exp(2));
//Math.min()
console.log(Math.min(4,0,-1))
//Math.max()
console.log(Math.max(3,0,1));
//Math.fround()->32-bit single precision float representation of doubleFloat
console.log(Math.fround(-5.3));
console.log(Math.fround(5.5));
console.log(Math.fround(6));
console.log(Math.fround(5.03));
console.log(Math.fround(6.23));
//Math.random()->0 to 1
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(3));
console.log(getRandomInt(1));
console.log(Math.random());
//Math.round()->round off the value
console.log(Math.round(0.9));
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
//Math.pow->power
console.log(Math.pow(7, 3));//7 power 3
console.log(Math.pow(4, 0.5));// sqrt(4)
console.log(Math.pow(7, -2));//1/49
console.log(Math.pow(-7, 0.5));//Nan
//Math.sqrt
console.log(Math.sqrt(-1)); // Nan
console.log(Math.sqrt(-0)); // -0
console.log(Math.sqrt(0)); // 0
console.log(Math.sqrt(1)); // 1
console.log(Math.sqrt(2)); // 1.414213562373095
console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(Infinity)); // Infinity