/* #Hamburger
  ======================================================= */
const header = document.querySelector('.header');
const headerBtn = document.querySelector('.header-hamburger');

headerBtn.addEventListener('click', (e) => {
  e.preventDefault();

  header.classList.toggle('show');
  body.classList.toggle('no-scroll');
});

/* #Header
  ======================================================= */

// Color Change
if (document.querySelector('.header')) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });
}

if (document.querySelector('.header')) {
  if (window.scrollY > 0) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
}

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

/* #Home Banner Slider
  ======================================================= */
if (document.querySelector('.home-banner .swiper')) {
  new Swiper(".home-banner .swiper", {
    slidesPerView: 1
  });
}

/* #Banner Slider
  ======================================================= */
if (document.querySelector('.banner .swiper')) {
  new Swiper(".banner .swiper", {
    slidesPerView: 1
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
    loop: true,
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

/* #Post Slider Animations
  ======================================================= */
if (document.querySelector('.post-slider .swiper-slide')) {
  const sliders = document.querySelectorAll('.post-slider');

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll('.swiper-slide');

    gsap.from(slider.querySelectorAll('.swiper-slide'), {
      x: 100,
      opacity: 0,
      stagger: .1,
      duration: .8,
      scrollTrigger: {
        trigger: slider.querySelectorAll('.swiper-slide'),
      },
    });
  });
}

/* #Benefits Elements Animation
  ======================================================= */
if (document.querySelector('.benefits .elements')) {
  gsap.from(".benefits .elements li ", {
    yPercent: 100,
    opacity: 0,
    stagger: 0.1,
    duration: .8,
    ease: "back.out(2)",
    scrollTrigger: {
      trigger: ".benefits .elements",
    },
  });
}

/* #Customers Elements Animation
  ======================================================= */
if (document.querySelector('.customers .elements')) {
  gsap.from(".customers .elements li ", {
    yPercent: 100,
    opacity: 0,
    stagger: 0.1,
    duration: .8,
    ease: "back.out(2)",
    scrollTrigger: {
      trigger: ".customers",
    },
  });
}

/* #Station Locations Animation
  ======================================================= */
if (document.querySelector('.station-locations')) {
  gsap.from(".station-locations .text > *", {
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: .8,
    ease: "back.out(2)",
    scrollTrigger: {
      trigger: ".station-locations .text",
    },
  });

  gsap.from(".station-locations .charging-btn", {
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    duration: .8,
    ease: "back.out(2)",
    scrollTrigger: {
      trigger: ".station-locations .text",
    },
  });
}

/* #Animations
    ======================================================= */
if (document.querySelector('.contact-form')) {
  if (document.querySelector('.contact-form .input-primary')) {
    const inputs = document.querySelectorAll('.contact-form .input-primary');

    inputs.forEach((input) => {
      gsap.from(input, {
        opacity: 0,
        xPercent: 100,
        duration: .8,
        ease: Power1.easeOut,
        scrollTrigger: {
          trigger: input,
        },
      });
    });
  }

  if (document.querySelector('.contact-form .select-primary')) {
    const selects = document.querySelectorAll('.contact-form .select-primary');

    selects.forEach((select) => {
      gsap.from(select, {
        opacity: 0,
        xPercent: 100,
        duration: .8,
        ease: Power1.easeOut,
        scrollTrigger: {
          trigger: select,
        },
      });
    });
  }
}