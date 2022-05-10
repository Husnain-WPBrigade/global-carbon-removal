const videoPlay = document.querySelector(".video-popup__icon");
const videoClose = document.querySelector(".video-popup__close");
const videoModel = document.querySelector(".video-popup__model");
const mobileMenu = document.querySelector(".mobile-menu");
const navbar = document.querySelector(".nav");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-menu--active");
});

mobileMenu.addEventListener("click", () => {
  navbar.classList.toggle("nav--expanded");
});

videoPlay.addEventListener("click", () => {
  videoModel.classList.add("video-popup--active");
});

videoClose.addEventListener("click", () => {
  videoModel.classList.remove("video-popup--active");
});

var swiper = new Swiper(".criteria-slider__swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".criteria-slider__pagination",
    clickable: true,
  },

  breakpoints: {
    100: {
      slidesPerView: 1,
      // spaceBetween: 20,
      slidesPerGroup: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
    840: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ----------------------------------- Team - Slider ---------------
var swiper = new Swiper(".team-slider__swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".team-slider__pagination",
    clickable: true,
  },

  breakpoints: {
    100: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    560: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ----------------------------------- Logo Card - Slider ---------------

var swiper = new Swiper(".logo-slider__swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },

    550: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },

    1070: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
  },

  pagination: {
    el: ".logo-slider__pagination",
    clickable: true,
  },
});

// ----------------------------------- Resources - Slider ---------------

var swiper = new Swiper(".resources-slider__swiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".resources-slider__pagination",
    clickable: true,
  },

  breakpoints: {
    100: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    1100: {
      slidesPerView: 3,
      spaceBetween: 0,
      slidesPerGroup: 1,
    },
  },

  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});

//  ------------------ Partners-Slider------
const breakpoint = window.matchMedia(`(min-width: 640px)`);
let partnersSlider;

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    if (partnersSlider !== undefined) partnersSlider.destroy(true, true);

    return;
  } else if (breakpoint.matches === false) {
    return enableSwiper();
  }
};

const enableSwiper = function () {
  partnersSlider = new Swiper(".partners-slider__swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
