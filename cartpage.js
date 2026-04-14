document.addEventListener("DOMContentLoaded", function () {
    let cartItemsContainer = document.getElementById("cart-products");
    let totalContainer = document.getElementById("total-container");
    let totalPriceElement = document.getElementById("total-price");
    let checkoutBtn = document.getElementById("checkout-btn");
    let checkoutForm = document.getElementById("checkout-form");
    let confirmOrderBtn = document.getElementById("confirm-order");
    let orderConfirmation = document.getElementById("order-confirmation");
    let clearCartBtn = document.getElementById("clear-cart");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function displayCart() {
        cartItemsContainer.innerHTML = "";
        let total = 0;
    
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            totalPriceElement.textContent = "Total: Rs 0";
            return;
        }
    
        cart.forEach((item, index) => {
            let itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            itemDiv.innerHTML = `
                <img src="${item.image ? 'all-images/' + item.image : 'placeholder.jpg'}" alt="Product Image">
                <p>${item.name} - Rs ${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
    
            cartItemsContainer.appendChild(itemDiv);
            total += Number(item.price);
        });
    
        totalPriceElement.textContent = `Total: Rs ${total}`;
        totalContainer.style.display = "block";
    }
    
    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    };

    window.clearCart = function () {
        localStorage.removeItem("cart");
        cart = [];
        displayCart();
    };

    checkoutBtn.addEventListener("click", function () {
        checkoutForm.style.display = "block";
    });

    confirmOrderBtn.addEventListener("click", function() {
        orderConfirmation.style.display = "block";
        setTimeout(() => {
            orderConfirmation.style.display = "none";
            checkoutForm.style.display = "none";
            clearCart();
        }, 3000);
    });
    

    displayCart();
});
