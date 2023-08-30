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
      let imgOptions = document.querySelectorAll('.img-opt');
        imgOptions.forEach(element => {
        element = element.style.border = '0'
      });
      document.querySelector("#img-option4").style.border = '2px solid var(--brown)';
      
      document.getElementById("titleQuick").innerText = i.productName;
      document.getElementById("priceQucik").innerText = "$" + i.price;
      document.getElementById("paraQucik").innerText = i.text;
      document.getElementById("img-option-main").src = i.image;
      document.getElementById("img-option1").src = i.imageOption1;
      document.getElementById("img-option2").src = i.imageOption2;
      document.getElementById("img-option3").src = i.imageOption3;
      document.getElementById("img-option4").src = i.image;
      let addToCard = document.getElementById("add-to-cart");
  
      addToCard.addEventListener("click", () =>{
      let getCartProducts = localStorage.getItem("cart-products-saved");
      if(getCartProducts !== null){
        let cartProduct = getCartProducts.split(',');
        cartProduct.push(i.productName);
        const user = localStorage.getItem("logged");
        if(user !== null){
        localStorage.setItem("cart-products-saved", cartProduct);
        }else{
          localStorage.setItem("cart-products-saved", null);
        }
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
        deleteItem.addEventListener("click", function(){
          document.getElementById("get-price").innerHTML = Number(document.getElementById("get-price").innerHTML)-Number(i.price);
          let getCartProducts1 = localStorage.getItem("cart-products-saved");
          if(getCartProducts1 == null){
              console.log('nu avem iteme');
          }else{
              let cartProduct1 = getCartProducts1.split(',');
              for(let v=0; v<cartProduct1.length; v++){
                  if(cartProduct1[v].toLowerCase() == headingItem.innerText.toLowerCase()){
                      cartProduct1.splice(v, 1);
                      localStorage.setItem("cart-products-saved", cartProduct1);
                      break;
                  }
              }
          }
          document.getElementById("cart-container").removeChild(shopItem);
          if(document.getElementById("cart-container").innerHTML == ""){
            document.getElementById("total").style.display = "none";
            document.getElementById("pay").style.display = "none";
            document.getElementById("empty-cart").style.display = "block";
          }else{
            console.log("cart plin");
          }
          });

        // deleteItem.addEventListener("click", () => {
        //   document.getElementById("get-price").innerHTML = Number(document.getElementById("get-price").innerHTML)-Number(i.price); 
        //   document.getElementById("cart-container").removeChild(shopItem);
        //   let getCartProducts = localStorage.getItem("cart-products-saved");
        //     let cartProduct = getCartProducts.split(',');
        //     console.log(cartProduct);
        //     const newCartProduct = cartProduct.toSpliced(i, 1);
        //     console.log(newCartProduct);
        //   if(document.getElementById("cart-container").innerHTML == ""){
        //     localStorage.removeItem("cart-products-saved");
        //     document.getElementById("total").style.display = "none";
        //     document.getElementById("pay").style.display = "none";
        //     document.getElementById("empty-cart").style.display = "block";
        //   }else{
        //     console.log("cart plin");
        //   }
        // });

      }else{
        let cartProduct = getCartProducts;
        cartProduct = i.productName;
        const user = localStorage.getItem("logged");
      if(user !== null){
        localStorage.setItem("cart-products-saved", cartProduct);
      }else{
        localStorage.setItem("cart-products-saved", null);
      }
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
      deleteItem.addEventListener("click", function(){
        document.getElementById("get-price").innerHTML = Number(document.getElementById("get-price").innerHTML)-Number(i.price);
        let getCartProducts1 = localStorage.getItem("cart-products-saved");
        if(getCartProducts1 == null){
            console.log('nu avem iteme');
        }else{
            let cartProduct1 = getCartProducts1.split(',');
            for(let v=0; v<cartProduct1.length; v++){
                if(cartProduct1[v].toLowerCase() == headingItem.innerText.toLowerCase()){
                    cartProduct1.splice(v, 1);
                    localStorage.setItem("cart-products-saved", cartProduct1);
                    break;
                }
            }
        }
        document.getElementById("cart-container").removeChild(shopItem);
        if(document.getElementById("cart-container").innerHTML == ""){
          document.getElementById("total").style.display = "none";
          document.getElementById("pay").style.display = "none";
          document.getElementById("empty-cart").style.display = "block";
        }else{
          console.log("cart plin");
        }
        });

      // deleteItem.addEventListener("click", () => {
      //   document.getElementById("get-price").innerHTML = Number(document.getElementById("get-price").innerHTML)-Number(i.price); 
      //   document.getElementById("cart-container").removeChild(shopItem);
      //   let getCartProducts = localStorage.getItem("cart-products-saved");
      //     let cartProduct = getCartProducts.split(',');
      //     console.log(cartProduct);
      //     const newCartProduct = cartProduct.toSpliced(i, 1);
      //     console.log(newCartProduct);
      //   if(document.getElementById("cart-container").innerHTML == ""){
      //     localStorage.removeItem("cart-products-saved");
      //     document.getElementById("total").style.display = "none";
      //     document.getElementById("pay").style.display = "none";
      //     document.getElementById("empty-cart").style.display = "block";
      //   }else{
      //     console.log("cart plin");
      //   }
      // });

      }
    });

  });


    //ADD TO CART
    a1.addEventListener("click", () => {
      let getCartProducts = localStorage.getItem("cart-products-saved");
      if(getCartProducts !== null){
      let cartProduct = getCartProducts.split(',');
      cartProduct.push(i.productName);
      const user = localStorage.getItem("logged");
      if(user !== null){
        localStorage.setItem("cart-products-saved", cartProduct);
      }else{
        localStorage.setItem("cart-products-saved", null);
      }
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
        deleteItem.addEventListener("click", function(){
          document.getElementById("get-price").innerHTML = Number(document.getElementById("get-price").innerHTML)-Number(i.price);
          let getCartProducts1 = localStorage.getItem("cart-products-saved");
          if(getCartProducts1 == null){
              console.log('nu avem iteme');
          }else{
              let cartProduct1 = getCartProducts1.split(',');
              for(let v=0; v<cartProduct1.length; v++){
                  if(cartProduct1[v].toLowerCase() == headingItem.innerText.toLowerCase()){
                      cartProduct1.splice(v, 1);
                      localStorage.setItem("cart-products-saved", cartProduct1);
                      break;
                  }
              }
          }
          document.getElementById("cart-container").removeChild(shopItem);
          if(document.getElementById("cart-container").innerHTML == ""){
            document.getElementById("total").style.display = "none";
            document.getElementById("pay").style.display = "none";
            document.getElementById("empty-cart").style.display = "block";
          }else{
            console.log("cart plin");
          }
          });

        // deleteItem.addEventListener("click", () => {
        // document.getElementById("get-price").innerHTML = Number(document.getElementById("get-price").innerHTML)-Number(i.price); 
        // document.getElementById("cart-container").removeChild(shopItem);
        // let getCartProducts = localStorage.getItem("cart-products-saved");
        // let cartProduct = getCartProducts.split(',');
        // console.log(cartProduct);
        // const newCartProduct = cartProduct.toSpliced(i, 1);
        // console.log(newCartProduct);
        // localStorage.setItem("cart-products-saved", newCartProduct)
        // if(document.getElementById("cart-container").innerHTML == ""){
        //   localStorage.removeItem("cart-products-saved");
        //   document.getElementById("total").style.display = "none";
        //   document.getElementById("pay").style.display = "none";
        //   document.getElementById("empty-cart").style.display = "block";
        // }else{
        //   console.log("cart plin");
        // }
        // });

      }else{
        let cartProduct = getCartProducts;
        cartProduct = i.productName;
        const user = localStorage.getItem("logged");
      if(user !== null){
        localStorage.setItem("cart-products-saved", cartProduct);
      }else{
        localStorage.setItem("cart-products-saved", null);
      }
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
      deleteItem.addEventListener("click", function(){
        document.getElementById("get-price").innerHTML = Number(document.getElementById("get-price").innerHTML)-Number(i.price);
        let getCartProducts1 = localStorage.getItem("cart-products-saved");
        if(getCartProducts1 == null){
            console.log('nu avem iteme');
        }else{
            let cartProduct1 = getCartProducts1.split(',');
            for(let v=0; v<cartProduct1.length; v++){
                if(cartProduct1[v].toLowerCase() == headingItem.innerText.toLowerCase()){
                    cartProduct1.splice(v, 1);
                    localStorage.setItem("cart-products-saved", cartProduct1);
                    break;
                }
            }
        }
        document.getElementById("cart-container").removeChild(shopItem);
        if(document.getElementById("cart-container").innerHTML == ""){
          document.getElementById("total").style.display = "none";
          document.getElementById("pay").style.display = "none";
          document.getElementById("empty-cart").style.display = "block";
        }else{
          console.log("cart plin");
        }
        });



      // deleteItem.addEventListener("click", () => {
      // document.getElementById("get-price").innerHTML = Number(document.getElementById("get-price").innerHTML)-Number(i.price); 
      // document.getElementById("cart-container").removeChild(shopItem);
      // let getCartProducts = localStorage.getItem("cart-products-saved");
      // let cartProduct = getCartProducts.split(',');
      // console.log(cartProduct);
      // const newCartProduct = cartProduct.toSpliced(i, 1);
      // console.log(newCartProduct);
      // localStorage.setItem("cart-products-saved", newCartProduct)
      // if(document.getElementById("cart-container").innerHTML == ""){
      //   localStorage.removeItem("cart-products-saved");
      //   document.getElementById("total").style.display = "none";
      //   document.getElementById("pay").style.display = "none";
      //   document.getElementById("empty-cart").style.display = "block";
      // }else{
      //   console.log("cart plin");
      // }
      // });
    
      }
    });
 
