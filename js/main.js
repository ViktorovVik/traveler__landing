import * as mobileNav from './mobile-nav.js';
import * as loader from './loader.js';





const swiper = new Swiper('.swiper', {
   parallax: true,
   loop: true,
   speed: 1000,
   keyboard: {
      enabled: true
   },


   pagination: {
      el: '.header__slider-controls-count',
      type: 'fraction'
   },

  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});