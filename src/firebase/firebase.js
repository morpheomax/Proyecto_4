// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgzCJaff_H94r7eAGPQyJN2AUI570AWrw",
  authDomain: "clase16-6effd.firebaseapp.com",
  projectId: "clase16-6effd",
  storageBucket: "clase16-6effd.appspot.com",
  messagingSenderId: "11701663462",
  appId: "1:11701663462:web:d8107e7c9a1a5a05e42d27",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();

// Provider
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
