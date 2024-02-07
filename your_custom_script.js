// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwyQRgX7z3gU9YMlEjTuwNgLcr1K-8bkc",
  authDomain: "portfolio-2d5ca.firebaseapp.com",
  projectId: "portfolio-2d5ca",
  storageBucket: "portfolio-2d5ca.appspot.com",
  messagingSenderId: "286935376093",
  appId: "1:286935376093:web:d1055e08257035f923bb34",
  measurementId: "G-G2WYF0531X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);