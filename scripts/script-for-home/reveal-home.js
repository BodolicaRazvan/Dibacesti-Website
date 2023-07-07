// Reveal Animation
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
  
  sr.reveal('.footer', { origin: 'left'});
  //----------------