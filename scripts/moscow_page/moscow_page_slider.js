const sliderMain = new Swiper(".slider_main", {
  freeMode: true,
  centeredSlides: true,
  mousewheel: false,
  parallax: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
		2000: {
			slidesPerView: 3,
      spaceBetween: 60,
		}
  },
  navigation: {
    nextEl: ".slider-next-item",
    prevEl: ".slider-prev-item",
  },
});

const sliderBg = new Swiper(".slider_bg", {
  freeMode: true,
  centeredSlides: true,
  parallax: true,
});

sliderMain.controller.control = sliderBg;
