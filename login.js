function login() {
  const username = "maria";
  const password = "senha123";

  let usuario_informado = document.getElementById("username").value;
  let senha_informada = document.getElementById("password").value;

  if (usuario_informado == username && senha_informada == password) {
    let continuar_logado = document.getElementById("remember-me");
    alert(continuar_logado.checked);
    if (continuar_logado) {
      document.cookie = "logado=1";
    }

    window.location.href = "index.html";
  } else {
    alert("Login ou Senha Inválidas");
  }
}

function registrar() {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let repeatpassword = document.getElementById("repeat-password").value;

  if (password != repeatpassword) {
    alert("Você deve digitar duas senhas iguais");
  }
}
