// Navbar Sticky Effect
const header = document.querySelector("header")
header.classList.remove("sticky");

window.addEventListener("scroll", function(){
  header.classList.toggle("sticky", window.scrollY >0);
});
//-------------


