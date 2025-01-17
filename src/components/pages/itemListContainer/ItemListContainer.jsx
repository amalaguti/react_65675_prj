import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import NotificationsHeader from "../../common/notificationsHeader/NotificationsHeader";
import { NotificationCard } from "../../common/productCard/notification/NotificationCard";
import { fetchProducts } from "../../../utils/fetch";


import { Counter } from "../../common/counter/Counter";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetchProducts(props.platform)
      .then((response) => {
        console.log("Fetching items")
        setItems(response);
        localStorage.setItem("itemsCounter", response.length);
      })
      .catch((error) => {
        console.log("Fetch error:", error);
      })
      .finally(() => {});
  }, [items]);

  console.log("items", items.length);
  
  return (
    <>
      <div id="notifications-container" className="notifications-container">
        <Counter count={items.length} />
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
