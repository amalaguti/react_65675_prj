/* eslint-disable react/prop-types */
import { useState } from "react";
import "./counter.css";
import { Button } from "flowbite-react";

export const Counter = ({ item }) => {
  const [counter, setContador] = useState(1);

  const addNotificationIssue = () => {
    if (counter < item.stocked) {
      setContador(counter + 1);
    } else {
      alert("No more stocked notifications");
    }
  };

  const removeNotificationIssue = () => {
    if (counter > 1) {
      setContador(counter - 1);
    }
  };

  const addToCart = () => {
    alert("Added to cart");
  };

  return (
    <>
    <div className="flex notifications-counter gap-2">
      <Button className="btnCtr p-0 m-0 text-sm" onClick={removeNotificationIssue}>
        -
      </Button>
      <span className="spanSubmit">Submit issues: {counter} </span>

      <Button className="btnCtr p-0 m-0 text-sm" onClick={addNotificationIssue}>
        +
      </Button>
    </div>
    <div>
      <Button id="btnAddToCart" className="btnCtr"  onClick={addToCart}>
        Add to Cart
      </Button>
      </div>
      </>

  );
};
