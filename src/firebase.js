import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyCuRFyfIfwfAiCP8gMwCsdOJUBISJnlXT4",
  authDomain: "insta-clone-5e717.firebaseapp.com",
  projectId: "insta-clone-5e717",
  storageBucket: "insta-clone-5e717.appspot.com",
  messagingSenderId: "595803737275",
  appId: "1:595803737275:web:dad2093ebfe009423d2d9e",
  measurementId: "G-QTSTCY0LYF"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();




export { db, auth, storage };