import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./CartItem.module.css";

const CartItem = (item) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className={`container col-12 form-control ${styles.cart_card}`}>
      <img
        src={`/${item.categoryId}/${item.imageId}`}
        alt={item.title}
        className={`img-fluid ${styles.cart_img}`}
      />
      <h3 className={styles.cart_details}>{item.title}</h3>
      <p className={styles.cart_details}>${item.price}</p>
      <p className={styles.cart_details}>x {item.quantity}</p>
      <button
        onClick={() => removeItem(item.id)}
        className={`btn btn-danger ${styles.cart_remove}`}
      >
        &times;
      </button>
    </div>
  );
};

export default CartItem;
