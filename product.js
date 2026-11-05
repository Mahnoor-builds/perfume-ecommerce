document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Cart Logic ---
    const cartCountElement = document.getElementById("cart-count");

    // Helper function to update the badge
    const updateCartCount = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cartCountElement) {
            cartCountElement.textContent = cart.length;
        }
    };

    // Helper function to add item and save to storage
    const addToCart = (name, price, image) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ name, price, image });
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        
        // Optional visual feedback for the user
        alert(`Added ${name} to your cart!`);
    };

    // Attach click events to all cart buttons
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            const { name, price, image } = this.dataset;
            addToCart(name, price, image);
        });
    });

    // Initialize cart count on page load
    updateCartCount();


    // --- 2. Mobile Menu Toggle ---
    const menuBtn = document.getElementById('menu-btn');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && closeMenu && mobileMenu) {
        menuBtn.addEventListener('click', () => mobileMenu.classList.add('active'));
        closeMenu.addEventListener('click', () => mobileMenu.classList.remove('active'));
    }


    // --- 3. Search Bar Toggle ---
    const searchIcon = document.querySelector(".search-icon");
    const closeSearch = document.querySelector(".close-search");
    const topSearch = document.querySelector(".top-search");
    const header = document.querySelector(".header");

    if (searchIcon && closeSearch && topSearch && header) {
        searchIcon.addEventListener("click", () => {
            topSearch.style.display = "block";
            header.classList.add("header-move");
        });

        closeSearch.addEventListener("click", () => {
            topSearch.style.display = "none";
            header.classList.remove("header-move");
        });
    }


    // --- 4. Header Scroll Effect ---
    window.addEventListener("scroll", () => {
        if (header) {
            header.style.padding = window.scrollY > 50 ? "10px 20px" : "15px 20px";
        }
    });


    // --- 5. Scroll to Top Button ---
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});