import { initializeApp, getApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";

var appconfig = {
    apiKey: "AIzaSyC7PqXixX7SlpOwzLNPOzy4Rm-HvBmHSl8",
    authDomain: "crunchyroll-clone-c8501.firebaseapp.com",
    databaseURL: "https://carunchyroll-clone-c8501-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "crunchyroll-clone-c8501",
    storageBucket: "crunchyroll-clone-c8501.appspot.com",
    messagingSenderId: "938254019867",
    appId: "1:938254019867:web:726750583cc44213ccb7be"
  }

  const app = initializeApp(appconfig);
  const image_location = document.getElementById("image");
  
  const storage = getStorage(app);
  
  image_location.addEventListener("change", (event) => {
    const selectedFiles = event.target.files;
    const fileToUpload = selectedFiles[0];
  
    const reader = new FileReader();
    reader.onload = function (e) {
      const fileContent = e.target.result;
  
      const storagePath = 'uploaded_images/' + fileToUpload.name.replace(/\s+/g, 'gs://crunchyroll-clone-c8501.appspot.com/uploaded _images');
      const storageRef = ref(storage, storagePath);
  
      const uploadTask = uploadBytesResumable(storageRef, fileContent);
  
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          console.error('Error uploading: ', error);
        },
        () => {
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File uploaded successfully. Download URL: ', downloadURL);
            // You can use the downloadURL to display the image or store it in your database
          });
        }
      );
    };
  
    reader.readAsArrayBuffer(fileToUpload);
  });
  