import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2u-WLIpILmtPenwxe1_WreBR_0WwwTsM",
  authDomain: "instagram-clone-bd45e.firebaseapp.com",
  projectId: "instagram-clone-bd45e",
  storageBucket: "instagram-clone-bd45e.appspot.com",
  messagingSenderId: "1061140838447",
  appId: "1:1061140838447:web:63081792b8026d2197eeda",
  measurementId: "G-KTKB2R74YS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
