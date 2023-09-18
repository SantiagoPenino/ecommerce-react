import { useState } from "react";
import { useContext } from "react";
import propTypes from "prop-types";
import { PacmanLoader } from "react-spinners";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ item, isLoading }) => {
  if (isLoading) {
    return (
      //LOADER PARA CUANDO isLoading ES TRUE
      <div className="loader">
        <PacmanLoader color="#ffc107" size={50} />
      </div>
    );
  }

  if (!item)
    return (
      <div className={styles.not_found_body}>
        <img className={styles.ghost} src="/404.svg" alt="" />
        <h2 className={styles.not_found}>Producto no encontrado.</h2>
      </div>
    );
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(item, quantity);
  };

  //DIV CON IMAGEN, NOMBRE Y PRECIO DEL PRODUCTO ELEGIDO
  return (
    <div className={`container col-8 ${styles.item_detail_body}`}>
      <div className={styles.product_image}>
        <img src={`/${item.categoryId}/${item.imageId}`} alt={item.title} />
      </div>
      <div className={`card-body ${styles.product_details}`}>
        <h1 className="card-title">{item.title}</h1>
        <p className="card-text fw-bold">Descripcion de {item.title}</p>
        {item.stock === 0 ? (
          <p className={`card-text ${styles.no_stock}`}>Sin stock!</p>
        ) : (
          <p className={`card-text ${styles.stocked}`}>En stock</p>
        )}
        <p className="card-text text-danger fw-bold fs-1">${item.price}</p>
      </div>
      {quantityAdded > 0 ? (
        <div className={styles.product_buttons}>
          <Link to="/cart" className="btn btn-warning">
            Ir al Carrito
          </Link>
        </div>
      ) : (
        <div className={styles.product_buttons}>
          <ItemCount initial={1} stock={item.stock} onAdd={handleOnAdd} />
        </div>
      )}
    </div>
  );
};

ItemDetail.propTypes = {
  item: propTypes.object,
  isLoading: propTypes.bool,
};

export default ItemDetail;
