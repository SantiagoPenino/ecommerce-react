import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" style={{ display: totalQuantity > 0 ? "block" : "none" }}>
      <Icon className="cart-icon display-6" icon="raphael:cart" />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;
