import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyAotXh-pq6Wnspb9eF9r76klccD10aBU70",
    authDomain: "notifmgr-65675.firebaseapp.com",
    projectId: "notifmgr-65675",
    storageBucket: "notifmgr-65675.firebasestorage.app",
    messagingSenderId: "205291755703",
    appId: "1:205291755703:web:a7d5d30db3ac301c43d532",
    measurementId: "G-6R77VNYFRE"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('Firebase initialized');

// Export db
export const db = getFirestore(app);


