const navOpen = document.querySelector(`.nav-open`);
const iconHamburger = document.querySelector(`.icon-hamburger`);
const iconX = document.querySelector(`.icon-x`);
const mainNav = document.querySelector(`.main-nav`);
const header = document.querySelector(`.header`);

iconHamburger.addEventListener("click", function () {
  header.classList.add(`nav-open`);
});
iconX.addEventListener("click", function () {
  header.classList.remove(`nav-open`);
});
