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

// Side navigation open and close functions
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
