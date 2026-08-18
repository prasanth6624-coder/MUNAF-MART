/* ================================
   MUNAF-MART - SCRIPT
   ================================ */

let cart = [];
let total = 0;


/* ================================
   ADD TO CART
   ================================ */

function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    total += price;

    updateCart();

    alert(productName + " added to cart! 🛒");
}


/* ================================
   UPDATE CART
   ================================ */

function updateCart() {

    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    if (!cartItems || !cartTotal) {
        return;
    }

    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

        cartTotal.textContent = "0";

        return;
    }


    let html = "";

    cart.forEach(function(item, index) {

        html += `
            <div class="cart-item">
                <span>
                    ${item.name} - Rs. ${item.price}
                </span>

                <button onclick="removeFromCart(${index})">
                    ❌
                </button>
            </div>
        `;

    });


    cartItems.innerHTML = html;

    cartTotal.textContent = total;
}


/* ================================
   REMOVE FROM CART
   ================================ */

function removeFromCart(index) {

    total -= cart[index].price;

    cart.splice(index, 1);

    updateCart();
}


/* ================================
   SEARCH PRODUCTS
   ================================ */

function searchProducts() {

    const searchInput =
        document.getElementById("searchInput");

    const productCards =
        document.querySelectorAll(".product-card");

    if (!searchInput) {
        return;
    }

    const searchText =
        searchInput.value.toLowerCase();


    productCards.forEach(function(card) {

        const productName =
            card.querySelector("h3");

        if (!productName) {
            return;
        }

        const name =
            productName.textContent.toLowerCase();


        if (name.includes(searchText)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });
}


/* ================================
   WHATSAPP ORDER
   ================================ */

function sendWhatsApp() {

    if (cart.length === 0) {

        alert("Your cart is empty. Please add products first. 🛒");

        return;
    }


    let message =
        "🛒 *MUNAF-MART ORDER*%0A%0A";


    cart.forEach(function(item, index) {

        message +=
            `${index + 1}. ${item.name} - Rs. ${item.price}%0A`;

    });


    message +=
        `%0A💰 *Total: Rs. ${total}*%0A%0A`;

    message +=
        "Thank you for ordering from MUNAF-MART!";


    /*
       IMPORTANT:
       இங்கே உங்கள் WhatsApp number
       country code உடன் போட வேண்டும்.

       உதாரணம்:
       Sri Lanka → 947XXXXXXXX

       கீழே உள்ள YOUR_NUMBER-ஐ
       உங்கள் WhatsApp number-ஆல் மாற்ற வேண்டும்.
    */

    const phoneNumber = "YOUR_NUMBER";


    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        message;


    window.open(
        whatsappURL,
        "_blank"
    );
}


/* ================================
   PAGE LOAD
   ================================ */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateCart();

    }
);