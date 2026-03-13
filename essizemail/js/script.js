const form = document.getElementById("cadastroForm");

if(form){
form.addEventListener("submit", function(event){

event.preventDefault();

const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

const mensagem = document.getElementById("mensagem");

console.log(email);
console.log(senha);

const usuario = {
      email: email,
      senha: senha

};

if(senha.length <6){
    mensagem.textContent = "✖ Precisa no mínimo de 6 caracteres";
    mensagem.className = "mensagem erro";
    return;
}
    else {
    localStorage.setItem(email, JSON.stringify(usuario));

    mensagem.textContent = "✔ Você foi cadastrado. Redirecionando para tela de Login...";
    mensagem.className = "mensagem sucesso";
}

setTimeout(function(){
window.location.href = "login.html";
}, 3000);

});

}

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit", function(event){

event.preventDefault();

const email = document.getElementById("loginEmail").value;
const senha = document.getElementById("loginSenha").value;

const mensagem = document.getElementById("mensagem");

const usuarioSalvo = localStorage.getItem(email);

if(!usuarioSalvo){
     mensagem.textContent = "✖ E-mail ou senha digitados não existem";
     mensagem.className = "mensagem erro";
     return;
}

const usuario = JSON.parse(usuarioSalvo);

if(usuario.senha === senha){
     mensagem.textContent = "✔ Sucesso! Redirecionando...";
     mensagem.className = "mensagem sucesso";

     setTimeout(function(){
    window.location.href = "https://www.youtube.com/shorts/pwkANjxHuVU";
}, 3000);

}else{
     mensagem.textContent = "✖ E-mail ou senha digitados não existem";
     mensagem.className = "mensagem erro";
}

});

}