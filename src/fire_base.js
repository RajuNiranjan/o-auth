// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "reactexpress-b9922.firebaseapp.com",
  projectId: "reactexpress-b9922",
  storageBucket: "reactexpress-b9922.appspot.com",
  messagingSenderId: "941892732298",
  appId: "1:941892732298:web:f2be26eb8c4944b1407473",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
