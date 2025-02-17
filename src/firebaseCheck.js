import { db } from './firebaseConfig.js';
import { collection, getDocs } from 'firebase/firestore';

const querySnapshot = await getDocs(collection(db, "notifications"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
});

