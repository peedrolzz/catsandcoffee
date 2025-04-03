//Seleciona o elemento HTML com o ID "container" e o armazena na constante container.
const container = document.getElementById("container");
//Seleciona o elemento HTML com o ID "register" e o armazena na constante registerBtn.
const registerBtn = document.getElementById("register");
//Faz o mesmo so que com o login
const loginBtn = document.getElementById("login");

//Adiciona um "ouvinte" de evento ao botão de registro, e quando o botão é clicado, a funcao dentro dele sera executada
registerBtn.addEventListener("click", () => {
  //adiciona a classe ativa ao container1
  container1.classList.add("active");
});

//faz o mesmo mas para o botao login
loginBtn.addEventListener("click", () => {
  container1.classList.remove("active");
});

//animacao do aos init
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    easing: "ease-in-out",
    duration: 1000,
    once: true,
  });
});
