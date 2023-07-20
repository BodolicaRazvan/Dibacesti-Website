function buildCard(){
  for (let i of products.data) {
    //box 
    let box = document.createElement("div");
    box.classList.add("box", i.category, i.newProducts, i.sales, "hide");
    //new
    if(i.newProducts === 'New'){
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

    if(i.oldPrice === undefined){
      let priceP = document.createElement("p");
      priceP.innerText = "$" + i.price;
      price.appendChild(priceP);
    }else{
      let priceP = document.createElement("p");
      priceP.innerText = "$" + i.price;
      price.appendChild(priceP);
      let priceS = document.createElement("span");
      priceS.innerText = "$" + i.oldPrice;
      price.appendChild(priceS);
    };
    content.appendChild(price);
    box.appendChild(content);
    document.getElementById("products").appendChild(box);


    //QUICK VIEW
    a3.addEventListener("click", () => {
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
      
      document.getElementById("titleQuick").innerText = i.productName;
      document.getElementById("priceQucik").innerText = "$" + i.price;
      document.getElementById("paraQucik").innerText = i.text;
      document.getElementById("img-option-main").src = i.image;
      document.getElementById("img-option1").src = i.imageOption1;
      document.getElementById("img-option2").src = i.imageOption2;
      document.getElementById("img-option3").src = i.imageOption3;
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

      getPrice = Number(getPrice)+Number(i.price);
      document.getElementById("get-price").innerHTML= getPrice;
        
      //shop product
      let shopItem = document.createElement("div");
      shopItem.classList.add("shop-item");
      //image product
      let imageItem = document.createElement("img");
      imageItem.setAttribute("src", i.image);
      shopItem.appendChild(imageItem);
      //content product
      let contentItem = document.createElement("div");
      contentItem.classList.add("content");
      let headingItem = document.createElement("h3");
      headingItem.innerText = i.productName;
      let spanItem = document.createElement("span");
      spanItem.classList.add("price-cart");
      headingItem.appendChild(spanItem);
      contentItem.appendChild(headingItem);
      let priceItem = document.createElement("div");
      priceItem.classList.add("price");
      priceItem.innerText = "$" + i.price;
      contentItem.appendChild(priceItem);
      shopItem.appendChild(contentItem);
      //delete
      let deleteItem = document.createElement("span");
      deleteItem.classList.add("fa-solid", "fa-x");
      shopItem.appendChild(deleteItem);
      document.getElementById("cart-container").appendChild(shopItem);
    

      //remove product
      deleteItem.addEventListener("click", () => {
      getPrice = Number(getPrice)-Number(i.price); 
      document.getElementById("get-price").innerHTML= getPrice;
      document.getElementById("cart-container").removeChild(shopItem);
      });

      });


      // let count = 1;
      // countQuant.innerText = count;
      // console.log(count);
      // addQuant.addEventListener("click", () =>{
      //   count++;
      //   countQuant.innerText = count;
      // });
      // removeQuant.addEventListener("click", () =>{
      //   count--;
      //   if(count<1){
      //     countQuant.innerText = 1;
      //     count=1;
      //   }else{
      //     countQuant.innerText = count;
      //   }
      // });
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
      
   

      getPrice = Number(getPrice)+Number(i.price);
      document.getElementById("get-price").innerHTML= getPrice;
     
      //shop product
      let shopItem = document.createElement("div");
      shopItem.classList.add("shop-item");
      //image product
      let imageItem = document.createElement("img");
      imageItem.setAttribute("src", i.image);
      shopItem.appendChild(imageItem);
      //content product
      let contentItem = document.createElement("div");
      contentItem.classList.add("content");
      let headingItem = document.createElement("h3");
      headingItem.innerText = i.productName;
      let spanItem = document.createElement("span");
      spanItem.classList.add("price-cart");
      headingItem.appendChild(spanItem);
      contentItem.appendChild(headingItem);
      let priceItem = document.createElement("div");
      priceItem.classList.add("price");
      priceItem.innerText = "$" + i.price;
      contentItem.appendChild(priceItem);
      shopItem.appendChild(contentItem);
      //delete
      let deleteItem = document.createElement("span");
      deleteItem.classList.add("fa-solid", "fa-x");
      shopItem.appendChild(deleteItem);
      document.getElementById("cart-container").appendChild(shopItem);
    

      //remove product
      deleteItem.addEventListener("click", () => {
      getPrice = Number(getPrice)-Number(i.price); 
      document.getElementById("get-price").innerHTML= getPrice;
      document.getElementById("cart-container").removeChild(shopItem);
      });

    });

    //ADD TO FAVORITE
    a2.addEventListener("click", () => {
      a2.style.color='red';
      if(arr1.includes(i.productName)){
        console.log('exista');
      }else{
      arr1.push(i.productName);
      localStorage.setItem("test", arr1);
      }
    });


}

}


function removeCards(){
    document.getElementById('products').textContent = '';
}