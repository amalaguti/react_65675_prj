import { useState } from "react";
import "./counter.css";
import { Button } from "flowbite-react";

export const Counter = ({ count, callback }) => {
  const add = () => {
    callback(counter + 1);
  };

  const substract = () => {
    callback(counter - 1);
  };

  console.log(count);
  return (
    <div className="notifications-counter inline-flex gap-2">
      <Button className="p-0 m-0 text-sm" onClick={substract()}>-</Button>
      <h2>Notifications: {count} </h2>
      <Button onClick={add()}>+</Button> */}
    </div>
  );
};
