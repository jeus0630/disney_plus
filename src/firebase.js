import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBq3cjrEs0yA-FhCndx-xTzCrIhaAVoeTE",
    authDomain: "disneyplus-clone-9b4cc.firebaseapp.com",
    projectId: "disneyplus-clone-9b4cc",
    storageBucket: "disneyplus-clone-9b4cc.appspot.com",
    messagingSenderId: "982674984443",
    appId: "1:982674984443:web:3f18b94c5897e7e5084f5e",
    measurementId: "G-2BSWTZ2167"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;