import { createContext, useState } from "react";
import ItemDetail from "../components/ItemDetailContainer/ItemDetail";

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const totalQuantity =
    cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0) || 0;

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya ha sido agregado");
    }
  };
  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };
  const clearCart = () => {
    setCart([]);
  };
  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
