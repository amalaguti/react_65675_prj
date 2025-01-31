import "./cartWidget.css";
import { PiSolarPanelFill } from "react-icons/pi";
import { Link } from "react-router";
export const CartWidget = () => {
  return (
    <div>
      <Link to="/cart">
        <PiSolarPanelFill id="cartLogo" />
      </Link>
    </div>
  );
};
