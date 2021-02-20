import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDILIGYDkdL0OOdmUJgsYMokFIYoBaAIPM",
  authDomain: "instagaram-clone-70f37.firebaseapp.com",
  databaseURL: "https://instagaram-clone-70f37-default-rtdb.firebaseio.com",
  projectId: "instagaram-clone-70f37",
  storageBucket: "instagaram-clone-70f37.appspot.com",
  messagingSenderId: "616976876715",
  appId: "1:616976876715:web:4d0633811244fa523363ee",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
