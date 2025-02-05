/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./ItemListContainer.css";
import NotificationsHeader from "../../common/notificationsHeader/NotificationsHeader";
import { NotificationCard } from "../../common/productCard/notification/NotificationCard";
import { fetchItems } from "../../../utils/fetch";



const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const { status } = useParams();
  console.log("param status:", status);
  
  useEffect(() => {
    fetchItems(props.platform, status)
      .then((response) => {
        console.log("Fetching items", status);
        setItems(response);
      })
      .catch((error) => {
        console.log("Fetch error:", error);
      })
      .finally(() => {});
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
