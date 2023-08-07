//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations

    removeCards();
    buildCard();
    sr.reveal('.box', { origin: 'top', interval: 300});
    sr.reveal('.new-product', { origin: 'right'});
    sr.reveal('.box .fa-cart-shopping', { origin: 'left'});
    sr.reveal('.box .fa-heart', { origin: 'top'});
    sr.reveal('.fa-eye', { origin: 'right'});
    sr.reveal('.image', { origin: 'left'});
    sr.reveal('.product-name', { origin: 'right'});
    sr.reveal('.stars', { origin: 'left'});

    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".box");


    if(searchInput == ''){
      filterProduct('all');
    }

    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (button.innerText == 'All') {
         button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });


    //loop through all elements
    elements.forEach((element, index) => {
    
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });

    let k = 0;
    cards.forEach((card) => {
      if(card.classList.contains('hide')){
        k++;
      }
    });

    if(k == 19){
      alert("Nu s-a gasit niciun produs");
      filterProduct("all");
    }

    document.getElementById("search-input").value = '';
});
  


const elem = document.getElementById("search-input");
elem.onkeyup = function(e){
    if(e.keyCode == 13){

      removeCards();
      buildCard();
      sr.reveal('.box', { origin: 'top', interval: 300});
      sr.reveal('.new-product', { origin: 'right'});
      sr.reveal('.box .fa-cart-shopping', { origin: 'left'});
      sr.reveal('.box .fa-heart', { origin: 'top'});
      sr.reveal('.fa-eye', { origin: 'right'});
      sr.reveal('.image', { origin: 'left'});
      sr.reveal('.product-name', { origin: 'right'});
      sr.reveal('.stars', { origin: 'left'});
       
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".box");


    if(searchInput == ''){
      filterProduct('all');
    }

    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (button.innerText == 'All') {
         button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });


    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });

    let k = 0;
    cards.forEach((card) => {
      if(card.classList.contains('hide')){
        k++;
      }
    });

    if(k == 19){
      alert("Nu s-a gasit niciun produs");
      filterProduct("all");
    }
    
    document.getElementById("search-input").value = '';
  }
}

