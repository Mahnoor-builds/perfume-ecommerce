document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    
    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let cartIcon = document.getElementById("cart-count");
        cartIcon.textContent = cart.length; 
    }
    

    
    function addToCart(name, price, image) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let product = { name, price, image };  
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
    }
    
    
    let addbuttons = document.querySelectorAll(".add-to-cart");
    addbuttons.forEach(button => {
        button.addEventListener("click", function() {
            let name = this.getAttribute("data-name");
            let price = this.getAttribute("data-price");
            let image = this.getAttribute("data-image"); 
    
            addToCart(name, price, image);
        });
    });
    

});

const menuBtn = document.getElementById('menu-btn');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && closeMenu && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".search-icon");
    const closeSearch = document.querySelector(".close-search");
    const topSearch = document.querySelector(".top-search");
    const header = document.querySelector(".header");

    if (searchIcon && closeSearch && topSearch && header) {
        searchIcon.addEventListener("click", function () {
            topSearch.style.display = "block";
            header.classList.add("header-move");
        });

        closeSearch.addEventListener("click", function () {
            topSearch.style.display = "none";
            header.classList.remove("header-move");
        });
    }
});


document.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (header) {
        if (window.scrollY > 50) {
            header.style.padding = "10px 20px"; 
        } else {
            header.style.padding = "15px 20px"; 
        }
    }
});


let scrollTopBtn = document.getElementById("scrollTopBtn");
if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
