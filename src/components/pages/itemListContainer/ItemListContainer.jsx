import "./ItemListContainer.css";
import { NotificationCard } from "../../common/productCard/NotificationCard";
import NotificationsHeader from "../../common/notificationsHeader/NotificationsHeader";

import { mockNotifications} from "../../../mock/notifications/notifications";

const ItemListContainer = () => {
  return (
    <div id="notifications-container" className="notifications-container">
      <NotificationsHeader
        id="notifications-header"
        className="notifications-header"
        logoId="notifications-header-item-logo"
      />
      <NotificationCard notification={mockNotifications[0]} />
      <NotificationCard notification={mockNotifications[1]} />
      <NotificationCard notification={mockNotifications[2]} />
      
    </div>
  );
};

export default ItemListContainer;
