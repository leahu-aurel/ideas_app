import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4_ELYVC83NF9dCL6smgjhX_soxZYgpys",
  authDomain: "social-network-app-7d8b5.firebaseapp.com",
  databaseURL: "https://social-network-app-7d8b5.firebaseio.com",
  projectId: "social-network-app-7d8b5",
  storageBucket: "social-network-app-7d8b5.appspot.com",
  messagingSenderId: "445057440368",
  appId: "1:445057440368:web:fd68855ceffd78c2e1b2b5",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export default firebase;
