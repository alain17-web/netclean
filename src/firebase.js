
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netclean-2833f.firebaseapp.com",
  projectId: "netclean-2833f",
  storageBucket: "netclean-2833f.appspot.com",
  messagingSenderId: "380440531225",
  appId: "1:380440531225:web:81e37ef4ef08a811a3b588"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
export const storage = getStorage(app);