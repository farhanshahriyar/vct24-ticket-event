// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjH-wG9HZgkjNS2-239OeMM6qeovYWeqI",
  authDomain: "gaming-event-88b1b.firebaseapp.com",
  projectId: "gaming-event-88b1b",
  storageBucket: "gaming-event-88b1b.appspot.com",
  messagingSenderId: "32373944720",
  appId: "1:32373944720:web:e1f68b1b48ab6d896e8315"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;