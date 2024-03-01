// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDakhDmFjmyphnv2nfMkPzxBSLcEdb7Nac",
  authDomain: "fir-auth-react-5718a.firebaseapp.com",
  projectId: "fir-auth-react-5718a",
  storageBucket: "fir-auth-react-5718a.appspot.com",
  messagingSenderId: "139416176303",
  appId: "1:139416176303:web:ed19338891a19f9462365a",
};
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const twitterProvider = new TwitterAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
