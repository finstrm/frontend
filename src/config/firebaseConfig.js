import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAlagO_RFPNEFwv_EycOuzzwAGT29yUnuE",
    authDomain: "finstream-9e3ca.firebaseapp.com",
    projectId: "finstream-9e3ca",
    storageBucket: "finstream-9e3ca.appspot.com",
    messagingSenderId: "860771697773",
    appId: "1:860771697773:web:8f656873df404286362b64",
    measurementId: "G-MRE94RPLXB"
};

export const app = initializeApp(firebaseConfig);