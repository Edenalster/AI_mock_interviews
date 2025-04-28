import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeKhvmgPs0M7DGO0x3zKCfsMqoZbhEmy8",
  authDomain: "prepwise-520c7.firebaseapp.com",
  projectId: "prepwise-520c7",
  storageBucket: "prepwise-520c7.firebasestorage.app",
  messagingSenderId: "1042888339066",
  appId: "1:1042888339066:web:6c9b0fe382c11a2b00d5c3",
  measurementId: "G-KSM2HYL1XQ",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
