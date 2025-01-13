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
      />
      <div
        id="notifications-container-cards"
        className="notifications-container-cards"
      >
        <NotificationCard notification={mockNotifications[0]} />
        <NotificationCard notification={mockNotifications[1]} />
        <NotificationCard notification={mockNotifications[2]} />
      </div>
    </div>
  );
};

export default ItemListContainer;
