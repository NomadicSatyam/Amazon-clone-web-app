import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWLPjHw36o5_CFZQmaxUOG3OmbftAHYkk",
  authDomain: "challange-ceaca.firebaseapp.com",
  projectId: "challange-ceaca",
  storageBucket: "challange-ceaca.appspot.com",
  messagingSenderId: "217140148881",
  appId: "1:217140148881:web:53875297ebfef64c1c9d30",
  measurementId: "G-HBHX7858JE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth}; 