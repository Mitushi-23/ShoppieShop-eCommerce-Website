// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmAnAmL6Kp4dQsfBsmp_PinJVJ3uRjT68",
  authDomain: "shop-bf02a.firebaseapp.com",
  projectId: "shop-bf02a",
  storageBucket: "shop-bf02a.appspot.com",
  messagingSenderId: "176016250300",
  appId: "1:176016250300:web:20226ee63d78c8590d87b9",
  measurementId: "G-H3NBLXSN1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;