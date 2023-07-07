//Swiper Categorii
var swiper1 = new Swiper(".blogs-row", {
    spaceBetween: 50,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:3500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });
//------------------



//Swiper Reviews

var swiper2 = new Swiper(".review-swiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 5,
    },
  },
});

//------------------



//Swiper Instagram

var swiper3 = new Swiper(".social-media", {
  effect: "coverflow",
  grabCursor: true,
  initialSlide: 4,
  centeredSlides: true,
  slidesPerView: 4,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  autoplay:{
      delay: 1500,
    },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
});
//------------------