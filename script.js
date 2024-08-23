const navOpen = document.querySelector(`.nav-open`);
const iconHamburger = document.querySelector(`.icon-hamburger`);
const iconX = document.querySelector(`.icon-x`);
const mainNav = document.querySelector(`.main-nav`);
const header = document.querySelector(`.header`);
const h1 = document.querySelector(`.heading-primary`);
const yearElement = document.querySelector(`.year`);
const allLinks = document.querySelectorAll(`a:link`);

// Hamburger nav menu functionality
iconHamburger.addEventListener("click", function () {
  header.classList.add(`nav-open`);
});
iconX.addEventListener("click", function () {
  header.classList.remove(`nav-open`);
});

//copyrite current year
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Smooth Scrolling Animation
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to the top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    // scroll to link sections
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // close mobile nav
    if (link.classList.contains("main-nav-link")) header.classList.toggle("nav-open");
  });
});
