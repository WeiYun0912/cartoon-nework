import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB2IcWfin3BRo3NlUaj1a_RTG8MW2cWr70",
  authDomain: "cartoon-network-53a18.firebaseapp.com",
  projectId: "cartoon-network-53a18",
  storageBucket: "cartoon-network-53a18.appspot.com",
  messagingSenderId: "285573111105",
  appId: "1:285573111105:web:6ca5337a73e685d76515c0",
  measurementId: "G-5DL41G8Z4M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
