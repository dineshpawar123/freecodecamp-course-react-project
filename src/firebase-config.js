// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
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

const firebaseConfig2 = {
    apiKey: "AIzaSyAjoscZrDBRw0y779FTbp5lSqQTGqe3g8k",
    authDomain: "authentication-tutorial-ab6e0.firebaseapp.com",
    projectId: "authentication-tutorial-ab6e0",
    storageBucket: "authentication-tutorial-ab6e0.appspot.com",
    messagingSenderId: "243705940573",
    appId: "1:243705940573:web:44b208dd407f7f0e7b9bb4",
    measurementId: "G-5XVPVC9DF6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const app1 = initializeApp(firebaseConfig2, 'secondary');

export const db = getFirestore(app);
export const auth1 = getAuth(app1);