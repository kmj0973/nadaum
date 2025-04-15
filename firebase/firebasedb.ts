// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqiTOte63amghiqtVfnZ57TVHWvm_0N5k",
  authDomain: "nadaum-4fd7d.firebaseapp.com",
  projectId: "nadaum-4fd7d",
  storageBucket: "nadaum-4fd7d.firebasestorage.app",
  messagingSenderId: "960998487965",
  appId: "1:960998487965:web:0c2c0bb9fd91694c1fa174",
  measurementId: "G-2GG6DRRF8B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
