const burgerBtn = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu__close-btn');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');

burgerBtn.addEventListener('click', toggleMobileMenu);

mobileMenuCloseBtn.addEventListener('click', toggleMobileMenu);

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', e => {
    activateLink(e, link);
    toggleMobileMenu();
  });
});

window.addEventListener('resize', changeWindowWidth);

function toggleMobileMenu() {
  mobileMenu.classList.toggle('is-open');
}

function activateLink(e, link) {
  mobileMenuLinks.forEach(link =>
    link.classList.remove('mobile-menu__active-link')
  );

  link.classList.add('mobile-menu__active-link');
}

function changeWindowWidth() {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 1200) {
    mobileMenu.classList.remove('is-open');
  }
}
