let products = {
    data: [
      {
        productName: 'Setul de ceai "Acasă"',
        category: "Ceramica",
        image: "../images/portrete-photo.jpg",
        stars: "4",
        price: "250",
        sale: "20"
      },
      {
        productName: 'Setul de ceai "calm"',
        category: "Ceramica",
        price: "49",
        image: "../images/ceramica-photo.jpg",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Portrete",
        price: "99",
        image: "../images/portrete-photo.jpg",
      },
      {
        productName: "Basic Knitted Top",
        category: "Textile",
        price: "29",
        image: "../images/textile-photo.jpg",
      },
      {
        productName: "Black Leather Jacket",
        category: "Portrete",
        price: "129",
        image: "../images/portrete-photo.jpg",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Ceramica",
        price: "89",
        image: "../images/ceramica-photo.jpg",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Textile",
        price: "189",
        image: "../images/textile-photo.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Ceramica",
        price: "49",
        image: "../images/ceramica-photo.jpg",
      },
      {
        productName: "Short Pants",
        category: "More",
        price: "70",
        image: "../images/portrete-photo.jpg",
      },
    ],
  };
  


  for (let i of products.data) {
    // Box
    let box = document.createElement("div");
    box.classList.add("box", i.category, "hide");
    // Icons
    let icons= document.createElement("div");
    icons.classList.add("icons")
    let a1 = document.createElement("a");
    a1.classList.add("fa-solid");
    a1.classList.add("fa-cart-shopping");
    let a2 = document.createElement("a");
    a2.classList.add("fa-solid");
    a2.classList.add("fa-heart");
    let a3 = document.createElement("a");
    a3.classList.add("fa-solid");
    a3.classList.add("fa-eye");
    icons.appendChild(a1);
    icons.appendChild(a2);
    icons.appendChild(a3);
    box.appendChild(icons);
    //image
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("image");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imageContainer.appendChild(image);
    box.appendChild(imageContainer);
    //content
    let content = document.createElement("div");
    content.classList.add("content");
    //title
    let name = document.createElement("h3");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    content.appendChild(name);
    //stars
    let stars = document.createElement("div");
    stars.classList.add("stars");
    for(let n=1; n<=i.stars; n++){
      let i = document.createElement("i");
      i.classList.add("fa-solid");
      i.classList.add("fa-star");
      stars.appendChild(i);
    }
    content.appendChild(stars);
    //price
    let price = document.createElement("div");
    price.classList.add("price");

    if(i.sale === undefined){
      let priceP = document.createElement("p");
      priceP.innerText = "$" + i.price;
      price.appendChild(priceP);
    }else{
      let priceP = document.createElement("p");
      priceP.innerText = "$" + i.sale;
      price.appendChild(priceP);
      let priceS = document.createElement("span");
      priceS.innerText = "$" + i.price;
      price.appendChild(priceS);
    };
    content.appendChild(price);
  
    box.appendChild(content);
    document.getElementById("products").appendChild(box);
  }


  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".box");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations

    let searchInput = document.getElementById("search-input").value;
    console.log(searchInput);
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".box");
  
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
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
  


  //Sort by newest

  var sel = document.getElementById("drop-down");
  var text= sel.options[1].value;
  console.log(text);