import "./notificationButtonsActions.css";

import { Button } from "flowbite-react";

export const NotificationButtonsActions = () => {
  return (
    <div
      id="notificationButtonsActions"
      className="flex flex-wrap gap-1 space-x-2 justify-center"
    >
      <Button title="Start" className="px-0 py-0 text-sm">
        <svg
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.293 4.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L11.586 10 6.293 5.707a1 1 0 010-1.414z" />
        </svg>
      </Button>
      <Button title="Pause" className="px-0 py-0 text-sm">
        <svg
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V4zm6 0a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
      <Button title="Terminate" className="px-0 py-0 text-sm">
        <svg
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L10 8.586 7.707 6.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 001.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
      <Button title="Remove" id="notificationBtnRemove" className="px-0 py-0 text-sm">
        <svg
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H3a2 1 0 100 2h1v10a2 2 0 002 2h8a2 2 0 002-2V6h1a1 1 0 100-2h-2V3a1 1 0 00-1-1H6zm3 4a1 1 0 112 0v8a1 1 0 11-2 0V6zm4 0a1 1 0 10-2 0v8a1 1 0 102 0V6z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </div>
  );
};
