const detailsContainer = document.querySelector(".tour-details");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const detailsUrl = "https://linnscape.com/wordpress/wp-json/wc/store/products/" + id;


async function getDetails(url){
    const response = await fetch(url);
    const product = await response.json();
    detailsContainer.innerHTML +=
    `<div class="tour">
        <h2>${product.name}</h2>
        <img class="tour-image" src="${product.images[0].src}">
        <div class="tour-info">
            <p>${product.description}</p>
            <div>Price: ${product.price}.- CHF</div>
            <div> Departure: ${product.time}</div>
            <div> Distance: ${product.distance}</div>
        </div>
        <button class="tour-button" data-tour="${product.id}">Book</button>
    </div>`
}

getDetails(detailsUrl);

const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.onclick = function(event) {
        const bookTour = toursArray.find(item => item.id === event.target.dataset.tour);
        cartArray.push(bookTour);
        showCart(cartArray);
        localStorage.setItem("cartList", JSON.stringify(cartArray));
    }
});

function showCart(cartItems) {
    cart.style.display = "flex";
    cartList.innerHTML = "";
    let total = 0;
    cartItems.forEach(function(cartElement) {
        total += cartElement.price;
        cartList.innerHTML += 
        `<div class="cart-item">
            <h3>${cartElement.name}</h3>
            <div class="product-price">${cartElement.price}</div>
        </div>
        `
    })
    totalContainer.innerHTML = `Total: ${total}`;
};
