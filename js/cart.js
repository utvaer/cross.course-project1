const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

let total = 0;

cartItems.forEach(function(cartElement){
    total += cartElement.price;
    cartContainer.innerHTML +=
    `<div class="cart-item">
        <h3>${cartElement.name}</h3>
        <div class="product-price">${cartElement.price}.-</div>
    </div>
    `    
})
totalContainer.innerHTML = `Total: ${total}`;


