import "./ItemListContainer.css";

import NotificationsHeader from "../../common/notificationsHeader/NotificationsHeader";
import { NotificationCard } from "../../common/productCard/notification/NotificationCard";

const ItemListContainer = (props) => {
  const mockNotifications = props.notifications;

  return (
    <div id="notifications-container" className="notifications-container">
      <NotificationsHeader
        id="notifications-header"
        className="notifications-header"
        logoId="notifications-header-item-logo"
        platform={props.platform}
      />
      <div
        id="notifications-container-cards"
        className="notifications-container-cards"
      >
        {mockNotifications.map((notification, index) => (
          <NotificationCard key={index} notification={notification} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
