// Level 1 — Basic TypeScript
// 1. Employee Salary Calculator
// Store employee name, ID, basic salary.
// Calculate total salary with bonus.
// Use interface, number, string, function return types.
interface Product {
    name: string;
    price: number;
    quantity: number;
}

let product: Product = {
    name: "Laptop",
    price: 12000,
    quantity: 2
};

interface Discount extends Product {
    discount: number;
}

let discounts: Discount = {
    name: "Laptop",
    price: 12000,
    quantity: 2,
    discount: 20
};

let totalPrice: number = product.price * product.quantity;

console.log(totalPrice);
console.log(discounts.discount);
console.log(totalPrice * (discounts.discount / 100));