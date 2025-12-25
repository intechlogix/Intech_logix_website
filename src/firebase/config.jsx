// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsr3Fnt8M9rKJQrTLGTOHGZlg63nqNKak",
  authDomain: "intech-logix.firebaseapp.com",
  projectId: "intech-logix",
  storageBucket: "intech-logix.firebasestorage.app",
  messagingSenderId: "603806918692",
  appId: "1:603806918692:web:c749249e130bb383d3d0b1",
  measurementId: "G-XMNR0NRF3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

export default app;