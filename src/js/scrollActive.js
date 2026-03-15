// const sectionHeight = current.getBoundingClientRect().height;

const sections = document.querySelectorAll('section[id]');
const header = document.querySelector('.header');

// const headerHeight = header.offsetHeight;

window.addEventListener('resize', getProtrudedPartHeight);
window.addEventListener('resize', getHeaderHeight);

function getHeaderHeight() {
  const headerHeight = header.offsetHeight;

  return headerHeight;
}

function getProtrudedPartHeight() {
  const windowWidth = window.innerWidth;

  let protrudedPartHeight;
  if (windowWidth < 768) {
    protrudedPartHeight = 24;
  } else if (windowWidth >= 768 && windowWidth < 1200) {
    protrudedPartHeight = 162;
  } else {
    protrudedPartHeight = 96;
  }
  return protrudedPartHeight;
}

function getSectionHeight(sectionId, current) {
  const protrudedPartHeight = getProtrudedPartHeight();
  const sectionHeight =
    sectionId !== 'how-its-made'
      ? current.offsetHeight
      : current.offsetHeight - protrudedPartHeight; //returns the height of an element, including vertical padding and borders

  return sectionHeight;
}

function toggleActiveLinks(sectionId, isActive) {
  const headerLink = document.querySelector(
    `.header__nav-list a[href="#${sectionId}"]`
  );

  const mobileLink = document.querySelector(
    `.mobile-menu__list a[href="#${sectionId}"]`
  );

  if (headerLink) {
    isActive
      ? headerLink.classList.add('active-link')
      : headerLink.classList.remove('active-link');
  }

  if (mobileLink) {
    isActive
      ? mobileLink.classList.add('mobile-menu__active-link')
      : mobileLink.classList.remove('mobile-menu__active-link');
  }
}

function scrollActive() {
  const scrollY = window.scrollY; // значення прокрутки по вертикалі

  sections.forEach(current => {
    const sectionId = current.getAttribute('id');
    const sectionTop = current.offsetTop - getHeaderHeight(); //расстояние текущего элемента по отношению к верхней части offsetParent узла
    const sectionHeight = getSectionHeight(sectionId, current);
    const isActive =
      scrollY > sectionTop && scrollY <= sectionTop + sectionHeight;

    toggleActiveLinks(sectionId, isActive);
  });
}

window.addEventListener('scroll', scrollActive);
