// Import the functions you need from the SDKs you need

// import "firebase/compat/auth";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAYAjUGQu73GTdaGP5jiW8GiM3HnQNsXyA",
  authDomain: "aventurados-desarrollo.firebaseapp.com",
  projectId: "aventurados-desarrollo",
  storageBucket: "aventurados-desarrollo.appspot.com",
  messagingSenderId: "967120175491",
  appId: "1:967120175491:web:99ff8569d924eb928636b6",
  measurementId: "G-NJRB5TR9DT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
