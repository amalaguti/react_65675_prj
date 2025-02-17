/* eslint-disable react/prop-types */

import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import NotificationsHeader from "../../common/notificationsHeader/NotificationsHeader";
import { NotificationCard } from "../../common/productCard/notification/NotificationCard";
import { NOTIFICATION_STATUS } from "../../../utils/notificationManagement";

import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

// NO LONGER USED
// import { fetchItems } from "../../../utils/fetch";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  let { status } = useParams();
  console.log("param status:", status);

  useEffect(() => {
    // fetchItems replaced by Firebase
    // fetchItems(props.platform, status)
    //   .then((response) => {
    //     console.log("Fetching items", status);
    //     setItems(response);
    //   })
    //   .catch((error) => {
    //     console.log("Fetch error:", error);
    //   })
    //   .finally(() => {});
    let notificationsCollection = collection(db, "notifications");
    let _collection = filterCollection(notificationsCollection, status);
    console.log("status:", status);

    const getNotifications = getDocs(_collection);
    getNotifications
      .then((res) => {
        const array = res.docs.map((elem) => {
          return { id: elem.id, ...elem.data() };
        });
        setItems(array);
      })
      .catch((error) => console.log(error));
  }, [status, props.platform]);

  console.log("items count:", items.length);

  return (
    <>
      <div id="notifications-container" className="notifications-container">
        <NotificationsHeader
          id="notifications-header"
          className="notifications-header"
          logoId="notifications-header-item-logo"
          platform={props.platform}
        />
        {items.length > 0 ? (
          <div
            id="notifications-container-cards"
            className="notifications-container-cards"
          >
            {items.map((notification, index) => (
              <NotificationCard key={index} notification={notification} />
            ))}
          </div>
        ) : (
          <strong>
            <p>NO ITEMS AVAILABLE, WAIT A FEW SECONDS OR GOODBYE!</p>
          </strong>
        )}
      </div>
    </>
  );
};

export default ItemListContainer;


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
