import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css";

const CartItem = (item) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="container cart-card d-flex col-12 justify-content-around">
      <img
        src={`/public/img/${item.imageId}`}
        alt={item.title}
        className="cart-img img-fluid"
      />
      <h3 className="card-title text-center">{item.title}</h3>
      <p className="card-text">${item.price}</p>
      <p className="card-text">Cantidad: {item.quantity}</p>
      <p className="card-text">SubTotal: </p>
      <button
        onClick={() => removeItem(item.id)}
        className="btn btn-danger cart-remove"
      >
        x
      </button>
    </div>
  );
};

export default CartItem;
