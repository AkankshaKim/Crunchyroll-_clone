
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

class networking{
    constructor()
    {
        this.appconfig = {
            apiKey: "AIzaSyC7PqXixX7SlpOwzLNPOzy4Rm-HvBmHSl8",
            authDomain: "crunchyroll-clone-c8501.firebaseapp.com",
            projectId: "crunchyroll-clone-c8501",
            storageBucket: "crunchyroll-clone-c8501.appspot.com",
            messagingSenderId: "938254019867",
            appId: "1:938254019867:web:726750583cc44213ccb7be"
        }

        this.initapp = initializeApp(this.appconfig);
        this.auth = getAuth();
    }

    checkuser = async (email, password)=>{
        var userloginstatus = false;
        signInWithEmailAndPassword(this.auth, email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log(user)
        alert("everthing good");

        // ...
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if(errorCode == "auth/network-request-failed")
        {
          alert("check your internet connection");
        }
        else
        {
          alert("check your email or password");
    
        }
        
      });
    }

     createuser = (email, password)=>{
        createUserWithEmailAndPassword(this.auth, email, password).then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          alert("account created");
          // ...
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if(errorCode == "auth/email-already-in-use")
          {
            alert("useralready exists");
          }
          else if(errorCode == "auth/network-request-failed")
          {
            alert("check your internet connection");
          }
          // ..
        });
      }
}


export {networking};