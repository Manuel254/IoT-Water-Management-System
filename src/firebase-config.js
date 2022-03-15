// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB6OfldRL3sJ-g6iv0AJA2TVDprlTuO6gw",
  authDomain: "water-management-system-3cc2b.firebaseapp.com",
  databaseURL:
    "https://water-management-system-3cc2b-default-rtdb.firebaseio.com",
  projectId: "water-management-system-3cc2b",
  storageBucket: "water-management-system-3cc2b.appspot.com",
  messagingSenderId: "965211050769",
  appId: "1:965211050769:web:787eef82badd9b3a1ab2b0",
  measurementId: "G-SGYJDYB9MF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { ref, db, onValue, push };
