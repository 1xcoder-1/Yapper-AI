// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
apiKey: "",
   authDomain: "y",  
  projectId: "",
   storageBucket: "",
   messagingSenderId: "",
   appId: "",
  measurementId: ""
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { auth}
