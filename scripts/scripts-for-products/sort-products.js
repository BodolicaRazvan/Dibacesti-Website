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
      elements.forEach((element) => {
      element.classList.remove("hide");
      });
      filterProduct("all");
    }


}