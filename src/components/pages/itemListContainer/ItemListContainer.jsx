import "./ItemListContainer.css";
import { NotificationCard } from "../../common/productCard/notification/NotificationCard";
import NotificationsHeader from "../../common/notificationsHeader/NotificationsHeader";

import { mockNotifications } from "../../../mock/notifications/notifications";

const ItemListContainer = () => {
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
