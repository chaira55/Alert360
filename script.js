// Importaciones de Firebase 
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import {getFirestore,doc,setDoc} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";


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
const db = getFirestore(app);


// Formulario

submit.addEventListener("click", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const submit = document.getElementById("submit");

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      Swal.fire({
        title: "Usuario Registrado con exito",
        icon: "success",
        draggable: true
      });

      setTimeout(() => {
        window.location.href = "dashboard.html"
      }, 3000);
      
    })

    .catch((error) => {
      const errorcode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Hay un error...",
        text: errorMessage,
      });
    });
});


