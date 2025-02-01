import { mockNotifications } from '../mock/notifications/notifications';
import { notificationFiltered } from './notificationManagement';

export async function fetchItems(platform, status) {
  return new Promise((resolve, reject) => {
    if (platform === "Mock") {
      // Mocking delay with setTimeout
      setTimeout(() => {
        // Filter notifications by status
        resolve(["start", "running", "final"].includes(status) ? notificationFiltered(mockNotifications, status) : mockNotifications);
      }, 500);
      // resolve(mockNotifications);
    } else {
      reject({
        statusCode: 501,
        message: "Real fetch not implemented, use Mock",
      });
    }
  });
};


export async function fetchItem(id) {
  return new Promise((resolve, reject) => {
    const item = mockNotifications.find((item) => item.ID === id);
    if (item) {
      // resolve(item);
      // Mocking delay with setTimeout
      setTimeout(() => {
        resolve(item);
      }, 500);
    } else {
      reject({
        statusCode: 404,
        message: "Item not found",
      });
    }
  });
};


export async function getItemById(id) {
  const response = await fetchItem(id);
  const product = response;
  console.log("Fetched item", product);
  return product
}
