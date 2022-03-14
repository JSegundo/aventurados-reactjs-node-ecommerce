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

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const app = firebase.initializeApp({
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROYECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASURMENT_ID,
// });

// // Initialize Firebase
// export const auth = app.auth();
// export default app;
