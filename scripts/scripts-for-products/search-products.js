//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations

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
});
  


const elem = document.getElementById("search-input");
elem.onkeyup = function(e){
    if(e.keyCode == 13){
       
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
    }
}

