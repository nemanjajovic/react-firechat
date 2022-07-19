import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD3xqPs9VCPy9OPqWjpAQxNBVzgMQJg0lM",
  authDomain: "react-firechat-2aa54.firebaseapp.com",
  projectId: "react-firechat-2aa54",
  storageBucket: "react-firechat-2aa54.appspot.com",
  messagingSenderId: "100522806455",
  appId: "1:100522806455:web:3a60847124903b9ddad132",
  measurementId: "G-E9DD1LCBL8",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
