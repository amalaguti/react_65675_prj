import { db } from './firebaseConfig.js';
import { collection, getDocs, query, where } from "firebase/firestore";

export const getAllNotifications = async () => {
  const querySnapshot = await getDocs(collection(db, "notifications"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
}

// getAllNotifications()


export const queryByStatus = async (status) => {
  let notificationsCollection = collection(db, "notifications");
  let consulta = notificationsCollection;
  
  console.log("status:", status);
  let porcionDeLaColeccion = query(
    notificationsCollection,
    where("status", "==", status)
  );
  consulta = porcionDeLaColeccion;
  
  const getProducts = getDocs(consulta);
  return getProducts;
}

queryByStatus("new")
  .then((res) => {
    const array = res.docs.map((elemento) => {
      console.log(`${elemento.id} => ${JSON.stringify(elemento.data())}`);
    });
    
  })
  .catch((error) => console.log(error));


