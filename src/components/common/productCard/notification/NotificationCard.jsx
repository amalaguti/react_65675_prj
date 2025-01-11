import "./NotificationCard.css";

("use client");

import { Button, Card } from "flowbite-react";

export function NotificationCard(props) {  
  const notification = props.notification

  if (!notification) {
    alert("No available notifications");
    return null;
  }

  return (
    <Card className="notificationCard">
      <h5 className="text-2xl font-bold tracking-tight text-gray-500 dark:text-white">
        {notification.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {notification.description}
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-900 dark:text-white">
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
      </ul>
      <Button>
        Read more
        <svg
          className="-mr-1 ml-2 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
  );
}
