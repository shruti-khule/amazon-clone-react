import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB4GWP5ep1hcRydDnwMDhRmhS0kIyKDETw",
    authDomain: "clone-86f2e.firebaseapp.com",
    projectId: "clone-86f2e",
    storageBucket: "clone-86f2e.appspot.com",
    messagingSenderId: "103341745204",
    appId: "1:103341745204:web:f54c67d941f3d67a305661",
    measurementId: "G-VK0XSK499L"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth};