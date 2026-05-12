//   SLIDESHOW LOGIC

let slideIndex = 0;
let autoPlayTimer;

showSlide(slideIndex);
startAutoPlay();

function showSlide(index) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
}

function plusSlides(n) {
  clearTimeout(autoPlayTimer); 
  slideIndex += n;
  showSlide(slideIndex);
  startAutoPlay();
}

function goToSlide(index) {
  clearTimeout(autoPlayTimer);
  slideIndex = index;
  showSlide(slideIndex);
  startAutoPlay();
}

function startAutoPlay() {
  autoPlayTimer = setTimeout(function () {
    slideIndex++;
    showSlide(slideIndex);
    startAutoPlay();
  }, 5000);
}

//   ADD TO CART (basic)

document.querySelectorAll(".btn-cart").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const productName = this.closest(".product").querySelector("h3").textContent;
    alert("Added to cart: " + productName);
  });
});