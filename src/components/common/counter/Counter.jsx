/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./counter.css";
import { Button } from "flowbite-react";
import { CartContext } from "../../../context/CartCreateContext";

export const Counter = ({ item }) => {
  const [counter, setContador] = useState(1);
  const { addToCart } = useContext(CartContext);
  const { simpleTest } = useContext(CartContext);

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

  const onAddToCart = () => {
    alert("Added to cart - MISSING CONTEXT YET");
    simpleTest();
    // addToCart(objetoParaElCarrito);
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
      <Button id="btnAddToCart" className="btnCtr"  onClick={onAddToCart}>
        Add to Cart
      </Button>
      </div>
      </>

  );
};
