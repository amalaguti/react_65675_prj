import "./cart.css";
import { Link } from "react-router";
import { Button } from "flowbite-react";

const Cart = () => {
  return (
    <div className="cartPanel px-1 py-1">
      <h1> CheckOut Panel </h1>
      <Button className="text-sm">
        <Link to="/checkout"> CheckOut </Link>
      </Button>

    </div>
  );
};

export default Cart;
