import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);
  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to="/" className="btn btn-warning">
          Ir al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()} className="btn btn=danger">
        Limpiar Carrito
      </button>
      <Link to="/checkout" className="btn btn-warning">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;
