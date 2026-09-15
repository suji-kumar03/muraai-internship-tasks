"use strict";
let product = {
    name: "Laptop",
    price: 12000,
    quantity: 2
};
let discounts = {
    name: "Laptop",
    price: 12000,
    quantity: 2,
    discount: 20
};
let totalPrice = product.price * product.quantity;
console.log(totalPrice);
console.log(discounts.discount);
console.log(totalPrice * (discounts.discount / 100));
