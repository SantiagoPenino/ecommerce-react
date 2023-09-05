import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = (item) => {
  
  const { removeItem } = useContext(CartContext); 

  return <div className="container card-body d-flex col-12 justify-content-around">
    <img src={item.image} alt={item.name} className="img-fluid w-25"/>
    <h3 className="card-title text-center">{item.name}</h3>
    <p className="card-text">${item.price}</p>
    <p className="card-text">x{item.quantity}</p>
    <button onClick={() => removeItem(item.id)} className="btn btn-danger rounded-circle pt-2">x</button>
    </div>;
};

export default CartItem;
