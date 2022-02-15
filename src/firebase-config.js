// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyAwJtbGFpVVMQhHQ-dvaehILf8P5PkFMkU",
  authDomain: "iot-water-management-sys-3c962.firebaseapp.com",
  databaseURL:
    "https://iot-water-management-sys-3c962-default-rtdb.firebaseio.com",
  projectId: "iot-water-management-sys-3c962",
  storageBucket: "iot-water-management-sys-3c962.appspot.com",
  messagingSenderId: "226042213406",
  appId: "1:226042213406:web:12d32bb2ea33b30aa52a0f",
  measurementId: "G-DB13D7PVPF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { ref, db, onValue };
