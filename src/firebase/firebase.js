import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyByh_oInzNwZiC8E0UfopUNsyJrdWEoe-w",
    authDomain: "gulf-coast-retina-development.firebaseapp.com",
    databaseURL: "https://gulf-coast-retina-development.firebaseio.com",
    projectId: "gulf-coast-retina-development",
    storageBucket: "gulf-coast-retina-development.appspot.com",
    messagingSenderId: "941368239918",
    appId: "1:941368239918:web:44fa32406a352f04ce3cbf",
    measurementId: "G-BLY3FGTB4J"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
