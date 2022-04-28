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

/* #Customer Testimonials Animation
  ======================================================= */
if (document.querySelector('.customer-testimonials')) {
  gsap.from(".customer-testimonials .card", {
    yPercent: 40,
    opacity: 0,
    stagger: 0.05,
    duration: .8,
    ease: "back.out(2)",
    scrollTrigger: {
      trigger: ".customer-testimonials .heading-wrap",
    },
  });
}

/* #Station Locations Animation
  ======================================================= */
if (document.querySelector('.station-locations') && window.innerWidth > 1024) {
  gsap.from(".station-locations .img", {
    yPercent: 60,
    scrollTrigger: {
      trigger: ".station-locations",
      scrub: true,
    },
  });
}

/* #Produt Slider
  ======================================================= */
if (document.querySelector('.product-slider')) {
  swiper = new Swiper(".product-slider .swiper", {
    pagination: {
      el: ".product-slider .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".product-slider .next",
      prevEl: ".product-slider .prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 1.35
      }
    }
  });
}