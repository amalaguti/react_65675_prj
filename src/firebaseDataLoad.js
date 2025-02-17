import { mockNotifications } from "./mock/notifications/notifications.js";
import { db } from './firebaseConfig.js';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";


const dataLoad = () => {
    let notificationsCollection = collection(db, "notifications");

    mockNotifications.forEach((elemento) => {
        console.log(elemento);
        addDoc(notificationsCollection, elemento);
    });
}


dataLoad()