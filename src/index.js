const hamburgerButton = document.querySelector(".hamburger");

hamburgerButton.addEventListener("click", function () {
  document.documentElement.classList.toggle("mobile-menu-open");

  if (document.documentElement.className.includes("mobile-menu-open")) {
    hamburgerButton.setAttribute("aria-expanded", "true");
  } else {
    hamburgerButton.setAttribute("aria-expanded", "false");
  }
});

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    header.classList.add('active_header');
  } else {
    header.classList.remove('active_header');
  }
})