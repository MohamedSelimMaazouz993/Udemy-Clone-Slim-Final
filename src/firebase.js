// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy2hYi_ukYMqH7g5V_xuStrJ5jQx6abA0",
  authDomain: "udemy-clone-b868a.firebaseapp.com",
  projectId: "udemy-clone-b868a",
  storageBucket: "udemy-clone-b868a.appspot.com",
  messagingSenderId: "425398605167",
  appId: "1:425398605167:web:74fa7a7085d055674b849a",
  measurementId: "G-FXSNFDGRP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
