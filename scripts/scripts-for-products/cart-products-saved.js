let getCartProducts = localStorage.getItem("cart-products-saved");
if(getCartProducts == null){
    console.log('nu avem iteme');
}else{
let cartProduct = getCartProducts.split(',');
console.log(cartProduct);

for(let k=0; k<cartProduct.length; k++){
    for (let j of products.data){
    if(cartProduct[k] == j.productName){
    let getPrice = document.getElementById("get-price").innerHTML;
      shopItems.classList.add('active');
      if(window.scrollY == 0){
        header.classList.toggle("sticky");
      }
      document.getElementById("total").style.display = "block";
      document.getElementById("pay").style.display = "block";
      document.getElementById("empty-cart").style.display = "none";
      
   

      getPrice = Number(getPrice)+Number(j.price);
      document.getElementById("get-price").innerHTML= getPrice;
     
      //shop product
      let shopItem = document.createElement("div");
      shopItem.classList.add("shop-item");
      //image product
      let imageItem = document.createElement("img");
      imageItem.setAttribute("src", j.image);
      shopItem.appendChild(imageItem);
      //content product
      let contentItem = document.createElement("div");
      contentItem.classList.add("content");
      let headingItem = document.createElement("h3");
      headingItem.innerText = j.productName;
      let spanItem = document.createElement("span");
      spanItem.classList.add("price-cart");
      headingItem.appendChild(spanItem);
      contentItem.appendChild(headingItem);
      let priceItem = document.createElement("div");
      priceItem.classList.add("price");
      priceItem.innerText = "$" + j.price;
      contentItem.appendChild(priceItem);
      shopItem.appendChild(contentItem);
      //delete
      let deleteItem = document.createElement("span");
      deleteItem.classList.add("fa-solid", "fa-x");
      shopItem.appendChild(deleteItem);
      document.getElementById("cart-container").appendChild(shopItem);
    

      //remove product
      deleteItem.addEventListener("click", () => {
      document.getElementById("get-price").innerHTML = Number(document.getElementById("get-price").innerHTML)-Number(j.price); 
      const newCartProducts = cartProduct.toSpliced(k, 1);
      localStorage.setItem("cart-products-saved", newCartProducts)
      document.getElementById("cart-container").removeChild(shopItem);
      if(document.getElementById("cart-container").innerHTML == ""){
        document.getElementById("total").style.display = "none";
        document.getElementById("pay").style.display = "none";
        document.getElementById("empty-cart").style.display = "block";
        localStorage.removeItem("cart-products-saved");
      }else{
        console.log("cart plin");
      }
      });
    }
 }
} 
}

