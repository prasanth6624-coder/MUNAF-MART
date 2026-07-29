const searchInput = document.getElementById("searchBox");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function () {
    const filter = searchInput.value.toLowerCase();

    cards.forEach(function (card) {
        const product = card.querySelector("h2").textContent.toLowerCase();

        if (product.includes(filter)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
let cart = [];

function addToCart(productName, price) {
    cart.push({
        name: productName,
        price: price
    });

    document.getElementById("cartCount").innerText = cart.length;

    let list = "";

    cart.forEach(function(item) {
        list += "<p>" + item.name + " - Rs." + item.price + "</p>";
    });

    document.getElementById("cartItems").innerHTML = list;
}
