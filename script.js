// =====================
// PRODUCTS DATA
// Each product is an object with name, price, image, category and description
// This array is the single source of truth for all product data on the page
// =====================
const products = [
  { name: "HP Victus AMD Ryzen 7, 6GB RTX 4050, 16GB", price: "₹79,900", image: "https://m.media-amazon.com/images/I/71r2ySSfgBL._SY450_.jpg", category: "Laptops", description: "Powerful gaming laptop with AMD Ryzen 7 processor and dedicated RTX 4050 GPU. Perfect for gaming, video editing and heavy multitasking." },
  { name: "boAt Nirvana Zenith Pro (2025), 50dB Hybrid ANC, Spatial Audio", price: "₹2,999", image: "https://m.media-amazon.com/images/I/41QwSzPBJOL._SY300_SX300_QL70_FMwebp_.jpg", category: "Electronics", description: "Premium wireless earbuds with 50dB hybrid ANC and spatial audio. Up to 40 hours total playback with fast charging support." },
  { name: "Logitech G502 Hero High Performance Wired Gaming Mouse", price: "₹2,799", image: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UY327_FMwebp_QL65_.jpg", category: "Electronics", description: "High performance gaming mouse with HERO 25K sensor. Features 11 programmable buttons and adjustable weight system." },
  { name: "MSI Crosshair A16, Ryzen 9, RTX 5060, 16GB/1TB NVMe", price: "₹1,24,990", image: "https://m.media-amazon.com/images/I/51EWytLLqAL._SY450_.jpg", category: "Laptops", description: "Top tier gaming laptop with latest Ryzen 9 processor and RTX 5060 GPU. Features a stunning QHD+ 240Hz display for competitive gaming." },
  { name: "Wembley Rock Crawler Monster Truck Remote Control Car", price: "₹2,499", image: "https://m.media-amazon.com/images/I/41YNE+k+oEL._SY300_SX300_QL70_FMwebp_.jpg", category: "Toys", description: "All terrain RC monster truck with powerful motor and shock absorbers. Works on sand, grass, mud and rocky surfaces." },
  { name: "Y39 5G (Lotus Purple, 8GB RAM, 128GB Storage)", price: "₹15,999", image: "https://m.media-amazon.com/images/I/51Kk6rjcOXL._SX425_.jpg", category: "Mobiles", description: "Sleek 5G smartphone with 8GB RAM and 128GB storage. Features a stunning display and long lasting battery life." },
  { name: "Nike Downshifter 13 Running Shoes", price: "₹4,295", image: "https://m.media-amazon.com/images/I/6149-ZNfTKL._SY535_.jpg", category: "Fashion", description: "Lightweight running shoes with breathable mesh upper and responsive cushioning. Designed for everyday training and casual wear." },
  { name: "Samsung Galaxy S25 Ultra 5G AI Smartphone", price: "₹1,50,999", image: "https://m.media-amazon.com/images/I/71rs4Aer71L._SX425_.jpg", category: "Mobiles", description: "Samsung's flagship AI smartphone with built in S Pen, 200MP camera and Snapdragon 8 Elite processor. The ultimate Android experience." },
  { name: "Tommy Hilfiger Multifunction Navy Dial Stainless Steel Watch", price: "₹10,999", image: "https://m.media-amazon.com/images/I/51bbLkXsL1L._SX679_.jpg", category: "Fashion", description: "Classic multifunction watch with navy dial and stainless steel bracelet. Water resistant with chronograph functionality." },
  { name: "Marshall Kilburn II 36W Portable Bluetooth Speaker", price: "₹21,999", image: "https://m.media-amazon.com/images/I/31RnuvCDlhL._SX300_SY300_QL70_FMwebp_.jpg", category: "Electronics", description: "Iconic portable speaker with 36W powerful sound and signature Marshall design. Up to 20 hours battery with multi host functionality." },
  { name: "NEXA Fronx Compact SUV", price: "₹8,67,000", image: "https://img.autocarindia.com/mmv_images/colors/20250620010815_Maruti_Suzuki_Fronx_Opulent_Red[1].jpg?w=640&q=75", category: "Automotive", description: "Stylish compact SUV with bold coupe design and feature packed interior. Available with petrol and mild hybrid engine options." },
  { name: "Voltas Vectra Elite 2 Ton 3 Star Inverter Split AC", price: "₹46,990", image: "https://m.media-amazon.com/images/I/61nv5TqjBoL._SX466_.jpg", category: "Appliances", description: "Energy efficient inverter AC with 4 in 1 adjustable modes. Features anti dust filter and auto cleanser for low maintenance." },
  { name: "Logitech G102 USB LightSync Gaming Mouse with RGB", price: "₹1,499", image: "https://m.media-amazon.com/images/I/61RYwHoeHjL._AC_UY327_FMwebp_QL65_.jpg", category: "Electronics", description: "Budget friendly gaming mouse with LightSync RGB and 8000 DPI optical sensor. Lightweight design at just 85 grams." },
  { name: "Havells Aqua Plus Electric Kettle 1.2 Litre, 1250W", price: "₹1,499", image: "https://m.media-amazon.com/images/I/31S74o1sCSS._SX300_SY300_QL70_FMwebp_.jpg", category: "Appliances", description: "Fast boiling electric kettle with 1250W power and auto shutoff safety feature. Food grade stainless steel interior." },
  { name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones", price: "₹24,990", image: "https://d1ncau8tqf99kp.cloudfront.net/converted/103364_original_local_1200x1050_v3_converted.webp", category: "Electronics", description: "Industry leading noise cancelling headphones with 30 hour battery life. Features multipoint connection and crystal clear call quality." },
  { name: "Tommy Hilfiger Men Black Dial Quartz Multifunction Watch", price: "₹14,299", image: "https://m.media-amazon.com/images/I/71TtTKwu0PL._SY741_.jpg", category: "Fashion", description: "Premium quartz watch with black dial and leather strap. Features day date display and elegant Tommy Hilfiger styling." },
  { name: "Samsung 653L 3 Star Frost Free Double Door Fridge", price: "₹79,499", image: "https://m.media-amazon.com/images/I/61Cblx5LWAL._SX466_.jpg", category: "Appliances", description: "Large capacity frost free refrigerator with convertible 5 in 1 modes. Features digital inverter technology for energy savings." },
  { name: "Realme Neckband Pro Bluetooth Earphones with ENC", price: "₹1,299", image: "https://m.media-amazon.com/images/I/31K5oAhDs3L._SY300_SX300_QL70_FMwebp_.jpg", category: "Electronics", description: "Comfortable neckband earphones with environmental noise cancellation and fast charging. Up to 30 hours playback on single charge." }
];

// =====================
// DOM SELECTORS
// Grabbing container elements before any rendering happens
// =====================
const productSection = document.querySelector(".products");
const featuredSection = document.querySelector(".featuredProducts");
const featuredproduct = document.querySelector(".featuredProducts"); 
const featuredtitle = document.querySelector(".featured-title");

// =====================
// RENDER FUNCTION
// Accepts any array of products and a container element
// Loops through the list and injects HTML cards into the container
// data-category attribute stores category for filtering later
// onclick navigates to product.html with the original array index as URL parameter
// =====================
function renderProducts(list, container) {
    for (let i = 0; i < list.length; i++) {
        // indexOf finds this product's position in the ORIGINAL products array
        // ensures correct id even when rendering a shuffled featured subset
        const originalIndex = products.indexOf(list[i]);
        container.innerHTML += `<div class="product" data-category="${list[i].category}" onclick="window.location.href='product.html?id=${originalIndex}'">
            <img src="${list[i].image}" alt="${list[i].category}">
            <h3>${list[i].name}</h3>
            <p class="price">${list[i].price}</p>
            <div class="btn-group">
                <button class="btn-cart">Add to Cart</button>
                <button class="btn-buy">Buy Now</button>
            </div>
        </div>`;
    }
}

// =====================
// FISHER-YATES SHUFFLE ALGORITHM
// Randomly reorders the products array in place
// Works by swapping each element with a randomly chosen element before it
// This ensures every possible order is equally likely
// =====================
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // pick a random index from 0 to i
        let j = Math.floor(Math.random() * (i + 1));
        // swap array[i] with array[j] using a temp variable
        let t = array[i];
        array[i] = array[j];
        array[j] = t;
    }
    return array;
}

