// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7PqXixX7SlpOwzLNPOzy4Rm-HvBmHSl8",
  authDomain: "crunchyroll-clone-c8501.firebaseapp.com",
  projectId: "crunchyroll-clone-c8501",
  storageBucket: "crunchyroll-clone-c8501.appspot.com",
  messagingSenderId: "938254019867",
  appId: "1:938254019867:web:726750583cc44213ccb7be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    checkuser();
});


function checkuser(){
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("everthing good");
    // ...
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("check your email or password")
  });
}