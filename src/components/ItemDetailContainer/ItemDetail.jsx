import { useState } from "react";
import { useContext } from "react";
import propTypes from "prop-types";
import { PacmanLoader } from "react-spinners";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item, isLoading}) => {
  if (isLoading) {
    return (
      //LOADER PARA CUANDO isLoading ES TRUE
      <div className="loader">
        <PacmanLoader color="#ffc107" size={50} />
      </div>
    );
  }
  //TODO: MEJORAR ESTO
  if (!item) return <h2>Producto no encontrado</h2>;

  const [quantityAdded, setQuantityAdded] = useState(0);
  const [newStock, setNewStock] = useState(item.stock);

  const { addItem } = useContext(CartContext);
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(item, quantity, newStock);
    setNewStock(newStock-quantity)
  };
  //DIV CON IMAGEN, NOMBRE Y PRECIO DEL PRODUCTO ELEGIDO
  return (
    <div className="d-flex container col-8 pt-5">
      <img src={`/${item.categoryId}/${item.imageId}`} alt={item.title} />
      <div className="card-body d-flex flex-column justify-content-around text-center align-items-center">
        <h1 className="card-title">{item.title}</h1>
        <p className="card-text fw-bold">Descripcion de {item.title}</p>
        {newStock < 5 ? (
          <p className="card-text">Apurate quedan {newStock} disponibles!</p>
        ) : (
          <p className="card-text">Quedan {newStock} disponibles</p>
        )}
        <p className="card-text text-danger fw-bold fs-1">${item.price}</p>
        {quantityAdded > 0 ? (
          <>
            <Link to="/cart" className="btn btn-warning">
              Terminar Compra
            </Link>
            <Link to="/" className="btn btn-warning">
              Seguir comprando
            </Link>
          </>
        ) : (
          <ItemCount initial={1} stock={newStock} onAdd={handleOnAdd} />
        )}
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  item: propTypes.object,
  isLoading: propTypes.bool,
};

export default ItemDetail;
