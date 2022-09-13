// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import {getAuth} from "@firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAy6tzmvPSub3nZvVBREP9KdP4ID5qVWSQ",
  apiKey: "AIzaSyAy6tzmvPSub3nZvVBREP9KdP4ID5qVWSQ",
  authDomain: "sound-app-f22be.firebaseapp.com",
  projectId: "sound-app-f22be",
  storageBucket: "sound-app-f22be.appspot.com",
  messagingSenderId: "294300710644",
  appId: "1:294300710644:web:e1503315aa9366380910a1",
  measurementId: "G-JNF7KJ33E7"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth}
