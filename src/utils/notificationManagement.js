export function calcCost(type) {
  // Cost is calculated based on the type of notification
  switch (type) {
    case "standard":
      return 1;
    case "priority":
      return 2.5;
    case "disposable":
      return 0.5;
    default:
      return 0;
  }
}


export const NOTIFICATION_STATUS = {
  "NOTIF_STATUS_START": ["new", "queued", "scheduled"],
  "NOTIF_STATUS_RUNNING": ["in-progress", "paused", "delayed"],
  "NOTIF_STATUS_FINAL": ["completed", "failed", "canceled"]
};


export function notificationImg(notificationType) {
  const images = {
    priority: "https://res.cloudinary.com/dgslkonqp/image/upload/v1737130326/priority_rr3nfl.jpg",
    standard: "https://res.cloudinary.com/dgslkonqp/image/upload/v1737130326/standard_eemi6q.jpg",
    disposable: "https://res.cloudinary.com/dgslkonqp/image/upload/v1737130326/disposable_rhj4fu.jpg",
  };

  return images[notificationType] || null;
}

export function notificationFiltered(notifications, status) {
  /* Filter notifications by notification status (NOTIFICATION_STATUS) */  
  if (status) {
    return notifications.filter((notification) => NOTIFICATION_STATUS["NOTIF_STATUS_" + status.toUpperCase()].includes(notification.status));
  }

  return notifications;
};