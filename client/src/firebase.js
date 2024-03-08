import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiLPKWoxM9tHqwWqdpbClGQUbtI6nBErg",
  authDomain: "certificate-project-2f191.firebaseapp.com",
  projectId: "certificate-project-2f191",
  storageBucket: "certificate-project-2f191.appspot.com",
  messagingSenderId: "564903142448",
  appId: "1:564903142448:web:a24fa4d670a7194439b9f5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