// Shuffle products array then slice first 5 for featured section
// Every page refresh produces a different featured selection
shuffle(products);
const featuredProducts = products.slice(0, 5); // first 5 from shuffled array
renderProducts(featuredProducts, featuredSection);
renderProducts(products, productSection);

// =====================
// GLOBAL SELECTORS
// Declared AFTER renderProducts calls so cards exist in the DOM
// querySelectorAll takes a snapshot — if called before render, finds 0 cards
// =====================
const cards = document.querySelectorAll(".product");
const cartCount = document.querySelector("#cartCount");
const searchFound = document.querySelector("#noResults");
const result = document.querySelector(".search-box input");

// =====================
// CART COUNTER
// Attaches click listener to every Add to Cart button
// Increments count variable and updates the header span on each click
// =====================
let count = 0; // tracks total items added to cart
document.querySelectorAll(".btn-cart").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        e.stopPropagation(); // prevents click from bubbling up to product card and navigating away
        count++;
        cartCount.textContent = count;
        const productName = this.closest(".product").querySelector("h3").textContent;
        alert("Added to cart: " + productName);
    });
});

// =====================
// SEARCH FILTER
// Fires on every keystroke using "input" event
// Case insensitive matching using toLowerCase()
// Hides featured section while searching, shows it when search is cleared
// Shows no results message when matchCount is 0
// =====================
result.addEventListener("input", function () {
    let matchCount = 0; // tracks how many products match the search

    for (let x = 0; x < cards.length; x++) {
        if (cards[x].querySelector("h3").textContent.toLowerCase().includes(result.value.toLowerCase())) {
            cards[x].style.display = "block"; // show matching card
            matchCount++;
        } else {
            cards[x].style.display = "none"; // hide non-matching card
        }
    }

    // show/hide no results message using ternary operator
    searchFound.style.display = matchCount === 0 ? "block" : "none";

    // hide featured section while searching, restore when search box is cleared
    if (result.value !== "") {
        featuredtitle.style.display = "none";
        featuredproduct.style.display = "none";
    } else {
        featuredtitle.style.display = "block";
        featuredproduct.style.display = "grid";
    }
});

