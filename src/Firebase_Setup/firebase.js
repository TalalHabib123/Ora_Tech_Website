import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  //Add Your Own Firebase Config Here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(ap
const firestore = getFirestore(app);
const storage =getStorage(app);

export { firestore, storage};

