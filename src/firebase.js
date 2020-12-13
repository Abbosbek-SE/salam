import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCRUWIN1R8wCpK5JlqsegC3voZgcfwm5BI",
  authDomain: "b-project-a2a2c.firebaseapp.com",
  databaseURL: "https://b-project-a2a2c.firebaseio.com",
  projectId: "b-project-a2a2c",
  storageBucket: "b-project-a2a2c.appspot.com",
  messagingSenderId: "1095990075019",
  appId: "1:1095990075019:web:c3ffebb4323f1a2ff0fe8e",
  measurementId: "G-WWEJVDJWLJ"
})


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export {db, auth, storage}