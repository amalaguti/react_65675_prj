/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { NotificationsContext } from "./Contexts";

import { db } from "../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NOTIFICATION_STATUS } from "../utils/notificationManagement";

// Create context provider
export const NotificationsContextProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [notificationsByStatus, setNotificationsByStatus] = useState({});

  const getNotificationsByStatus = () => {
    let notificationsCollection = collection(db, "notifications");
    const status = ["start", "running", "final"];
    const notificationsByStatus = {};

    status.forEach((status) => {
      console.log("status:", status);
      let _collection = filterCollection(notificationsCollection, status);
      const getNotifications = getDocs(_collection);
      getNotifications
        .then((res) => {
          const array = res.docs.map((elem) => {
            return { id: elem.id, ...elem.data() };
          });
          notificationsByStatus[status] = array;
          setNotificationsByStatus({ ...notificationsByStatus});
          
        })
        .catch((error) => console.log(error));
    });
  };

  // Get all notifications
  useEffect(() => {
    let notificationsCollection = collection(db, "notifications");
    let _collection = notificationsCollection;
    const getNotifications = getDocs(_collection);
    getNotifications
      .then((res) => {
        const array = res.docs.map((elem) => {
          return { id: elem.id, ...elem.data() };
        });
        setNotifications(array);
      })
      .catch((error) => console.log(error));
  }, []);

  // Get notifications by status
  useEffect(() => {
    getNotificationsByStatus();
  }, []);

  console.log(">>>> NotificationsContextProvider");
  console.log(">>>> notifications: ", notifications);
  console.log(">>>> notificationsByStatus: ", notificationsByStatus);

  let data = {
    notifications,
    notificationsByStatus,
  };
  
  return (
    <NotificationsContext.Provider value={data}>
      {children}
    </NotificationsContext.Provider>
  );
};

// Filter collection by status arrays (start, running, final)
const filterCollection = (collection, status) => {
  let _collection = collection;
  if (status === "start") {
    let filteredCollection = query(
      collection,
      where("status", "in", NOTIFICATION_STATUS.NOTIF_STATUS_START)
    );
    _collection = filteredCollection;
  } else if (status === "running") {
    let filteredCollection = query(
      collection,
      where("status", "in", NOTIFICATION_STATUS.NOTIF_STATUS_RUNNING)
    );
    _collection = filteredCollection;
  } else if (status === "final") {
    let filteredCollection = query(
      collection,
      where("status", "in", NOTIFICATION_STATUS.NOTIF_STATUS_FINAL)
    );
    _collection = filteredCollection;
  }

  return _collection;
};
