import { useState } from "react";
import "./counter.css";
import { Button } from "flowbite-react";

export const Counter = ({ count, callback }) => {
  
  const addNotification = () => {
    // callback(count + 1);
    alert("-Add- TO BE IMPLEMENTED");
  };
  const removeNotification = () => {
    // callback(count - 1);
    alert("TO BE IMPLEMENTED");
    };

  return (
    <div className="notifications-counter inline-flex gap-2">
      <Button className="p-0 m-0 text-sm" onClick={removeNotification}>Del</Button>
      <span>Notifications counter: {count} </span>
      <Button className="p-0 m-0 text-sm" onClick={addNotification}>Add</Button>
    </div>
  );
};
