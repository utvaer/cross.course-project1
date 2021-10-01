//import { toursArray } from "./constants/toursList.js";
const productsContainer = document.querySelector(".products");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
let cartArray = [];

const baseUrl = "https://linnscape.com/wordpress/wp-json/wc/store/products/";

async function getTours(url){
    const response = await fetch(url);
    const products = await response.json();
    products.forEach(function(product) {
    productsContainer.innerHTML +=
    `<a href="details.html?id=${product.id}" class="tour">
        <h2>${product.name}</h2>
        <img class="tour-image" src="${product.images[0].src}">
    </a>`
    })
}

getTours(baseUrl);
