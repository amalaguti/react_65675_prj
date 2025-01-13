export function calcCost(type) {
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
  "NOTIF_STATUS_FINAL": ["completed", "failed", "canceled"] };