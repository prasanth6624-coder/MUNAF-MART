const searchInput = document.getElementById("searchInput");
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
