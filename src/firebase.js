// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlQIAhGEY6isQNX8D430INQdVt5qzGL-c",
  authDomain: "ecommerce1-1-461d7.firebaseapp.com",
  projectId: "ecommerce1-1-461d7",
  storageBucket: "ecommerce1-1-461d7.appspot.com",
  messagingSenderId: "302192970595",
  appId: "1:302192970595:web:0a6c576aab319725b86156",
  measurementId: "G-DZP76342H9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);