//----------------------------------------------------------------------------------------------------------------------------------   

    //ADD TO FAVORITE
    a2.addEventListener("click", () => {
      a2.style.color='red';
      if(document.querySelector('#favorite').innerHTML === ""){
        document.querySelector('.empty-favorite').style.display = 'none';
      }
      let testout = localStorage.getItem("test");
      if(testout.includes(i.productName)){
        alert('Produsul este deja la favorite');
      }else{
        let testout = localStorage.getItem("test");
        if(testout !== null){
          let words = testout.split(',');
          words.push(i.productName);
          const user = localStorage.getItem("logged");
          if(user !== null){
            localStorage.setItem("test", words);
          }else{
            localStorage.setItem("test", null);
          }
        }else{
          let words = testout;
          words = i.productName;
          const user = localStorage.getItem("logged");
          if(user !== null){
            localStorage.setItem("test", words);
          }else{
            localStorage.setItem("test", null);
          }
        }

    //box 
    let box = document.createElement("div");
    box.classList.add("box", i.category, i.newProducts, i.sales);
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
    a2.classList.add("fa-x");
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
    document.getElementById("favorite").appendChild(box);
    
      
     //QUICK VIEW
     a3.addEventListener("click", () => {
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
      let imgOptions = document.querySelectorAll('.img-opt');
        imgOptions.forEach(element => {
        element = element.style.border = '0'
      });
      document.querySelector("#img-option4").style.border = '2px solid var(--brown)';
      
      document.getElementById("titleQuick").innerText = i.productName;
      document.getElementById("priceQucik").innerText = "$" + i.price;
      document.getElementById("paraQucik").innerText = i.text;
      document.getElementById("img-option-main").src = i.image;
      document.getElementById("img-option1").src = i.imageOption1;
      document.getElementById("img-option2").src = i.imageOption2;
      document.getElementById("img-option3").src = i.imageOption3;
      document.getElementById("img-option4").src = i.image;
      let addToCard = document.getElementById("add-to-cart");

      addToCard.addEventListener("click", () =>{
      let getCartProducts = localStorage.getItem("cart-products-saved");
      if(getCartProducts !== null){
      let cartProduct = getCartProducts.split(',');
      cartProduct.push(i.productName);
      const user = localStorage.getItem("logged");
      if(user !== null){
        localStorage.setItem("cart-products-saved", cartProduct);
      }else{
        localStorage.setItem("cart-products-saved", null);
      }
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
        deleteItem.addEventListener("click", function(){
          document.getElementById("get-price").innerHTML = Number(document.getElementById("get-price").innerHTML)-Number(i.price);
          let getCartProducts1 = localStorage.getItem("cart-products-saved");
          if(getCartProducts1 == null){
              console.log('nu avem iteme');
          }else{
              let cartProduct1 = getCartProducts1.split(',');
              for(let v=0; v<cartProduct1.length; v++){
                  if(cartProduct1[v].toLowerCase() == headingItem.innerText.toLowerCase()){
                      cartProduct1.splice(v, 1);
                      localStorage.setItem("cart-products-saved", cartProduct1);
                      break;
                  }
              }
          }
          document.getElementById("cart-container").removeChild(shopItem);
          if(document.getElementById("cart-container").innerHTML == ""){
            document.getElementById("total").style.display = "none";
            document.getElementById("pay").style.display = "none";
            document.getElementById("empty-cart").style.display = "block";
          }else{
            console.log("cart plin");
          }
          });



        // deleteItem.addEventListener("click", () => {
        //   document.getElementById("get-price").innerHTML = Number(document.getElementById("get-price").innerHTML)-Number(i.price); 
        //   document.getElementById("cart-container").removeChild(shopItem);
        //   let getCartProducts = localStorage.getItem("cart-products-saved");
        //   let cartProduct = getCartProducts.split(',');
        //   console.log(cartProduct);
        //   const newCartProduct = cartProduct.toSpliced(i, 1);
        //   console.log(newCartProduct);
        //   localStorage.setItem("cart-products-saved", newCartProduct)
        //   if(document.getElementById("cart-container").innerHTML == ""){
        //     localStorage.removeItem("cart-products-saved");
        //     document.getElementById("total").style.display = "none";
        //     document.getElementById("pay").style.display = "none";
        //     document.getElementById("empty-cart").style.display = "block";
        //   }else{
        //     console.log("cart plin");
        //   }
        // });

        }else{
          let cartProduct = getCartProducts;
          cartProduct = i.productName;
          const user = localStorage.getItem("logged");
      if(user !== null){
        localStorage.setItem("cart-products-saved", cartProduct);
      }else{
        localStorage.setItem("cart-products-saved", null);
      }
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
        deleteItem.addEventListener("click", function(){
          document.getElementById("get-price").innerHTML = Number(document.getElementById("get-price").innerHTML)-Number(i.price);
          let getCartProducts1 = localStorage.getItem("cart-products-saved");
          if(getCartProducts1 == null){
              console.log('nu avem iteme');
          }else{
              let cartProduct1 = getCartProducts1.split(',');
              for(let v=0; v<cartProduct1.length; v++){
                  if(cartProduct1[v].toLowerCase() == headingItem.innerText.toLowerCase()){
                      cartProduct1.splice(v, 1);
                      localStorage.setItem("cart-products-saved", cartProduct1);
                      break;
                  }
              }
          }
          document.getElementById("cart-container").removeChild(shopItem);
          if(document.getElementById("cart-container").innerHTML == ""){
            document.getElementById("total").style.display = "none";
            document.getElementById("pay").style.display = "none";
            document.getElementById("empty-cart").style.display = "block";
          }else{
            console.log("cart plin");
          }
          });



        // deleteItem.addEventListener("click", () => {
        //   document.getElementById("get-price").innerHTML = Number(document.getElementById("get-price").innerHTML)-Number(i.price); 
        //   document.getElementById("cart-container").removeChild(shopItem);
        //   let getCartProducts = localStorage.getItem("cart-products-saved");
        //   let cartProduct = getCartProducts.split(',');
        //   console.log(cartProduct);
        //   const newCartProduct = cartProduct.toSpliced(i, 1);
        //   console.log(newCartProduct);
        //   localStorage.setItem("cart-products-saved", newCartProduct)
        //   if(document.getElementById("cart-container").innerHTML == ""){
        //     localStorage.removeItem("cart-products-saved");
        //     document.getElementById("total").style.display = "none";
        //     document.getElementById("pay").style.display = "none";
        //     document.getElementById("empty-cart").style.display = "block";
        //   }else{
        //     console.log("cart plin");
        //   }
        // });

        }
      });
    
    });


     //ADD TO CART
     a1.addEventListener("click", () => {
      let getCartProducts = localStorage.getItem("cart-products-saved");
      if(getCartProducts !== null){
        let cartProduct = getCartProducts.split(',');
      cartProduct.push(i.productName);
      const user = localStorage.getItem("logged");
      if(user !== null){
        localStorage.setItem("cart-products-saved", cartProduct);
      }else{
        localStorage.setItem("cart-products-saved", null);
      }
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
      deleteItem.addEventListener("click", function(){
        document.getElementById("get-price").innerHTML = Number(document.getElementById("get-price").innerHTML)-Number(i.price);
        let getCartProducts1 = localStorage.getItem("cart-products-saved");
        if(getCartProducts1 == null){
            console.log('nu avem iteme');
        }else{
            let cartProduct1 = getCartProducts1.split(',');
            for(let v=0; v<cartProduct1.length; v++){
                if(cartProduct1[v].toLowerCase() == headingItem.innerText.toLowerCase()){
                    cartProduct1.splice(v, 1);
                    localStorage.setItem("cart-products-saved", cartProduct1);
                    break;
                }
            }
        }
        document.getElementById("cart-container").removeChild(shopItem);
        if(document.getElementById("cart-container").innerHTML == ""){
          document.getElementById("total").style.display = "none";
          document.getElementById("pay").style.display = "none";
          document.getElementById("empty-cart").style.display = "block";
        }else{
          console.log("cart plin");
        }
        });



      // deleteItem.addEventListener("click", () => {
      // document.getElementById("get-price").innerHTML = Number(document.getElementById("get-price").innerHTML)-Number(i.price); 
      // document.getElementById("cart-container").removeChild(shopItem);
      // let getCartProducts = localStorage.getItem("cart-products-saved");
      // let cartProduct = getCartProducts.split(',');
      // console.log(cartProduct);
      // const newCartProduct = cartProduct.toSpliced(i, 1);
      // console.log(newCartProduct);
      // localStorage.setItem("cart-products-saved", newCartProduct)
      // if(document.getElementById("cart-container").innerHTML == ""){
      //   localStorage.removeItem("cart-products-saved");
      //   document.getElementById("total").style.display = "none";
      //   document.getElementById("pay").style.display = "none";
      //   document.getElementById("empty-cart").style.display = "block";
      // }else{
      //   console.log("cart plin");
      // }
      // });

      }else{
        let cartProduct = getCartProducts;
        cartProduct = i.productName;
        const user = localStorage.getItem("logged");
      if(user !== null){
        localStorage.setItem("cart-products-saved", cartProduct);
      }else{
        localStorage.setItem("cart-products-saved", null);
      }
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
      deleteItem.addEventListener("click", function(){
        document.getElementById("get-price").innerHTML = Number(document.getElementById("get-price").innerHTML)-Number(i.price);
        let getCartProducts1 = localStorage.getItem("cart-products-saved");
        if(getCartProducts1 == null){
            console.log('nu avem iteme');
        }else{
            let cartProduct1 = getCartProducts1.split(',');
            for(let v=0; v<cartProduct1.length; v++){
                if(cartProduct1[v].toLowerCase() == headingItem.innerText.toLowerCase()){
                    cartProduct1.splice(v, 1);
                    localStorage.setItem("cart-products-saved", cartProduct1);
                    break;
                }
            }
        }
        document.getElementById("cart-container").removeChild(shopItem);
        if(document.getElementById("cart-container").innerHTML == ""){
          document.getElementById("total").style.display = "none";
          document.getElementById("pay").style.display = "none";
          document.getElementById("empty-cart").style.display = "block";
        }else{
          console.log("cart plin");
        }
        });



      // deleteItem.addEventListener("click", () => {
      // document.getElementById("get-price").innerHTML = Number(document.getElementById("get-price").innerHTML)-Number(i.price); 
      // document.getElementById("cart-container").removeChild(shopItem);
      // let getCartProducts = localStorage.getItem("cart-products-saved");
      // let cartProduct = getCartProducts.split(',');
      // console.log(cartProduct);
      // const newCartProduct = cartProduct.toSpliced(i, 1);
      // console.log(newCartProduct);
      // localStorage.setItem("cart-products-saved", newCartProduct)
      // if(document.getElementById("cart-container").innerHTML == ""){
      //   localStorage.removeItem("cart-products-saved");
      //   document.getElementById("total").style.display = "none";
      //   document.getElementById("pay").style.display = "none";
      //   document.getElementById("empty-cart").style.display = "block";
      // }else{
      //   console.log("cart plin");
      // }
      // });

      } 

    });


     //Remove from favorite
     a2.addEventListener("click", () => {




            document.getElementById("favorite").removeChild(box);
            let testout = localStorage.getItem("test");
            let words = testout.split(',');
            for(let v=0; v<words.length; v++){
                if(words[v].toLowerCase() == headingItem.innerText.toLowerCase()){
                    words.splice(v, 1);
                    localStorage.setItem("cart-products-saved", words);
                    break;
                }
            }





      // document.getElementById("favorite").removeChild(box);
      // let testout = localStorage.getItem("test");
      // let words = testout.split(',');
      // const newCartProduct = words.toSpliced(i, 1);
      // localStorage.setItem("cart-products-saved", newCartProduct)
    });

    }
    

  });  

}

}


function removeCards(){
    document.getElementById('products').textContent = '';
}