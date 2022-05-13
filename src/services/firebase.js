
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApYFJPo1ePE8dvs5bnG-jBedvYVeeB4R4",
  authDomain: "pweb-ed6d0.firebaseapp.com",
  projectId: "pweb-ed6d0",
  storageBucket: "pweb-ed6d0.appspot.com",
  messagingSenderId: "703230094997",
  appId: "1:703230094997:web:849e8be1d1cb108ea1f59c",
  measurementId: "G-1VRKBJGX3B"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);