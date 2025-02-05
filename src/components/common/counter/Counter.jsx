import { useState } from "react";
import "./counter.css";
import { Button } from "flowbite-react";

export const Counter = ({ item }) => {
  
  const addNotification = () => {
    alert("-Add- TO BE IMPLEMENTED");
  };
  const removeNotification = () => {
    alert("TO BE IMPLEMENTED");
    };

  return (
    <div className="notifications-counter inline-flex gap-2">
      <Button className="p-0 m-0 text-sm" onClick={removeNotification}>Del</Button>
      <span>Submit issues: {item.stocked} </span>
      <Button className="p-0 m-0 text-sm" onClick={addNotification}>Add</Button>
    </div>
  );
};
