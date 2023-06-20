let navBar = document.querySelector('.nav-bar');
document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active');
    shopItems.classList.remove('active');
    searchBar.classList.remove('active');
}

let shopItems = document.querySelector('.shop-container');
document.querySelector('#shop-btn').onclick = () =>{
    shopItems.classList.toggle('active');
    navBar.classList.remove('active');
    searchBar.classList.remove('active');
}

let searchBar = document.querySelector('.search-bar');
document.querySelector('#search-btn').onclick = () =>{
    searchBar.classList.toggle('active');
    navBar.classList.remove('active');
    shopItems.classList.remove('active');
}

window.onscroll = () =>{
    navBar.classList.remove('active');
    shopItems.classList.remove('active');
    searchBar.classList.remove('active');
}

var swiper = new Swiper(".blogs-row", {
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


  // const swiperEl = document.querySelector('swiper-container')
  // Object.assign(swiperEl, {
  //   slidesPerView: 1,
  //   spaceBetween: 20,
  //   // centeredSlides:true,
  //   breakpoints: {
  //     0: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     640: {
  //       slidesPerView: 3,
  //       spaceBetween: 20,
  //     },
  //     768: {
  //       slidesPerView: 4,
  //       spaceBetween: 20,
  //     },
  //     1024: {
  //       slidesPerView: 5,
  //       spaceBetween: 20,
  //     },
  //   },
  // });
  // swiperEl.initialize();

  const header = document.querySelector("header")

  window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY >0)
  });