import { useState } from "react";
import "./counter.css";
import { Button } from "flowbite-react";

export const Counter = ({ count, callback }) => {
  
  const add = () => {
    callback(count + 1);
  };
  const substract = () => {
    callback(count - 1);
    };

  console.log("count: ", count);
  return (
    <div className="notifications-counter inline-flex gap-2">
      <Button className="p-0 m-0 text-sm">-</Button>
      <span>Notifications counter: {count} </span>
      <Button className="p-0 m-0 text-sm" onClick={add}>+</Button>
    </div>
  );
};
