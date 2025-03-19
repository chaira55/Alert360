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

  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let fechaNacimiento = document.getElementById("fechaNacimiento").value;

  if (!nombre || !fechaNacimiento) {
    Swal.fire({
      icon: "error",
      title: "Campos obligatorios",
      text: "Por favor, completa los campos",
    });
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      Swal.fire({
        title: "Usuario Registrado con exito",
        icon: "success",
        draggable: true
      });
    })
    .catch((error) => {
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Hay un error...",
        text: errorMessage,
      });
    });
});


