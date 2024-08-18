// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCYTMtgw-QwZlMNHWAZajt-4Ffl2T5eIt8",
    authDomain: "assurelance-20a9c.firebaseapp.com",
    projectId: "assurelance-20a9c",
    storageBucket: "assurelance-20a9c.appspot.com",
    messagingSenderId: "1011178386397",
    appId: "1:1011178386397:web:79e461ec7a1f17a4f67c34",
    measurementId: "G-WHN9WQ2X4H"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
