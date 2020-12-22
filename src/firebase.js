import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4JyJN80r4QI49VMjxYGFAq2hadsAdKM0",
  authDomain: "slack-clone-bea19.firebaseapp.com",
  projectId: "slack-clone-bea19",
  storageBucket: "slack-clone-bea19.appspot.com",
  messagingSenderId: "379969444995",
  appId: "1:379969444995:web:3b9f81e0a28ec7e6cc4fb6",
  measurementId: "G-6LM55Y5GMY"
};

// Initialize Firebase
const firebaseApp=firebase.initializeApp(firebaseConfig);

// Auth stuff
const auth = firebaseApp.auth();
const db=firebaseApp.firestore();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider}
export default db;