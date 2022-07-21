// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuvE3-8jUwshs0TcOFTNjcCVatR7mymz8",
  authDomain: "webchat-73a6f.firebaseapp.com",
  projectId: "webchat-73a6f",
  storageBucket: "webchat-73a6f.appspot.com",
  messagingSenderId: "493137288226",
  appId: "1:493137288226:web:ba0816c5e158b12dd3be7b",
  measurementId: "G-P2DNGX4XL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);