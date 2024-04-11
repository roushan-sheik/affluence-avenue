// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const some = import.meta.env.AUTH_APIKEY;
console.log(some);
const firebaseConfig = {
  apiKey: "AIzaSyC5B-A-pUsnfPYUFpTqIuIus5AlJm7X0r0",
  authDomain: "affluence-avenue.firebaseapp.com",
  projectId: "affluence-avenue",
  storageBucket: "affluence-avenue.appspot.com",
  messagingSenderId: "877418406277",
  appId: "1:877418406277:web:a5ae1dea60f56eb2c964ec",
  measurementId: "G-PF00KCX7FR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
