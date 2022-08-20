// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBL285Z0rVhQc7DwadJNINYlCqnKSswt4Q",
    authDomain: "fir-tutorial-crude.firebaseapp.com",
    projectId: "fir-tutorial-crude",
    storageBucket: "fir-tutorial-crude.appspot.com",
    messagingSenderId: "74090004746",
    appId: "1:74090004746:web:286e3c0f8ac28b4f163af3",
    measurementId: "G-4BYK5ELZBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);