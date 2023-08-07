function filterProduct(value) {
    document.getElementById("search-input").value = '';
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
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
    let elements = document.querySelectorAll(".box");
    elements.forEach((element) => {
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        if (element.classList.contains(value)) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });

}