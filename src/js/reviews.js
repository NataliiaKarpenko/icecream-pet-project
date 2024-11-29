import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import 'swiper/swiper-bundle.min.css';

Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

var swiper = new Swiper('.swiper-container', {
  speed: 1000,
  spaceBetween: 280,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var gallery = new Swiper('.swiper-container.gallery__container', {
  effect: 'fade',
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  effectFade: {
    crossFade: true, // Smoothly crossfades between slides
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
});
