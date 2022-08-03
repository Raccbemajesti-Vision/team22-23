import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
// import "firebase/messaging";
import "firebase/analytics";


const config = {
  apiKey: "AIzaSyBMuj9t0lURyteiUE0jc-pOiKWimi4qrKk",
  authDomain: "sethu-milestone-makers.firebaseapp.com",
  databaseURL: "https://sethu-milestone-makers-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sethu-milestone-makers",
  storageBucket: "sethu-milestone-makers.appspot.com",
  messagingSenderId: "867056239168",
  appId: "1:867056239168:web:6f9a6888f5aadeecfe15a5",
  measurementId: "G-XEDV50BRFK"
};

firebase.initializeApp(config);
// firebase.analytics();
const db = firebase.firestore();
const fb = firebase.storage();
const auth = firebase.auth();
// const messaging = firebase.messaging();

export { db, fb, auth };
