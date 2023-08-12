document.addEventListener("DOMContentLoaded", function () {
  const registroForm = document.getElementById("registrationForm");
  const registrationMessage = document.getElementById("registrationMessage");
  const nombreU = document.getElementById("registeredUserName");
  const correoExistenteMessage = document.getElementById(
    "correoExistenteMessage"
  );
  registroForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("logname").value;
    const correo = document.getElementById("logemail").value;
    const contraseña = document.getElementById("logpass").value;

    const usuario = {
      name: nombre,
      email: correo,
      password: contraseña,
    };

    const usuariosRegistrados = JSON.parse(localStorage.getItem("users")) || [];

    // Verificar si el correo ya está registrado
    const correoRegistrado = usuariosRegistrados.find(
      (user) => user.email === correo
    );

    if (!correoRegistrado) {
      usuariosRegistrados.push(usuario);
      localStorage.setItem("users", JSON.stringify(usuariosRegistrados));

      // Mostrar mensaje de registro exitoso
      nombreU.textContent = nombre;
      registrationMessage.style.display = "block";
      setTimeout(() => {
        registrationMessage.style.display = "none";
      }, 3000);

      registroForm.reset();
    } else {
      correoExistenteMessage.style.display = "block";
      setTimeout(() => {
        correoExistenteMessage.style.display = "none";
      }, 3000);
    }
  });
});
