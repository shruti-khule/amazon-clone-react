import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyC4MR788S_Eb3myfx6Gf-RDz9X51swx_2E",
  authDomain: "clone-a7565.firebaseapp.com",
  projectId: "clone-a7565",
  storageBucket: "clone-a7565.appspot.com",
  messagingSenderId: "675972886513",
  appId: "1:675972886513:web:4a3fb90c0cd60bb55d1e50",
  measurementId: "G-9SRRJLEN1J"
};


  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth};