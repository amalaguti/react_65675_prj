import "./notificationDetailsList.css";
import { calcCost, NOTIFICATION_STATUS } from "../../../../utils/notificationManagement";

export const NotificationDetailsList = (props) => {
  const notification = props.notification;
    
  let classNameStatus = "UNRESOLVED"
  if (NOTIFICATION_STATUS.NOTIF_STATUS_START.includes(notification.status)) {
    classNameStatus = "notif_status_start";
  } else if (NOTIFICATION_STATUS.NOTIF_STATUS_RUNNING.includes(notification.status)) {
    classNameStatus = "notif_status_running";
  } else if (NOTIFICATION_STATUS.NOTIF_STATUS_FINAL.includes(notification.status)) {
    classNameStatus = "notif_status_final";
  }

  return (
    <ul className="text-xs pl-5 flex flex-wrap gap-2 space-y-2 text-gray-900 dark:text-white">
      <li className="content-end">
        <strong>ID:</strong> {notification.ID}
      </li>
      <li>
        <strong>JID:</strong> {notification.JID}
      </li>
      <li>
        <strong>Status:</strong> <span className={classNameStatus}> {notification.status} </span>
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
      <li>
        <strong>Stocked:</strong> <b>{notification.stocked}</b>
      </li>
    </ul>
  );
};
