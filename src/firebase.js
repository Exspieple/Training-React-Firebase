// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2anFzPYj0saR7dHslLSaj5_NSA1NVyp4",
  authDomain: "test-react-firebase-7ce9d.firebaseapp.com",
  projectId: "test-react-firebase-7ce9d",
  storageBucket: "test-react-firebase-7ce9d.appspot.com",
  messagingSenderId: "956114074235",
  appId: "1:956114074235:web:df6dc66c44b6c4836a00de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default getFirestore();
export const auth = getAuth(app);
