// navbar effect
const header = document.querySelector("header")
header.classList.remove("sticky");

window.addEventListener("scroll", function(){
  header.classList.toggle("sticky", window.scrollY >0);
});
//-------------


// navbar icons 
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
//--------------


//Swiper meniu
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



//Swiper meniu

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



//Swiper instagram

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


// instagram cards
function likeButton(event){
  let heart= event;
  let likes= document.querySelectorAll('.likes');
    if(heart.src.match("/images/heart.png")){
    heart.src = "/images/heart-red.png";
    likes.forEach(element =>{
      var matches = element.innerHTML.match(/(\d+)/);
            if (matches) {
              let str =(Number(matches[0])+1).toString();
              console.log(str);
                element.innerHTML = str + ' likes';
            }
    });
  }
  else{
    heart.src = "/images/heart.png";
    likes.forEach(element =>{
      var matches = element.innerHTML.match(/(\d+)/);
      console.log(matches);
            if (matches) {
                let str =(Number(matches[0])-1).toString();
                element.innerHTML = str + ' likes';
            }
    });
  }
}

//----------------



// reveal Animation

const sr= ScrollReveal({
  distance: '100px',
  duration: 3000,
  delay: 400,
  origin: 'top'
});

sr.reveal('.heading-about', { origin: 'top'});
sr.reveal('.content-about', { origin: 'right'});
sr.reveal('.image-about', { origin: 'left'});

sr.reveal('.swiper-blog', { origin: 'top'});

sr.reveal('.heading-products', { origin: 'top'});
sr.reveal('.box-products', { origin: 'top', interval: 300});

sr.reveal('.heading-review', { origin: 'top'});
sr.reveal('.swiper-slide-review', { origin: 'right', interval: 300});
sr.reveal('.swiper-button-review', { origin: 'bottom'});

sr.reveal('.heading-contact', { origin: 'top'});
sr.reveal('.map-contact', { origin: 'left'});
sr.reveal('.form-contact', { origin: 'right'});

sr.reveal('.heading-media', { origin: 'top'});
sr.reveal('.swiper-media', { origin: 'top'});

sr.reveal('.footer', { origin: 'bottom'});
//----------------