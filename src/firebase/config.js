import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCQNadM4uXqg9YFdYirXeK1az17lVi4Elo",
  authDomain: "firegram-2e55b.firebaseapp.com",
  projectId: "firegram-2e55b",
  storageBucket: "firegram-2e55b.appspot.com",
  messagingSenderId: "573600672812",
  appId: "1:573600672812:web:42ae1354d6ed326de73589",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
