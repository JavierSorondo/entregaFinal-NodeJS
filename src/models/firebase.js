// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0TafA1AH7EEEkenLGoboTH9Zh4MXtt-k",
  authDomain: "benode2026-entfinal.firebaseapp.com",
  projectId: "benode2026-entfinal",
  storageBucket: "benode2026-entfinal.firebasestorage.app",
  messagingSenderId: "369503155541",
  appId: "1:369503155541:web:70a4498630da00534aebdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firestore
const db = getFirestore(app);
export { db };