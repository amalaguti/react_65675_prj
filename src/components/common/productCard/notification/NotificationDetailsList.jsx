import "./notificationDetailsList.css";
import { calcCost } from "../../../../utils/notificationManagement";

export const NotificationDetailsList = (props) => {
  const notification = props.notification;
  return (
    <ul className="pl-5 space-y-2 text-gray-900 dark:text-white">
      <li>
        <strong>ID:</strong> {notification.ID}
      </li>
      <li>
        <strong>JID:</strong> {notification.JID}
      </li>
      <li>
        <strong>Status:</strong> {notification.status}
      </li>
      <li>
        <strong>Consumer:</strong> {notification.consumer}
      </li>
      <li>
        <strong>Creation:</strong>{" "}
        {new Date(notification.creation).toLocaleString()}
      </li>
      <li>
        <strong>Last Update:</strong>{" "}
        {new Date(notification.last_update).toLocaleString()}
      </li>
      <li>
        <strong>Type:</strong> {notification.type}
      </li>
      <li>
        <strong>Cost:</strong> <b>${calcCost(notification.type)}</b>
      </li>
    </ul>
  );
};
