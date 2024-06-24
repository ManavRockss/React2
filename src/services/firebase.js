import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const {VITE_API_KEY,
    VITE_AUTH_DOMAIN_POJECT_ID,
    VITE_PROJECT_ID,
    VITE_STORAGE_BUCKET,
    VITE_MESSAGING_SENDER_ID,
    VITE_API_ID}=import.meta.env
const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN_POJECT_ID,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET,
  messagingSenderId: VITE_MESSAGING_SENDER_ID,
  appId: VITE_API_ID
};


const app = initializeApp(firebaseConfig);
 export const auth=getAuth(app)
 export const db=getFirestore(app)