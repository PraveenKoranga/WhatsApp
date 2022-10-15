// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyByquNpSMnuXpwTTxIdIqo-sWTdSNTAHC4",
  authDomain: "whatsapp-clone-c5ad6.firebaseapp.com",
  projectId: "whatsapp-clone-c5ad6",
  storageBucket: "whatsapp-clone-c5ad6.appspot.com",
  messagingSenderId: "82469156213",
  appId: "1:82469156213:web:bc34fe9d27d2138e840f3c",
  measurementId: "G-28Q286KZVT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;