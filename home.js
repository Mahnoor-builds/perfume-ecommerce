document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Mobile Menu Toggle ---
    const menuBtn = document.getElementById('menu-btn');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && closeMenu && mobileMenu) {
        menuBtn.addEventListener('click', () => mobileMenu.classList.add('active'));
        closeMenu.addEventListener('click', () => mobileMenu.classList.remove('active'));
    }

    // --- 2. Search Bar Dropdown ---
    const searchIcon = document.querySelector(".search-icon");
    const closeSearch = document.querySelector(".close-search");
    const topSearch = document.querySelector(".top-search");
    const header = document.querySelector(".header");

    if (searchIcon && closeSearch && topSearch) {
        // Show Search Bar
        searchIcon.addEventListener("click", () => {
            topSearch.style.display = "block";
            // Small timeout to allow display:block to render before transitioning opacity/height
            setTimeout(() => {
                topSearch.style.maxHeight = "100px"; 
                topSearch.style.opacity = "1";
                topSearch.style.visibility = "visible";
            }, 10);
            
            if (header) header.classList.add("header-move");
        });

        // Hide Search Bar
        closeSearch.addEventListener("click", () => {
            topSearch.style.maxHeight = "0";
            topSearch.style.opacity = "0";
            topSearch.style.visibility = "hidden";
            
            // Wait for transition to finish before setting display to none
            setTimeout(() => {
                topSearch.style.display = "none";
            }, 400); // Matches the CSS transition duration
            
            if (header) header.classList.remove("header-move");
        });
    }

    // --- 3. Header Scroll Effect ---
    window.addEventListener("scroll", () => {
        if (header) {
            header.style.padding = window.scrollY > 50 ? "10px 20px" : "15px 20px";
        }
    });

    // --- 4. Scroll to Top Button ---
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
    
    // --- 5. Initial Cart Count Sync ---
    const updateGlobalCartCount = () => {
        const cartCountElement = document.getElementById("cart-count");
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cartCountElement) {
            cartCountElement.textContent = cart.length;
        }
    };
    
    // Sync the cart number when the homepage loads
    updateGlobalCartCount();
});