let getCartProducts = localStorage.getItem("cart-products-saved");
let subtotal = 0;
let subtotalUpdate = 0;
if(getCartProducts == null){
    console.log('nu avem iteme');
}else{
let cartProduct = getCartProducts.split(',');
// console.log(cartProduct);

for(let k=0; k<cartProduct.length; k++){
    for (let j of products.data){
    if(cartProduct[k] == j.productName){

    //listed item
    let listedItem = document.createElement("li");
    listedItem.classList.add("items");

    //container list
    let containerList = document.createElement("div");
    containerList.classList.add("infoWrap");

    //product
    let productContainer = document.createElement("div");
    productContainer.classList.add("cartSection");
    //product image
    let productImageContainer = document.createElement("img");
    productImageContainer.setAttribute("src", j.image);
    productImageContainer.classList.add("itemImg");
    productContainer.appendChild(productImageContainer);
    //product name
    let productNameContainer = document.createElement("h3");
    productNameContainer.innerText = j.productName;
    productContainer.appendChild(productNameContainer);
    //product price
    let productPriceContainer = document.createElement("p");
    let productPrice = document.createElement("span");
    productPrice.classList.add("price");
    productPrice.innerText = "$" + j.price; 
    productPriceContainer.appendChild(productPrice);
    productContainer.appendChild(productPriceContainer);

    //quantity
    let productQuantityContainer = document.createElement("div");
    productQuantityContainer.classList.add("cartSection");
    productQuantityContainer.classList.add("prodQuantity");
    //qunatity multiplication
    let productMultiContianer = document.createElement("span");
    productMultiContianer.innerText = 'x';
    productQuantityContainer.appendChild(productMultiContianer);
    //quantity input
    let productQuantity = document.createElement("input");
    productQuantity.classList.add("qty");
    productQuantity.setAttribute('type', 'number');
    productQuantity.setAttribute('value', '1');
    productQuantityContainer.appendChild(productQuantity);

    //price
    let priceContainer = document.createElement("div");
    priceContainer.classList.add("cartSection");
    priceContainer.classList.add("prodTotal");
    //price calculator
    let price = document.createElement("p");
    price.innerText = "$" + j.price;
    subtotal = subtotal + Number(j.price); 
    document.getElementById("subtotal").innerText = subtotal;
    priceContainer.appendChild(price);
    let priceCalculator = j.price;
    productQuantity.addEventListener("change", function(){
        priceCalculator = j.price * productQuantity.value;
        price.innerText = "$" + priceCalculator;
        if (productQuantity.value == 2){
            subtotal = subtotal - Number(j.price) + priceCalculator;
            document.getElementById("subtotal").innerText = subtotal;
        } 
    });

    //delete
    let productDeleteContainer = document.createElement("div");
    productDeleteContainer.classList.add("cartSection");
    productDeleteContainer.classList.add("removeWrap");
    //delete product
    let deleteProduct = document.createElement("span");
    deleteProduct.classList.add('remove');
    deleteProduct.innerText = 'x';
    productDeleteContainer.appendChild(deleteProduct);
   

    
    containerList.appendChild(productContainer);
    containerList.appendChild(productQuantityContainer);
    containerList.appendChild(priceContainer);
    containerList.appendChild(productDeleteContainer);
    listedItem.appendChild(containerList);
    document.getElementById("cartWrap").appendChild(listedItem);

    deleteProduct.addEventListener("click", function(){
        let getCartProducts1 = localStorage.getItem("cart-products-saved");
        if(getCartProducts1 == null){
            console.log('nu avem iteme');
        }else{
            let cartProduct1 = getCartProducts1.split(',');
            console.log(cartProduct1);
            for(let v=0; v<cartProduct1.length; v++){
                if(cartProduct1[v].toLowerCase() == productNameContainer.innerText.toLowerCase()){
                    console.log("gasit");
                    cartProduct1.splice(v, 1);
                    console.log(cartProduct1);
                    localStorage.setItem("cart-products-saved", cartProduct1);
                }
            }
        }
        document.getElementById("cartWrap").removeChild(listedItem);
        if(document.getElementById("cartWrap").innerHTML == ""){   
        }else{
            console.log("cart plin");
        }
    });

    }
  }
 } 
}



//update total price

// let subtotal = document.getElementById("subtotal");
// console.log(subtotal.innerText);
// subtotal.innerText = 













// let getCartProducts1 = localStorage.getItem("cart-products-saved");
// if(getCartProducts1 == null){
//     console.log('nu avem iteme');
// }else{
//     let cartProduct1 = getCartProducts1.split(',');
//     console.log(cartProduct1);

//     for(let v=0; v<cartProduct1.length; v++){
//         console.log(cartProduct1[v]);
//         if(toLowerCase(cartProduct1[v]) == toLowerCase(productNameContainer.innerText)){
//             console.log("gasit")
//         }
//     }
// }