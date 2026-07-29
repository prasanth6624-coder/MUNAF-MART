let cart = [];
let total = 0;

function updateCart() {
    document.getElementById("cartCount").innerText = cart.length;

    let list = "";

    cart.forEach(function(item, i) {
        list += `
            <p>
                ${item.name} - Rs.${item.price}
                <button onclick="removeFromCart(${i})">❌ Remove</button>
            </p>
        `;
    });

    document.getElementById("cartItems").innerHTML = list;
    document.getElementById("cartTotal").innerHTML = total;
}

function addToCart(productName, price) {
    cart.push({
        name: productName,
        price: price
    });

    total += price;
    updateCart();
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);

    updateCart();
}

function sendWhatsApp() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "🛒 MUNAF-MART Order\n\n";

    cart.forEach(function(item) {
        message += item.name + " - Rs." + item.price + "\n";
    });

    message += "\nTotal: Rs." + total;

    let url = "https://wa.me/94743709873?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}
