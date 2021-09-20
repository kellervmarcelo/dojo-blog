import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxQ20Le3sA8ixHVdZOjaWcxGxBdZycBUg",
  authDomain: "udemy-vue-3-project.firebaseapp.com",
  projectId: "udemy-vue-3-project",
  storageBucket: "udemy-vue-3-project.appspot.com",
  messagingSenderId: "432429199649",
  appId: "1:432429199649:web:7800a361cce2bfff984e60"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }