// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYUazog5e1RbRfotYBJpIUKeaMnaNYA1E",
  authDomain: "dragon-news-c9fca.firebaseapp.com",
  projectId: "dragon-news-c9fca",
  storageBucket: "dragon-news-c9fca.appspot.com",
  messagingSenderId: "581340502820",
  appId: "1:581340502820:web:f6088a39cb35bc0fd2b1b1",
  measurementId: "G-8WWJD2DFHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;