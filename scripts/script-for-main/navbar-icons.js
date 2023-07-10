// Navbar Icons 
const navBar = document.querySelector('.nav-bar');
document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active');
    shopItems.classList.remove('active');
    searchBar.classList.remove('active');
    if(window.scrollY == 0){
        header.classList.toggle("sticky");
    }
}

const shopItems = document.querySelector('.shop-container');
document.querySelector('#shop-btn').onclick = () =>{
    shopItems.classList.toggle('active');
    navBar.classList.remove('active');
    searchBar.classList.remove('active');
    if(window.scrollY == 0){
        header.classList.toggle("sticky");
    }
}

const searchBar = document.querySelector('.search-bar');
document.querySelector('#search-btn').onclick = () =>{
    searchBar.classList.toggle('active');
    navBar.classList.remove('active');
    shopItems.classList.remove('active');
    if(window.scrollY == 0){
        header.classList.toggle("sticky");
    }
}

window.onscroll = () =>{
    navBar.classList.remove('active');
    shopItems.classList.remove('active');
    searchBar.classList.remove('active');
}
//--------------