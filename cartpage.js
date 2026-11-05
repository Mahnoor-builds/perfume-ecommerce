document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById("cart-products");
    const totalContainer = document.getElementById("total-container");
    const totalPriceElement = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");
    const checkoutForm = document.getElementById("checkout-form");
    const confirmOrderBtn = document.getElementById("confirm-order");
    const orderConfirmation = document.getElementById("order-confirmation");
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Sync global cart bubble from home.js if it exists
    const syncGlobalCartBadge = () => {
        const cartBadge = document.getElementById("cart-count");
        if (cartBadge) cartBadge.textContent = cart.length;
    };

    const displayCart = () => {
        cartItemsContainer.innerHTML = "";
        let total = 0;
    
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p style='color: white; font-size: 18px;'>Your cart is empty.</p>";
            totalPriceElement.textContent = "Total: Rs 0";
            totalContainer.style.display = "none";
            checkoutBtn.style.display = "none";
            document.getElementById("clear-cart").style.display = "none";
            return;
        }
    
        cart.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            itemDiv.innerHTML = `
                <img src="${item.image ? 'all-images/' + item.image : 'placeholder.jpg'}" alt="${item.name}">
                <p>${item.name} - Rs ${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
    
            cartItemsContainer.appendChild(itemDiv);
            total += Number(item.price);
        });
    
        totalPriceElement.textContent = `Total: Rs ${total}`;
        totalContainer.style.display = "block";
        checkoutBtn.style.display = "inline-block";
        document.getElementById("clear-cart").style.display = "inline-block";
    };
    
    window.removeFromCart = (index) => {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        syncGlobalCartBadge();
        displayCart();
    };

    window.clearCart = () => {
        localStorage.removeItem("cart");
        cart = [];
        syncGlobalCartBadge();
        displayCart();
    };

    if (document.getElementById("clear-cart")) {
        document.getElementById("clear-cart").addEventListener("click", window.clearCart);
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            checkoutForm.style.display = "block";
            checkoutForm.scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (confirmOrderBtn) {
        confirmOrderBtn.addEventListener("click", () => {
            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;
            
            // Basic validation
            if (!name || !phone) {
                alert("Please fill out your name and phone number.");
                return;
            }

            orderConfirmation.style.display = "block";
            setTimeout(() => {
                orderConfirmation.style.display = "none";
                checkoutForm.style.display = "none";
                window.clearCart();
            }, 3000);
        });
    }

    // Initialize UI
    displayCart();
});