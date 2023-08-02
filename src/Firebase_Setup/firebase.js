import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB2aTrskc6jkzZuneiUFKbUO07Wk1mvdLY",
  authDomain: "ora-tech-website-ceeb3.firebaseapp.com",
  projectId: "ora-tech-website-ceeb3",
  storageBucket: "ora-tech-website-ceeb3.appspot.com",
  messagingSenderId: "32691709983",
  appId: "1:32691709983:web:de5963755f894cd84d0d2a",
  measurementId: "G-CXZ1V8RZC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(ap
const firestore = getFirestore(app);
const storage =getStorage(app);

export { firestore, storage};

