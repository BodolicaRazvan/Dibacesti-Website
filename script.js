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
    navigation:{
        nextE1 :".swiper-button-next",
        prevE1 :".swiper-button-prev",
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