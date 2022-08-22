// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWv2kc-Ei6ATN1eF1PBFwCfn8lqe0gBFw",
  authDomain: "webstore-37fcd.firebaseapp.com",
  projectId: "webstore-37fcd",
  storageBucket: "webstore-37fcd.appspot.com",
  messagingSenderId: "155896921867",
  appId: "1:155896921867:web:ddf260b063ef060a982c0e",
  measurementId: "G-NWRWE9MZ77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
