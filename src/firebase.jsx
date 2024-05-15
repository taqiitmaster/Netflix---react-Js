// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsn_ME4I3iw6ZWkGU3qwhgafsjkc7cYzc",
  authDomain: "netflix-e34ff.firebaseapp.com",
  projectId: "netflix-e34ff",
  storageBucket: "netflix-e34ff.appspot.com",
  messagingSenderId: "711516732441",
  appId: "1:711516732441:web:92ff086a892a9582c87e88",
  measurementId: "G-4ZXJXH4T80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db=getFirestore()