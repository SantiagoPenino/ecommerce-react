import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);
  if (totalQuantity === 0) {
    return (
      <div className={`container ${styles.cart_body}`}>
        <h1 className={styles.empty_cart_title}>Ups! el carrito de compras esta vacio.</h1>
        <Link to="/" className="btn btn-warning">
          Ir al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div className={`container ${styles.cart_body}`}>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3 className={styles.total}>Total: ${total}</h3>
      <div className={styles.cart_buttons}>
        <button onClick={() => clearCart()} className="btn btn-danger">
          Vaciar Carrito
        </button>
        <Link to="/checkout" className="btn btn-warning">
          Ir al Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
