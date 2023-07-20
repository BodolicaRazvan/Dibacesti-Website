const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const addQuant = document.getElementById("add");
const removeQuant = document.getElementById("remove");
const countQuant = document.getElementById("count");



// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  shopItems.classList.remove('active');
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

















// switch img in modal 
function imgChange(image) {
  document.querySelector('.slide').src = image;
}

function change(change) {
  const line = document.querySelector('.home');
  line.style.background = change;
}


