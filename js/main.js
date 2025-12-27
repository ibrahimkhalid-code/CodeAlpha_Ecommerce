let categoryNavList = document.querySelector(".categoryNavList");
let categoryBtn = document.querySelector(".catogryBtn");

categoryBtn.addEventListener("click", () => {
  categoryNavList.classList.toggle("visible");
});

// <!-- Initialize Swiper -->
var swiper = new Swiper(".slideSwp", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
});
