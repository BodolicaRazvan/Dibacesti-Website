// Navbar Icons 


const navBar = document.querySelector('.nav-bar');
document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active');
    header.classList.toggle("sticky");
}

const shopItems = document.querySelector('.shop-container');
if(document.querySelector('#shop-btn')!== null){
document.querySelector('#shop-btn').onclick = () =>{
    shopItems.classList.toggle('active');
    navBar.classList.remove('active');
    searchBar.classList.remove('active');
    if(window.scrollY == 0){
        header.classList.toggle("sticky");
    }
}
}

const searchBar = document.querySelector('.search-bar');
if(document.querySelector('#shop-btn')!== null){
document.querySelector('#search-btn').onclick = () =>{
    searchBar.classList.toggle('active');
    navBar.classList.remove('active');
    shopItems.classList.remove('active');
    if(window.scrollY == 0){
        header.classList.toggle("sticky");
    }
}
}

if(document.querySelector('#shop-btn')!== null){
document.querySelector('#heart-btn').onclick = () =>{
    window.location.href = "/pages/products.html#favorite";
    document.querySelector('.container-favorite').style.display = 'block';
    if(document.querySelector('#favorite').innerHTML === ""){
        document.querySelector('.empty-favorite').style.display = 'block';
    }
}
}

window.onscroll = () =>{
    navBar.classList.remove('active');
    if(shopItems !==null){
    shopItems.classList.remove('active');
    }
    if(searchBar !==null){
    searchBar.classList.remove('active');
    }
}
//--------------
