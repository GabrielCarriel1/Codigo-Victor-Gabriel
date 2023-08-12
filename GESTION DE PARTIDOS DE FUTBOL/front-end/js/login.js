document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("id-logemail").value;
    const password = document.getElementById("id-logpass").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      sessionStorage.setItem("login_iniciado", JSON.stringify(user));
      sessionStorage.setItem("Correo", user.email);
      sessionStorage.setItem("contraseña", user.password);
      alert("Inicio de sesión exitoso. ¡Bienvenido!", +user);
      window.location = "formulario.html";
    } else {
      alert(
        "Las credenciales de inicio de sesión son incorrectas. Inténtalo de nuevo."
      );
    }
    loginForm.reset();
  });
});
