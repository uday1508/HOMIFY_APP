import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDvFElxBRImgARpVFbKqt2pDlAz-tRLH4w",
  authDomain: "login-a8b94.firebaseapp.com",
  projectId: "login-a8b94",
  storageBucket: "login-a8b94.appspot.com",
  messagingSenderId: "718610656402",
  appId: "1:718610656402:web:04be4fb752d8e0ebd20a4b",
  measurementId: "G-ZY52413CXN"
};






// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  
const db = getFirestore(app);
//const db = getDatabase(app);
console.log(auth);
export {auth,db}
//
