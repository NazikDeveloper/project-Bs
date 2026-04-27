const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 29,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: ".pagination",
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});





// const swiper = new Swiper('.swiper-container', {
//   loop: true,
//   slidesPerView: 1,
//   spaceBetween: 20,
//   breakpoints: {
//     768: {
//       slidesPerView: 2,
//     },
//     1280: {
//       slidesPerView: 3,
//     },
//   },
//   pagination: {
//     el: '.pagination',
//     bulletClass: 'pagination__button',
//     bulletActiveClass: 'pagination__button--active',
//   },
//   navigation: {
//     nextEl: '.button-carousel.next',
//     prevEl: '.button-carousel.prev',
//   },
// });
