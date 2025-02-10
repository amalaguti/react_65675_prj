import "./cartWidget.css";
import { PiSolarPanelFill } from "react-icons/pi";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../../context/CartCreateContext";

export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let total = getTotalItems();

  return (
    <div>
      <Link to="/cart">
        <PiSolarPanelFill id="cartLogo" />
        <div>
          <h2>Items: {total}</h2>
        </div>
      </Link>
    </div>
  );
};
