import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD6RFuFkOUwx4ZQDI-jr62EQLJb0V60Ly8",
  authDomain: "instagram-clone-react-15141.firebaseapp.com",
  projectId: "instagram-clone-react-15141",
  storageBucket: "instagram-clone-react-15141.appspot.com",
  messagingSenderId: "828774277665",
  appId: "1:828774277665:web:452692761ea52e9c03b960",
  measurementId: "G-6TJJ4NBBDQ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
