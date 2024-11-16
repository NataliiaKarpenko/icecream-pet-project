const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY; // значення прокрутки по вертикалі

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight, //returns the height of an element, including vertical padding and borders
      sectionTop = current.offsetTop - 83, //расстояние текущего элемента по отношению к верхней части offsetParent узла
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.header__nav-list a[href="#${sectionId}"]`)
        .classList.add('active-link');

      document
        .querySelector(`.mobile-menu__list a[href="#${sectionId}"]`)
        .classList.add('mobile-menu__active-link');
    } else {
      document
        .querySelector(`.header__nav-list a[href="#${sectionId}"]`)
        .classList.remove('active-link');

      document
        .querySelector(`.mobile-menu__list a[href="#${sectionId}"]`)
        .classList.remove('mobile-menu__active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);
