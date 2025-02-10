/* eslint-disable no-unused-vars */

import "./cart.css";
import { Link } from "react-router";
import { Button } from "flowbite-react";
import { NotificationDetailsList } from "../../common/productCard/notification/NotificationDetailsList";
import { useContext } from "react";
import { CartContext } from "../../../context/CartCreateContext";

const Cart = () => {
  const { cart, removeCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount(); 

  return (
    <div className="cartPanel px-1 py-1">
      <h1> Notifications submission panel </h1>
      <div className="flex justify-left gap-2 mb-5">
        <Button className="text-sm text-yellow-100 bg-blue-900">
          <Link to="/checkout"> CheckOut </Link>
        </Button>
        <Button
          className="text-sm text-green-100 bg-black"
          onClick={removeCart}
        >
          Empty cart
        </Button>
      </div>
      <div className="block">
        <span style={{fontSize:"2em", textDecoration: "underline"}}>Total Management Cost: ${total}</span>
      </div>

      {cart.map((product) => {
        return (
          <div key={product.ID} className="border-4 border-black p-5 mb-5">
            <h2>Title: {product.title}</h2>
            <h2>Quantity: {product.quantity}</h2>
            <h2>Cost: {product.cost}</h2>
            <h2>Total Management Cost: ${product.quantity * product.cost}</h2>
            <div style={{ display: "flex" }}>
              <div>
                <NotificationDetailsList notification={product} />
              </div>
              <div style={{ width: "80%" }}>
                <img
                  className="notificationCardImg"
                  src={product.img}
                  alt="image 1"
                />
              </div>
            </div>
            <Button className="text-sm" onClick={() => removeById(product.ID)}>
              Remove {product.ID}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
