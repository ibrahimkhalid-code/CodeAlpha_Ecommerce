let categoryNavList = document.querySelector(".categoryNavList");
let categoryBtn = document.querySelector(".catogryBtn");

categoryBtn.addEventListener("click", () => {
  categoryNavList.classList.toggle("visible");
});