// =====================
// CATEGORY FILTER
// Called directly from HTML onclick attributes in secondary nav
// Uses data-category attribute on each card for matching
// "All" restores everything including featured section
// =====================
function filterCategory(cate) {
    // hide featured section when any category is selected
    featuredtitle.style.display = "none";
    featuredproduct.style.display = "none";

    if (cate === "All") {
        // restore featured section and show all products
        featuredtitle.style.display = "block";
        featuredproduct.style.display = "grid";
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = "block";
        }
        return; // exit function early, no need to run filter loop
    }

    // show only cards whose data-category matches selected category
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].dataset.category === cate) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// =====================
// SLIDESHOW
// Shows one slide at a time by adding/removing "active" class
// Auto-plays every 5 seconds using setTimeout (not setInterval)
// Manual navigation resets the auto-play timer
// =====================
let slideIndex = 0;
let autoPlayTimer; // stored so it can be cleared on manual navigation

showSlide(slideIndex);
startAutoPlay();

// Shows the slide at the given index, wraps around at boundaries
function showSlide(index) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    // wrap around: past last → go to first, before first → go to last
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    // remove active from all slides and dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }

    // add active to current slide and its dot
    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
}

// Called by prev/next buttons in HTML
// Clears auto-play timer to prevent double-advancing after manual click
function plusSlides(n) {
    clearTimeout(autoPlayTimer);
    slideIndex += n;
    showSlide(slideIndex);
    startAutoPlay(); // restart auto-play after manual navigation
}

// Called by dot clicks in HTML
function goToSlide(index) {
    clearTimeout(autoPlayTimer);
    slideIndex = index;
    showSlide(slideIndex);
    startAutoPlay();
}

// Recursively calls itself every 5 seconds to auto-advance slides
function startAutoPlay() {
    autoPlayTimer = setTimeout(function () {
        slideIndex++;
        showSlide(slideIndex);
        startAutoPlay();
    }, 5000);
}

// =====================
// DARK MODE
// Toggles dark-mode class on body element
// localStorage saves preference so it persists after page refresh
// Button icon switches between 🌙 and ☀️
// =====================
const darkBtn = document.querySelector("#darkModeBtn");

// On page load: check localStorage and apply dark mode if previously enabled
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkBtn.textContent = "☀️";
}

darkBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode"); // add if missing, remove if present
    if (document.body.classList.contains("dark-mode")) {
        darkBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark"); // save preference
    } else {
        darkBtn.textContent = "🌙";
        localStorage.removeItem("theme"); // clear preference
    }
});

// =====================
// SCROLL TO TOP
// Button fixed to bottom-right corner of screen
// Appears after user scrolls 400px down
// Smooth scrolls back to top on click
// =====================
const backToTopBtn = document.querySelector("#back-to-top");

// ternary operator: show button if scrolled > 400px, hide otherwise
window.addEventListener("scroll", function () {
    backToTopBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
});