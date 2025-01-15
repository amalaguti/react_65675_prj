import "./NotificationCard.css";
import { NotificationDetailsList } from "./NotificationDetailsList";
import { NotificationButtonsActions } from "./NotificationButtonsActions";


import { Button, Card } from "flowbite-react";

export function NotificationCard(props) {
  const notification = props.notification;

  return (
  <>
    {notification ? (<Card className="notificationCard">
        <h5 className="text-sm font-bold tracking-tight text-gray-500 dark:text-white">
          {notification.title}
        </h5>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-400">
          {notification.description}
        </p>
        <NotificationDetailsList notification={notification} />
        <Button className="px-0 py-0 text-sm">
          More info
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
        <NotificationButtonsActions />
      </Card>) : (null)}
  </>)

  
}
