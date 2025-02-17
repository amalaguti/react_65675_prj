/* eslint-disable react/prop-types */
import "./NotificationCard.css";
import { NotificationDetailsList } from "./NotificationDetailsList";
import { NotificationButtonsActions } from "./NotificationButtonsActions";
import { Button, Card } from "flowbite-react";
import { Link } from "react-router";
import { notificationImg } from "../../../../utils/notificationManagement";


export function NotificationCard(props) {
  const notification = props.notification;
  notification.img = notificationImg(notification.type);

  return (
    <>
      {notification ? (
        <Card className="notificationCard">
          <div className="flex items-center justify-between">
            <h5 className="text-sm font-bold tracking-tight text-gray-500 dark:text-white">
              {notification.title}
            </h5>
            <img
              className="notificationCardImg"
              width={80}
              height={80}
              src={notification.img}
              alt="image 1"
            />
          </div>
          <p className="text-xs font-normal text-gray-700 dark:text-gray-400">
            {notification.description}
          </p>
          <NotificationDetailsList notification={notification} />
          <Button>
            <Link
              to={`/product/${notification.id}`}
              className="flex items-center"
            >
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
            </Link>
          </Button>
          <NotificationButtonsActions />
        </Card>
      ) : null}
    </>
  );
}

