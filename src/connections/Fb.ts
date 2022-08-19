// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyAOc1lWBWvpDBu6F6S6NQ93_xxaJBsu2F0",
  authDomain: "fir-test-57a01.firebaseapp.com",
  databaseURL: "https://fir-test-57a01.firebaseio.com",
  projectId: "fir-test-57a01",
  storageBucket: "fir-test-57a01.appspot.com",
  messagingSenderId: "792245261688",
  appId: "1:792245261688:web:179f59be6a8c03f2f2a48d",
  measurementId: "G-T29V2RJC7V"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };