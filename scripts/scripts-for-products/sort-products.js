  //Sort
  function sortProducts(){
    optionValue = document.getElementById("drop-down").value;
    let elements = document.querySelectorAll(".box");



      //Sort by cheap
    if(optionValue == 'cheapest'){
      removeCards();
      products.data.sort(function(a, b) {
        return parseFloat(a.price) - parseFloat(b.price);

      });
      buildCard();
      sr.reveal('.box', { origin: 'top', interval: 300});
      sr.reveal('.new-product', { origin: 'right'});
      sr.reveal('.box .fa-cart-shopping', { origin: 'left'});
      sr.reveal('.box .fa-heart', { origin: 'top'});
      sr.reveal('.fa-eye', { origin: 'right'});
      sr.reveal('.image', { origin: 'left'});
      sr.reveal('.product-name', { origin: 'right'});
      sr.reveal('.stars', { origin: 'left'});

 
      elements.forEach((element) => {
      element.classList.remove("hide");
      });
      filterProduct("all");
    }



      //Sort by expensive
    if(optionValue == 'expensive'){
      removeCards();
      products.data.sort(function(a, b) {
        return parseFloat(b.price) - parseFloat(a.price);

      });
      buildCard();
      sr.reveal('.box', { origin: 'top', interval: 300});
      sr.reveal('.new-product', { origin: 'right'});
      sr.reveal('.box .fa-cart-shopping', { origin: 'left'});
      sr.reveal('.box .fa-heart', { origin: 'top'});
      sr.reveal('.fa-eye', { origin: 'right'});
      sr.reveal('.image', { origin: 'left'});
      sr.reveal('.product-name', { origin: 'right'});
      sr.reveal('.stars', { origin: 'left'});


      elements.forEach((element) => {
      element.classList.remove("hide");
      });
      filterProduct("all");
    }





    //Sort by newest
    if(optionValue == 'newest'){
      removeCards();
      products.data.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);

      });
      buildCard();
      sr.reveal('.box', { origin: 'top', interval: 300});
      sr.reveal('.new-product', { origin: 'right'});
      sr.reveal('.box .fa-cart-shopping', { origin: 'left'});
      sr.reveal('.box .fa-heart', { origin: 'top'});
      sr.reveal('.fa-eye', { origin: 'right'});
      sr.reveal('.image', { origin: 'left'});
      sr.reveal('.product-name', { origin: 'right'});
      sr.reveal('.stars', { origin: 'left'});

      elements.forEach((element) => {
      element.classList.remove("hide");
      });
      filterProduct("all");
    }





    //Sort by name-up
    if(optionValue == 'name-up'){
      removeCards();
      products.data.sort(function(a, b) {
        return a.productName.localeCompare(b.productName);

      });
      buildCard();
      sr.reveal('.box', { origin: 'top', interval: 300});
      sr.reveal('.new-product', { origin: 'right'});
      sr.reveal('.box .fa-cart-shopping', { origin: 'left'});
      sr.reveal('.box .fa-heart', { origin: 'top'});
      sr.reveal('.fa-eye', { origin: 'right'});
      sr.reveal('.image', { origin: 'left'});
      sr.reveal('.product-name', { origin: 'right'});
      sr.reveal('.stars', { origin: 'left'});

      elements.forEach((element) => {
      element.classList.remove("hide");
      });
      filterProduct("all");
    }


    //Sort by name-down
    if(optionValue == 'name-down'){
      removeCards();
      products.data.sort(function(a, b) {
        return b.productName.localeCompare(a.productName);

      });
      buildCard();
      sr.reveal('.box', { origin: 'top', interval: 300});
      sr.reveal('.new-product', { origin: 'right'});
      sr.reveal('.box .fa-cart-shopping', { origin: 'left'});
      sr.reveal('.box .fa-heart', { origin: 'top'});
      sr.reveal('.fa-eye', { origin: 'right'});
      sr.reveal('.image', { origin: 'left'});
      sr.reveal('.product-name', { origin: 'right'});
      sr.reveal('.stars', { origin: 'left'});

      
      elements.forEach((element) => {
      element.classList.remove("hide");
      });
      filterProduct("all");
    }


}