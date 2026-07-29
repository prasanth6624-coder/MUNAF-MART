let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({
        name: productName,
        price: price
    });
    total += price;

    document.getElementById("cartCount").innerText = cart.length;

    let list = "";

    cart.forEach(function(item) {
        list += `<p>${item.name} - Rs.${item.price}</p>`;
    });

    document.getElementById("cartItems").innerHTML = list;
}
    document.getElementById("cartTotal").innerText = total;
function sendWhatsApp() {

    let message = "🛒 MUNAF-MART Order\n\n";

    cart.forEach(function(item) {
        message += item.name + " - Rs." + item.price + "\n";
    });

    message += "\nTotal: Rs." + total;

    let url = "https://wa.me/94743709873?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}
