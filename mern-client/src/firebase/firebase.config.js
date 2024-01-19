// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDLo9odkQH-QOYlseb9v5lxHpV16E3nDUs",
  authDomain: "mern-book-inventory-7a002.firebaseapp.com",
  projectId: "mern-book-inventory-7a002",
  storageBucket: "mern-book-inventory-7a002.appspot.com",
  messagingSenderId: "792819640691",
  appId: "1:792819640691:web:b94cdd64ea8f3cebcc3d06",
  measurementId: "G-P2M8E3XT9C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;