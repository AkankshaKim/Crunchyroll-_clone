import { initializeApp, getApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getDatabase, ref as dbref, child, get } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js";

import { getStorage, ref as sref, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";

class authentication {
  constructor() {
    this.appconfig = {
      apiKey: "AIzaSyC7PqXixX7SlpOwzLNPOzy4Rm-HvBmHSl8",
      authDomain: "crunchyroll-clone-c8501.firebaseapp.com",
      databaseURL: "https://crunchyroll-clone-c8501-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "crunchyroll-clone-c8501",
      storageBucket: "crunchyroll-clone-c8501.appspot.com",
      messagingSenderId: "938254019867",
      appId: "1:938254019867:web:726750583cc44213ccb7be"
    }

    this.initapp = initializeApp(this.appconfig);
    this.auth = getAuth();
  }

  checkuser = (email, password) => {
    signInWithEmailAndPassword(this.auth, email, password).then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // console.log(user);
      alert("everthing good");
      // ...
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == "auth/network-request-failed") {
        alert("check your internet connection");
      }
      else {
        alert("check your email or password");

      }

    });
  }

  createuser = (email, password) => {
    createUserWithEmailAndPassword(this.auth, email, password).then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("account created");
      // ...
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == "auth/email-already-in-use") {
        alert("useralready exists");
      }
      else if (errorCode == "auth/network-request-failed") {
        alert("check your internet connection");
      }
      // ..
    });
  }

  userstatus = (user) => {
    return new Promise((ressolve, reject) => {
      if (user) {
        ressolve({ loggIn: true, user: user });
      }
      else {
        ressolve({ loggIn: false, user: user });
      }
    });
  }

}
class database extends authentication {
  constructor() {
    super();
    this.dbRef = dbref(getDatabase());
  }
  fetchdata = (name) => {
    // var rname = "hello";
    return new Promise((resolve, reject) => {
      get(child(this.dbRef, name)).then((snapshot) => {
        if (snapshot.exists()) {
          var value = snapshot.val();
          resolve(value);
        } else {
          reject("No data available");
        }
      }).catch((error) => {
        console.error(error);
        resolve(error);
      });
    });
  }
  storageget = (path) => {
    return new Promise((resolve, reject) => {
      // Initialize Cloud Storage and get a reference to the service
      const storage = getStorage(this.initapp);
      const storageref = sref(storage, path);
      const links = [];
  
      listAll(storageref).then((res) => {
          const downloadPromises = res.items.map((itemRef) => {
            return getDownloadURL(itemRef).then((url) => {
              // Push the download URL to the array
              links.push(url);
            });
          });
          // Wait for all download URLs to be retrieved
          return Promise.all(downloadPromises);
        })
        .then(() => {
          resolve(links);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  
}
class networking extends database {
}


export { networking, database };