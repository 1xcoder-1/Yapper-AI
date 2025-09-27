// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyAMp7CPoG6skFFmXZm8QJ1NDkeqodSgR9g",
  authDomain: "yapper-ai-fb253.firebaseapp.com",
  projectId: "yapper-ai-fb253",
  storageBucket: "yapper-ai-fb253.firebasestorage.app",
  messagingSenderId: "1018492072723",
  appId: "1:1018492072723:web:44f6841998fa0d48f4a0e6",
  measurementId: "G-J2N4215QY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { auth}
