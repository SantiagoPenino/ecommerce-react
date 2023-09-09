import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './CartItem.css'

const CartItem = (item) => {
  
  const { removeItem } = useContext(CartContext); 

  return <div className="container cart-card d-flex col-12 justify-content-around">
    <img src={item.image} alt={item.name} className="cart-img img-fluid"/>
    <h3 className="card-title text-center">{item.name}</h3>
    <p className="card-text">${item.price}</p>
    <p className="card-text">Cantidad: {item.quantity}</p>
    <button onClick={() => removeItem(item.id)} className="btn btn-danger cart-remove">x</button>
    </div>;
};

export default CartItem;
