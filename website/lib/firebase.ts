
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCGWOHcQ_oWD_Y_v8jEdXho3Xx8TOGkNCk",
  authDomain: "dollarsplayz.firebaseapp.com",
  projectId: "dollarsplayz",
  storageBucket: "dollarsplayz.firebasestorage.app",
  messagingSenderId: "129998438050",
  appId: "1:129998438050:web:1520a92b2c91c6e38121fb"
};

const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
