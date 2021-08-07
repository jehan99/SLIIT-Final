
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYuPyQNDy5d4kwkJpGDMsCKke_U17nwcg",
    authDomain: "sliit-final-project.firebaseapp.com",
    projectId: "sliit-final-project",
    storageBucket: "sliit-final-project.appspot.com",
    messagingSenderId: "390976993983",
    appId: "1:390976993983:web:f0d54e081fd7d85a8fe40a",
    measurementId: "G-K1C96R7EX9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



export default firebase;
