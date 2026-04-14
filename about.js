
const menuBtn = document.getElementById('menu-btn');
        const closeMenu = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });

        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });


        document.addEventListener("DOMContentLoaded", function () {
        const searchIcon = document.querySelector(".search-icon");
        const closeSearch = document.querySelector(".close-search");
        const topSearch = document.querySelector(".top-search");
        const header = document.querySelector(".header");

        // Show search bar and move header down
        searchIcon.addEventListener("click", function () {
            topSearch.style.display = "block";
            header.classList.add("header-move");
        });

        // Hide search bar and move header back up
        closeSearch.addEventListener("click", function () {
            topSearch.style.display = "none";
            header.classList.remove("header-move");
        });
    });


    document.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (window.scrollY > 50) {
            header.style.padding = "10px 20px"; 
        } else {
            header.style.padding = "15px 20px"; 
        }
    });


    document.addEventListener("DOMContentLoaded", function () {
        const searchIcon = document.querySelector(".search-icon");
        const closeSearch = document.querySelector(".close-search");
        const topSearch = document.querySelector(".top-search");

        // Show search bar (slide down)
        searchIcon.addEventListener("click", function () {
            topSearch.style.maxHeight = "100px"; 
            topSearch.style.opacity = "1";
            topSearch.style.visibility = "visible";
        });

        // Hide search bar (slide up)
        closeSearch.addEventListener("click", function () {
            topSearch.style.maxHeight = "0";
            topSearch.style.opacity = "0";
            topSearch.style.visibility = "hidden";
        });
    });


    document.getElementById("scrollTopBtn").addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    






// header bottom
let swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' +  "</span>";
        },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".nextArrowBtn",
      prevEl: ".prevArrowBtn",
    },
    breakpoints: {
        // when window width is >= 576px
        576: {
          slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
    },
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector(".news-form");
    let emailInput = form.querySelector("input");
    let submitButton = form.querySelector("button");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh

        let email = emailInput.value.trim();
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Simulate successful subscription
        alert("Thank you for subscribing!");
        emailInput.value = ""; // Clear input field after submission
    });

    function validateEmail(email) {
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
