window.addEventListener("load", function() {
  localStorage.removeItem("categories");
});


function filterProductA(val){
  localStorage.setItem("categories", val);
  window.location.replace("/pages/products.html#inside");
 
}


