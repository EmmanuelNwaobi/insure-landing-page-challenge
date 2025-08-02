const navbarEL = document.querySelector(".navbar");
const buttonEL = document.querySelector(".navbar__mobile-nav");

buttonEL.addEventListener("click", function () {
  navbarEL.classList.toggle("navbar-open");
});
