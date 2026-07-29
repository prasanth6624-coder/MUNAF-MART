let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({
        name: productName,
        price: price
    });

    document.getElementById("cartCount").innerText = cart.length;

    let list = "";

    cart.forEach(function(item) {
        list += `<p>${item.name} - Rs.${item.price}</p>`;
    });

    document.getElementById("cartItems").innerHTML = list;
}
