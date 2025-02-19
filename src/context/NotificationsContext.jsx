/* eslint-disable react/prop-types */
import { useState } from "react";
import { CartContext } from "./Contexts";
import { calcCost } from "../utils/notificationManagement";

// Create context provider
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Verify presence of product in cart array
    let isInCart = cart.some((elem) => elem.id === product.id);
    if (isInCart) {
      alert("Item already present in cart", product.ID);
    } else {
      setCart([...cart, product]);
    }
  };

  const removeCart = () => {
    setCart([]);
  };

  const removeById = (id) => {
    let newCart = cart.filter((elem) => elem.id !== id);
    setCart(newCart);
  };

  const getTotalAmount = () => {
    let total = cart.reduce((acc, elem) => {
      return acc + calcCost(elem.type) * elem.quantity;
    }, 0);
    return total;
  };

  const getTotalItems = () => {
    let total = cart.reduce((acc, elem) => {
      return acc + elem.quantity;
    }, 0);
    return total;
  };  

  let data = {
    cart,
    addToCart,
    removeCart,
    removeById,
    getTotalAmount,
    getTotalItems
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
