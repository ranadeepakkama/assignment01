import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAXR7itMDDiPIBn-rycBBMyjbPRc0f5W_U",
  authDomain: "auth-94464.firebaseapp.com",
  projectId: "auth-94464",
  storageBucket: "auth-94464.appspot.com",
  messagingSenderId: "666182884530",
  appId: "1:666182884530:web:418a002e3c705ff3de7dab"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { app,auth, db };
