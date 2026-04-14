const blogPosts = {
    floral: {
        title: "The Elegance of Floral Notes",
        subtitle: "Unravel the beauty of floral perfumes and their timeless appeal.",
        image: "all-images/img1.jpg",
        text: "Floral fragrances have been loved for centuries, bringing a sense of elegance and sophistication. The classic combination of roses, jasmine, and lilies creates a harmonious scent that feels timeless.",
        why: "Floral perfumes are perfect for those who enjoy soft, romantic scents. They are often associated with femininity and elegance, making them great for everyday wear or special occasions.",
        how: "These perfumes blend fresh flower extracts like rose, jasmine, and gardenia with hints of citrus or musk to create a balanced aroma. Some perfumes also use synthetic floral compounds to enhance the longevity of the scent.",
        conclusion: "Floral perfumes remain a timeless favorite, loved for their soft, delicate, and elegant scents."
    },
    layering: {
        title: "How to Layer Your Fragrances",
        subtitle: "Master the art of mixing scents to create a signature fragrance.",
        image: "all-images/img2.jpg",
        text: "Layering perfumes is an art that allows you to create a personalized scent. By combining top, middle, and base notes from different perfumes, you can achieve a unique and long-lasting fragrance.",
        why: "Layering fragrances helps create a custom scent that stands out. It also enhances the longevity of your perfume throughout the day.",
        how: "Start with a base scent like vanilla or musk, then add a middle note such as floral or fruity fragrances. Finally, top it off with a fresh or spicy note for a balanced and dynamic scent.",
        conclusion: "With the right layering technique, you can transform your fragrance game and create a signature scent that lasts all day."
    },
    trends: {
        title: "Perfume Trends of 2024",
        subtitle: "Stay ahead with the newest and most captivating fragrances.",
        image: "all-images/vintage.jpg",
        text: "From sustainable ingredients to bold, unconventional scents, the perfume industry is evolving. This year’s trends focus on eco-friendly formulations and unique combinations like spicy florals and fresh citrus blends.",
        why: "Consumers are increasingly looking for natural, sustainable perfumes. Eco-conscious brands are gaining popularity, making it important to stay updated on trends.",
        how: "Perfume brands now incorporate organic ingredients and biodegradable packaging to align with the growing demand for sustainable luxury.",
        conclusion: "As we move forward, expect to see more natural, experimental, and gender-neutral fragrances hitting the market."
    },
    choosing: {
        title: "Choosing the Perfect Perfume",
        subtitle: "A guide to selecting a fragrance that matches your personality.",
        image: "all-images/perfume.jpg",
        text: "Selecting a perfume is more than just picking a pleasant scent. Understanding fragrance families and how they interact with your skin can help you find the perfect match for your personality.",
        why: "A signature perfume can boost confidence and leave a lasting impression.",
        how: "Test different perfumes on your skin, understand the notes, and select one that complements your body chemistry.",
        conclusion: "Finding the perfect perfume takes time, but once you discover the right one, it becomes part of your identity."
    },
    Science: {
        title: "The Science of Fragrance Notes",
        subtitle: "Understand top, middle, and base notes to find your perfect scent.",
        image: "all-images/img.png",
        text: "Perfumes are composed of layers of scents known as top, middle, and base notes. Each note plays a vital role in how the fragrance evolves over time and interacts with your body chemistry.",
        why: "Understanding fragrance notes helps you pick perfumes that last longer and smell better on you.",
        how: "Citrus top notes fade quickly, floral middle notes provide the heart of the fragrance, and woody/musky base notes ensure longevity.",
        conclusion: "Mastering fragrance notes allows you to make better perfume choices and create lasting impressions."
    },
    Building: {
        title: "Building a Perfume Collection",
        subtitle: "Discover how to curate a collection for different moods & occasions.",
        image: "all-images/luxry.jpeg",
        text: "A well-rounded perfume collection includes scents for different seasons and moods. From fresh citrus for summer to warm musks for winter, having a variety of perfumes lets you express yourself fully.",
        why: "Different occasions call for different scents, allowing you to match your fragrance with the event and season.",
        how: "A good collection includes a fresh scent for daytime, a warm perfume for evenings, and a signature scent that defines you.",
        conclusion: "Having a diverse perfume collection means you’re always ready for any mood, event, or season."
    }
};

// Function to get URL parameter
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


// Load the correct post
document.addEventListener("DOMContentLoaded", function () {
    const postKey = getQueryParam("post");

    if (blogPosts[postKey]) {
        const post = blogPosts[postKey];

        document.getElementById("post-title").textContent = post.title;
        document.getElementById("post-image").src = post.image;

        // Dynamically add sections with a styled box
        document.getElementById("post-text").innerHTML = `
            <p><strong>${post.subtitle}</strong></p>
            <p>${post.text}</p>

            ${post.why ? `
                <div class="post-section">
                    <div class="section-title">Why?</div>
                    <p>${post.why}</p>
                </div>` : ""}

            ${post.how ? `
                <div class="post-section">
                    <div class="section-title">How?</div>
                    <p>${post.how}</p>
                </div>` : ""}

            ${post.conclusion ? `
                <div class="post-section">
                    <div class="section-title">Conclusion</div>
                    <p>${post.conclusion}</p>
                </div>` : ""}
        `;
    } else {
        document.getElementById("post-title").textContent = "Post Not Found";
        document.getElementById("post-text").innerHTML = "<p>Sorry, the requested blog post does not exist.</p>";
    }
});

