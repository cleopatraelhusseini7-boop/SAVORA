const categories = document.querySelectorAll(".category-card");
categories.forEach((category) => {
  category.addEventListener("click", () => {
    const link = category.querySelector("a");window.location.href = link.href;});
  });
  const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});