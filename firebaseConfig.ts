import { FirebaseApp, initializeApp } from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBZQtokP1nkXUPkb5XnXLpPDl3vG5ST-MM",
    authDomain: "reactnative1-e9037.firebaseapp.com",
    databaseURL: "https://reactnative1-e9037-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "reactnative1-e9037",
    storageBucket: "reactnative1-e9037.appspot.com",
    messagingSenderId: "684425427399",
    appId: "1:684425427399:web:69dcc653ae7d4e479341e2",
    measurementId: "G-YKX5YLHJYQ",
};

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

function getFirestore(FIREBASE_APP: FirebaseApp){
    throw new Error("Function not implemented");
}