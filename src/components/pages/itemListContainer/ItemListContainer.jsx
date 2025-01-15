import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import NotificationsHeader from "../../common/notificationsHeader/NotificationsHeader";
import { NotificationCard } from "../../common/productCard/notification/NotificationCard";
import { fetchProducts } from "../../../utils/fetch";

const ItemListContainer = (props) => {
  // const mockNotifications = props.notifications;
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchProducts(props.platform)
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.log("Fetch error:", error);
      })
      .finally(() => {});
  }, []);

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
            <p>NO ITEMS AVAILABLE, BYE!</p>
          </strong>
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
