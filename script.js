// Importaciones de Firebase 
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBrfhLntEZgcotyqDv2WdmmjBZ5vy296E0",
  authDomain: "alert360-project.firebaseapp.com",
  projectId: "alert360-project",
  storageBucket: "alert360-project.appspot.com",
  messagingSenderId: "1054354710783",
  appId: "1:1054354710783:web:69b9585e147eaf52a12cca",
};

//Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

submit.addEventListener("click", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const fechaNacimiento = document.getElementById("fechaNacimiento");

  if (!nombre.value || !fechaNacimiento.value) {
    Swal.fire({
      icon: "error",
      title: "Campos obligatorios",
      text: "Por favor, completa los campos",
    });
    return;
  }

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      Swal.fire({
        title: "Usuario Registrado con exito",
        icon: "success",
        draggable: true
      });
      nombre.value = "";
      email.value = "";
      password.value = "";
      fechaNacimiento.value = "";
    })
    .catch((error) => {
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Hay un error...",
        text: errorMessage,
      });
      nombre.value = "";
      email.value = "";
      password.value = "";
      fechaNacimiento.value = "";
    });
});


