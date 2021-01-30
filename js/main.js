const swiper1 = document.querySelector('.slider-container'),
		swiper2 = document.querySelector('.swiper-container'),
		burger = document.querySelector('.burger'),
		close = document.querySelector('.menu__close'),
		menu = document.querySelector('.menu');

let swiperSlider1 = new Swiper(swiper1, {
	centredSlides: true,
	slidesPerView: "auto",
	loop: true,
	spaceBetween: 45,
	autoplay: {
    delay: 6000,
  },
});

let swiperSlider2  = new Swiper(swiper2, {
	centredSlides: true,
	slidesPerView: 1 ,
	loop: true,
	spaceBetween: 45,
	fadeEffect: {
    crossFade: true
	},
	effect: 'fade',
	autoplay: {
    delay: 5000,
  },
});

burger.addEventListener('click', () => {
	menu.classList.add('menu--visible');
});

close.addEventListener('click', () => {
	menu.classList.remove('menu--visible');
});

