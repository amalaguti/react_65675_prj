import { mockNotifications } from '../mock/notifications/notifications';

export const fetchProducts = (platform) => {
  return new Promise((resolve, reject) => {
    if (platform === "Mock") {
      resolve(mockNotifications);
    } else {
      reject({
        statusCode: 501,
        message: "Real fetch not implemented, use Mock",
      });
    }
  });
};