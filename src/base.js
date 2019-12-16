import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC3uvlcy2-_vMLZghM0oH2Ai00auL01YJk",
    authDomain: "catch-of-the-day-eric-cef2f.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-eric-cef2f.firebaseio.com",
    projectId: "catch-of-the-day-eric-cef2f",
    storageBucket: "catch-of-the-day-eric-cef2f.appspot.com",
    messagingSenderId: "1095363093698",
    appId: "1:1095363093698:web:6b50e23c798b096a3e875b"
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;