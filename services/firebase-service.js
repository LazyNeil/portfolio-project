import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJcg7wSkafGZOUAqC6rqQAG0wt4QhStvg",
  authDomain: "portfolio-62dba.firebaseapp.com",
  projectId: "portfolio-62dba",
  storageBucket: "portfolio-62dba.appspot.com",
  messagingSenderId: "465887985521",
  appId: "1:465887985521:web:ac8b2244cfca8ee3c180d0",
  measurementId: "G-7LNM761S6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = new getDatabase(app);

export default db;
export { analytics };