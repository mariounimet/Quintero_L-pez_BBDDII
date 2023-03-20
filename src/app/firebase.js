import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
//import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD09cNxFNeAeR_AnBvwRuVw73GU-WF4ces",
    authDomain: "bbddii.firebaseapp.com",
    projectId: "bbddii",
    storageBucket: "bbddii.appspot.com",
    messagingSenderId: "1098293222078",
    appId: "1:1098293222078:web:1bc4b1081b76d7d70d9cef",
    measurementId: "G-TMMZHKQWMD"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

