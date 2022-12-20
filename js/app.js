let data = [];
let dataValidate = [];
const formulario = document.getElementById("form_sign");
const formulario_login = document.getElementById("form_login");
const email = document.getElementById("email");
const user_name = document.getElementById("user_name");
const user_lastname = document.getElementById("user_lastname");
const password = document.getElementById("password");

//  Validate data
const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const result = regex.test(email);
  if (result) {
    data.push(email);
    dataValidate.push('email');
  } else { "Email incorrecto"; }
  console.log(data);
};

const validateName = (name) => {
  const regex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  const result = regex.test(name);
  if (result) {
    data.push(name);
    dataValidate.push('name');
  } else {
    console.log("Nombre incorrecto");
  }
  console.log(data);
};

const validateLastname = (lastname) => {
  const regex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  const result = regex.test(lastname);
  if (result) {
    data.push(lastname);
    dataValidate.push('lastname');
  } else { console.log("Apellido incorrecto"); }
  console.log(data);
};

const validatePassword = (password) => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
  const result = regex.test(password);
  if (result) {
    data.push(password);
    dataValidate.push('password');
  } else { 
    console.log("Contraseña incorrecta");
   }
  console.log(data);
};

//  Read de form
window.document.addEventListener("change", (e) => {
  e.preventDefault();

  if (e.target.matches("#email")) validateEmail(e.target.value);
  if (e.target.matches("#user_name")) validateName(e.target.value);
  if (e.target.matches("#user_lastname")) validateLastname(e.target.value);
  if (e.target.matches("#password")) validatePassword(e.target.value);
});

// Save data in local storage
formulario.addEventListener("submit", (e) => { 
  e.preventDefault(); 
  console.log(dataValidate);
  console.log(data);
  localStorage.setItem(`${dataValidate[3]}`, JSON.stringify(data[3]));
  for (let i = 0; i < localStorage.length; i++) {
    if (dataValidate.length === 4 && localStorage.key(i) != data[3]) {
      console.log("Datos guardados");
      console.log(data);
    }else if (localStorage.key(i) === data[3]) {
      console.log("La contraseña ya existe");
    } 
  }
  email.value = "";
  user_name.value = "";
  user_lastname.value = "";
  password.value = "";
  data = [];
  dataValidate = [];
});


// Read login
const login = document.getElementById("form_login");

window.addEventListener("change", (e) => {
  e.preventDefault();
  if (e.target.matches("#email_login")) validateEmail(e.target.value);
  if (e.target.matches("#password_login")) validatePassword(e.target.value);
} );

// Login
formulario_login.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(dataValidate);
  console.log(data);
  for (let i = 0; i < localStorage.length; i++) {
    if (dataValidate.length === 2 && localStorage.key(i) === data[1]) {
      console.log("Datos correctos");
      console.log(data);
    } else if (localStorage.key(i) != data[1]) {
      console.log("Datos incorrectos");
    }
  }
  email.value = "";
  user_name.value = "";
  user_lastname.value = "";
  password.value = "";
  data = [];
  dataValidate = [];
} );