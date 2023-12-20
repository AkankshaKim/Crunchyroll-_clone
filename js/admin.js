import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";
import { getDatabase, ref as nameref, set } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";


const appconfig = {
  apiKey: "AIzaSyC7PqXixX7SlpOwzLNPOzy4Rm-HvBmHSl8",
  authDomain: "crunchyroll-clone-c8501.firebaseapp.com",
  databaseURL: "https://crunchyroll-clone-c8501-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crunchyroll-clone-c8501",
  storageBucket: "crunchyroll-clone-c8501.appspot.com",
  messagingSenderId: "938254019867",
  appId: "1:938254019867:web:726750583cc44213ccb7be"
};

const app = initializeApp(appconfig);
const storage = getStorage(app);
const database = getDatabase(app);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
  const imageInput = document.getElementById("imageInput");
  const adminNameInput = document.getElementById("adminNameInput");
  const descriptionInput = document.getElementById("descriptionInput");
  const uploadButton = document.getElementById("uploadButton");
  const siginbtn = document.getElementById("siginbtn");

  var currenturl = window.location.href;
  if (currenturl.endsWith("admin.html")) {
    uploadButton.addEventListener("click", () => {
      const selectedFiles = imageInput.files;
      const fileToUpload = selectedFiles[0];
      const adminName = adminNameInput.value;
      const adminDescription = descriptionInput.value;


      if (!fileToUpload || !adminName || !adminDescription) {
        alert("Please select an image, enter an admin name, and provide a description.");
        return;
      }

      const storageRef = ref(storage, `uploaded_images/${fileToUpload.name}`);
      const uploadTask = uploadBytesResumable(storageRef, fileToUpload);


      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.error("Error uploading image: ", error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log("Image uploaded successfully. Download URL: ", downloadURL);

            const adminRef = nameref(database, 'availabe_shows/' + adminName);
            await set(adminRef, { name: adminName, imageUrl: downloadURL, general_info: adminDescription });
            console.log('Admin data added to Firebase:', adminName);
          } catch (error) {
            console.error('Error adding admin data to Firebase:', error);
          }
        }
      )
    })
  }
  else
  {
  siginbtn.addEventListener('click', () => {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log("click workding")
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        location.replace("/admin.html");
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  });
  }
});






