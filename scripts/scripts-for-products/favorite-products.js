const testout = localStorage.getItem("test");
const words = testout.split(',');



for(let k=0; k<words.length; k++){
  for (let p of products.data) {
  if(words[k] == p.productName){
   //box 
   let box = document.createElement("div");
   box.classList.add("box", p.category, p.newProducts, p.sales, "hide");
   //new
   if(p.newProducts === 'New'){
   let newP = document.createElement("span");
   newP.classList.add("new-product");
   newP.innerText = "Nou";
   box.appendChild(newP);
   }
   //icons
   let icons= document.createElement("div");
   icons.classList.add("icons")
   let a1 = document.createElement("a");
   a1.classList.add("fa-solid");
   a1.classList.add("fa-cart-shopping");
   let a3 = document.createElement("a");
   a3.classList.add("fa-solid");
   a3.classList.add("fa-eye");
   icons.appendChild(a1);
   icons.appendChild(a3);
   box.appendChild(icons);
   //image
   let imageContainer = document.createElement("div");
   imageContainer.classList.add("image");
   let image = document.createElement("img");
   image.setAttribute("src", p.image);
   imageContainer.appendChild(image);
   box.appendChild(imageContainer);
   //content
   let content = document.createElement("div");
   content.classList.add("content");
   //title
   let name = document.createElement("h3");
   name.classList.add("product-name");
   name.innerText = p.productName.toUpperCase();
   content.appendChild(name);
   //stars
   let stars = document.createElement("div");
   stars.classList.add("stars");
   for(let n=1; n<=p.stars; n++){
     let i = document.createElement("i");
     i.classList.add("fa-solid");
     i.classList.add("fa-star");
     stars.appendChild(i);
   }
   content.appendChild(stars);
   //price
   let price = document.createElement("div");
   price.classList.add("price");

   if(p.oldPrice === undefined){
     let priceP = document.createElement("p");
     priceP.innerText = "$" + p.price;
     price.appendChild(priceP);
   }else{
     let priceP = document.createElement("p");
     priceP.innerText = "$" + p.price;
     price.appendChild(priceP);
     let priceS = document.createElement("span");
     priceS.innerText = "$" + p.oldPrice;
     price.appendChild(priceS);
   };
   content.appendChild(price);
   box.appendChild(content);
   document.getElementById("tester").appendChild(box);

   //QUICK VIEW
   a3.addEventListener("click", () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    
    document.getElementById("titleQuick").innerText = p.productName;
    document.getElementById("priceQucik").innerText = "$" + p.price;
    document.getElementById("paraQucik").innerText = p.text;
    document.getElementById("img-option-main").src = p.image;
    document.getElementById("img-option1").src = p.imageOption1;
    document.getElementById("img-option2").src = p.imageOption2;
    document.getElementById("img-option3").src = p.imageOption3;
    let addToCard = document.getElementById("add-to-cart");

    addToCard.addEventListener("click", () =>{
    let getPrice = document.getElementById("get-price").innerHTML;
    shopItems.classList.add('active');
    if(window.scrollY == 0){
      header.classList.toggle("sticky");
    }
    document.getElementById("total").style.display = "block";
    document.getElementById("pay").style.display = "block";
    document.getElementById("empty-cart").style.display = "none";

    getPrice = Number(getPrice)+Number(p.price);
    document.getElementById("get-price").innerHTML= getPrice;
      
    //shop product
    let shopItem = document.createElement("div");
    shopItem.classList.add("shop-item");
    //image product
    let imageItem = document.createElement("img");
    imageItem.setAttribute("src", p.image);
    shopItem.appendChild(imageItem);
    //content product
    let contentItem = document.createElement("div");
    contentItem.classList.add("content");
    let headingItem = document.createElement("h3");
    headingItem.innerText = p.productName;
    let spanItem = document.createElement("span");
    spanItem.classList.add("price-cart");
    headingItem.appendChild(spanItem);
    contentItem.appendChild(headingItem);
    let priceItem = document.createElement("div");
    priceItem.classList.add("price");
    priceItem.innerText = "$" + p.price;
    contentItem.appendChild(priceItem);
    shopItem.appendChild(contentItem);
    //delete
    let deleteItem = document.createElement("span");
    deleteItem.classList.add("fa-solid", "fa-x");
    shopItem.appendChild(deleteItem);
    document.getElementById("cart-container").appendChild(shopItem);
  

    //remove product
      deleteItem.addEventListener("click", () => {
      getPrice = Number(getPrice)-Number(p.price); 
      document.getElementById("get-price").innerHTML= getPrice;
      document.getElementById("cart-container").removeChild(shopItem);
      });

    });

  });


  //ADD TO CART
  a1.addEventListener("click", () => {
    let getPrice = document.getElementById("get-price").innerHTML;
    shopItems.classList.add('active');
    if(window.scrollY == 0){
      header.classList.toggle("sticky");
    }
    document.getElementById("total").style.display = "block";
    document.getElementById("pay").style.display = "block";
    document.getElementById("empty-cart").style.display = "none";
    
 

    getPrice = Number(getPrice)+Number(p.price);
    document.getElementById("get-price").innerHTML= getPrice;
   
    //shop product
    let shopItem = document.createElement("div");
    shopItem.classList.add("shop-item");
    //image product
    let imageItem = document.createElement("img");
    imageItem.setAttribute("src", p.image);
    shopItem.appendChild(imageItem);
    //content product
    let contentItem = document.createElement("div");
    contentItem.classList.add("content");
    let headingItem = document.createElement("h3");
    headingItem.innerText = p.productName;
    let spanItem = document.createElement("span");
    spanItem.classList.add("price-cart");
    headingItem.appendChild(spanItem);
    contentItem.appendChild(headingItem);
    let priceItem = document.createElement("div");
    priceItem.classList.add("price");
    priceItem.innerText = "$" + p.price;
    contentItem.appendChild(priceItem);
    shopItem.appendChild(contentItem);
    //delete
    let deleteItem = document.createElement("span");
    deleteItem.classList.add("fa-solid", "fa-x");
    shopItem.appendChild(deleteItem);
    document.getElementById("cart-container").appendChild(shopItem);
  

    //remove product
    deleteItem.addEventListener("click", () => {
    getPrice = Number(getPrice)-Number(p.price); 
    document.getElementById("get-price").innerHTML= getPrice;
    document.getElementById("cart-container").removeChild(shopItem);
    });

  });


   }
  }
}






  
