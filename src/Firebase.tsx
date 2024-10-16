import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAc_Gx-QcYCpSqVk7TjFH1uniTt3-4dE_A",
  authDomain: "portfolio-a329c.firebaseapp.com",
  projectId: "portfolio-a329c",
  storageBucket: "portfolio-a329c.appspot.com",
  messagingSenderId: "550642869239",
  appId: "1:550642869239:web:339d79136236621fad04f2",
  measurementId: "G-SQ1H4EJDSE",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
