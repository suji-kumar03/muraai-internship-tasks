const products = [
    { name: "Milk", description: "Fresh Dairy Milk", price: 60, category: "grocery", image: "./assets/images (1).jpeg" },
    { name: "Chips", description: "Crunchy Potato Chips", price: 40, category: "grocery", image: "./assets/images (2).jpeg" },
    { name: "Apple", description: "Fresh Red Apple", price: 120, category: "grocery", image: "./assets/images (3).jpeg" },
    { name: "Makhana", description: "80 g", price: 99, category: "grocery", image: "./assets/images (4).jpeg" },
    { name: "Mozzarella Cheese", description: "200 g", price: 180, category: "grocery", image: "./assets/images (5).jpeg" },

    { name: "Burger", description: "Fresh Chicken Burger", price: 180, category: "food", image: "./assets/images.jpeg" },
    { name: "BBQ Chicken Wings", description: "6 pcs", price: 189, category: "food", image: "./assets/ET5B3839.jpeg" },
    { name: "Pizza", description: "Cheesy Veg Pizza", price: 220, category: "food", image: "./assets/download.jpeg" },
    { name: "Manchurian Gravy Bowl with Fried Rice", description: "Combo Box", price: 179, category: "food", image: "./assets/download (1).jpeg" },
    { name: "Spicy Kadhai Chicken with 2 Butter Naan", description: "Combo Box", price: 240, category: "food", image: "./assets/download (2).jpeg" }
];

const grocery = document.getElementById("grocery-items");
const food = document.getElementById("food-items");
const search = document.getElementById("search-input");
const buttons = document.querySelectorAll("[data-category]");
const cartBox = document.getElementById("cart-container");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const orderBtn = document.getElementById("order-btn");
let cart = [];//initially empty
let category = "all";//initially it shows all
function displayProducts(list) { //list= parameter
    grocery.innerHTML = ""; //each time clear the products and display->if not duplicates will create
    food.innerHTML = "";
    list.forEach((product) => {
        const card = document.createElement("div");//new element(tag)=>div
        card.className = "food-card";
        card.innerHTML = `
            <div class="food-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="food-details">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="food-price">₹${product.price}</div>
                <button class="add-btn" data-name="${product.name}">
                    ADD
                </button>
            </div>
            
        `;//custom data attribute // access of data-name: event.target.dataset.name ex:<button class="add-btn" data-name="milk">
         //const name=document.getElementByClassName("add-btn")=>name.addEventListener("click",(event)=>{ console.log(event.target.dataset.name)})

        if (product.category === "grocery")
            grocery.appendChild(card);// new create element card(element) add into grocery(element)=end
        //prepend() → beginning add
        else
            food.appendChild(card);
    });
    grocery.style.display = category === "food" ? "none" : "grid";//in grocery,food=>none,else=>display
    food.style.display = category === "grocery" ? "none" : "grid";//in food,grocery=>none,else=>display
}
function filterProducts() {
    const text = search.value.toLowerCase();//variable.value and .target=>triggerd element ex:apple
    const result = products.filter((product) =>

        (category === "all" || product.category === category) && //category= all(grocery or food)
        product.name.toLowerCase().includes(text) //apple.include(apple)=>true
    );
    displayProducts(result);
}
//buttons like all,grocery or food
buttons.forEach((button) => { //food click
    button.addEventListener("click", () => {
        category = button.dataset.category;//food
        filterProducts();//product.category === category=>food===food(true)
    });
});
search.addEventListener("input", filterProducts);//each time filter ex:a,ap,app...
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-btn")) { //ex:apple->click
        const name = event.target.dataset.name;//apple
        const product = products.find(
            (item) => item.name === name //apple===apple ,product=>apple obj
        );
        const item = cart.find( //initially empty->cart=>entire apple obj
            (item) => item.name === name // apple already exists check
        );
        if (item)
            item.quantity++;
        else
            cart.push({ ...product, quantity: 1 });//spread operator->copy of apple obj

        updateCart();
    }
//Remove
    if (event.target.classList.contains("remove-btn")) {

        cart.splice(event.target.dataset.index, 1);//gets the val and remove that count

        updateCart();
    }
});
//update
function updateCart() {
    cartBox.innerHTML = ""; //cart container
    let total = 0;
    let count = 0;
    cart.forEach((item, index) => { //added apple obj=>val,index
        total += item.price * item.quantity;
        count += item.quantity;
        cartBox.innerHTML += `
            <div class="cart-item">

                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>

                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>₹${item.price}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Subtotal: ₹${item.price * item.quantity}</p>
                </div>

                <button class="remove-btn" data-index="${index}">
                    Remove
                </button>

            </div>
        `;
    });
    if (cart.length === 0)
        cartBox.innerHTML = "<p>Your cart is empty.</p>";
    cartCount.textContent = count;//update the value
    cartTotal.textContent = total;
}
//  Order
orderBtn.addEventListener("click", () => {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("🎉 Order placed successfully!");

    cart = []; // again cart is empty and update

    updateCart();
});


// strating display

filterProducts();

