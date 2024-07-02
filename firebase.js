// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBtQZVZakt7pT7PpCiBn-X1g3tJcnRjtjM",
  authDomain: "miniwageringgameapp-98886.firebaseapp.com",
  projectId: "miniwageringgameapp-98886",
  storageBucket: "miniwageringgameapp-98886.appspot.com",
  messagingSenderId: "170813514850",
  appId: "1:170813514850:web:96ce2f00730013b4dedd3b",
  measurementId: "G-YZVQC0ZGRZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

// const auth = firebase.auth();
export { auth,app };
