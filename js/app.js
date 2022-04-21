/* #Post Slider
  ======================================================= */
if (document.querySelector('.post-slider .swiper')) {
  new Swiper(".post-slider .swiper", {
    pagination: {
      el: ".post-slider .swiper-pagination",
      type: "progressbar",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.13
      },
      1024: {
        slidesPerView: 3.33
      }
    }
  });
}