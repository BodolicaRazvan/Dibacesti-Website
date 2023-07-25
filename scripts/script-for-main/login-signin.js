const formOpenBtn = document.querySelector("#form-open"),
  account = document.querySelector(".account-container"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide"),
  resultSignup = document.getElementById("result-signup"),
  resultLogin = document.getElementById("result-login");

  window.addEventListener("load", function() {
    const user = localStorage.getItem("logged");
    if(user !== null){
      document.getElementById("account-btn").innerHTML = user;
      document.getElementById("account-btn").style.cursor = "pointer";
    }


  });


document.getElementById("account-btn").addEventListener("click", () => {
  localStorage.removeItem("logged");
  localStorage.removeItem("cart-products-saved");
  if(document.getElementById("cart-container")!== null){
  document.getElementById("cart-container").innerHTML = "";
  }
  if(document.getElementById("total")!== null){
  document.getElementById("total").style.display = "none";
  }
  if(document.getElementById("pay")!== null){
  document.getElementById("pay").style.display = "none";
  }
  if(document.getElementById("empty-cart")!== null){
  document.getElementById("empty-cart").style.display = "block";
  }
  document.getElementById("account-btn").innerHTML= ''
  let i = document.createElement("i");
    i.classList.add("fa-solid");
    i.classList.add("fa-user");
    i.id='form-open';
    document.getElementById("account-btn").appendChild(i);
    document.getElementById("account-btn").addEventListener("click", () =>{
      account.classList.add("show")
      formContainer.classList.add("active");
      document.querySelector(".result-L").style.display = 'none'
     });
});

formOpenBtn.addEventListener("click", () =>{
 account.classList.add("show")
 formContainer.classList.add("active");
});
formCloseBtn.addEventListener("click", () => {account.classList.remove("show")});

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("fa-eye-slash","fa-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("fa-eye", "fa-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});


const formLogin = document.getElementById("form-login");
const formSignup = document.getElementById("form-singup");


formSignup.addEventListener('submit', e =>{
  e.preventDefault();

  const email = document.getElementById("email-signup").value;
  const pass = document.getElementById("password-signup").value;
  const passConfirm = document.getElementById("password-repeat-signup").value;
  const numbers =  /[0-9]/;

  if(pass.length<8){
    document.querySelector(".result-S").style.display = 'block';
    resultSignup.innerHTML = "*Parola trebuia sa aiba minim 8 caractere";
  }else if(!numbers.test(pass)){
    document.querySelector(".result-S").style.display = 'block';
    resultSignup.innerHTML = "*Parola trebuia sa aiba un numar";
  }else if(pass == passConfirm){
    let user = {
      email: email,
      password: pass,
    };

    const json = JSON.stringify(user);
    localStorage.setItem('username', json);
    formContainer.classList.remove("active");
  }else{
    document.querySelector(".result-S").style.display = 'block';
    resultSignup.innerHTML = "*Parola nu coincide";
  }



});
  
formLogin.addEventListener('submit', e =>{
  e.preventDefault();
  
  const email = document.getElementById("email-login").value;
  const pass = document.getElementById("password-login").value;
  const user = localStorage.getItem('username');
  const data = JSON.parse(user);

  if(user == null){
    document.querySelector(".result-L").style.display = 'block'
    resultLogin.innerHTML = "*Utilizatorul nu exista";
  }else if (email == data.email && pass == data.password){
    document.querySelector(".result-L").style.display = 'block'
    resultLogin.innerHTML = "*Conectare reusita";
    account.classList.remove("show");
    formOpenBtn.style.display= 'none';
    let userEmail = data.email.substring(0, data.email.lastIndexOf("@"));
    localStorage.setItem("logged", userEmail);
    document.getElementById("account-btn").innerHTML = userEmail;
  }else if( email != data.email){
    document.querySelector(".result-L").style.display = 'block'
    resultLogin.innerHTML = "*Email gresit";
  }else{
  document.querySelector(".result-L").style.display = 'block'
    resultLogin.innerHTML = "*Parola Gresita";
  }
});

