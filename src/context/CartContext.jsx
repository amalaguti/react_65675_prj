/* eslint-disable react/prop-types */
import { useState } from "react";
import { CartContext } from "./CartCreateContext";

// Create context
// Moved to separate file CartCreateContext.jsx 
// to allow Fast refresh
// export const CartContext = createContext(); 

// Create context provider
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Verify presence of product in cart array
    let isInCart = cart.some((elem) => elem.id === product.id);
    if (isInCart) {
      // TODO
      alert("Item already present in cart");
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
      return acc + elem.price * elem.quantity;
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
