import propTypes from "prop-types";
import { PacmanLoader } from "react-spinners";

const ItemDetail = ({ item, isLoading }) => {
  if (isLoading) {
    return (
      <div className="loader">
        <PacmanLoader color="#ffc107" size={50} />
      </div>
    );
  }
  if (!item) return <h2>Producto no encontrado</h2>;
  return (
    <div className="d-flex container col-8 pt-5">
      <img src={item.image} alt={item.name} />
      <div className="card-body d-flex flex-column justify-content-around text-center">
      <h1 className="card-title">{item.name}</h1>
      <p className="card-text text-danger fw-bold fs-1">${item.price}</p>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  item: propTypes.object,
  isLoading: propTypes.bool,
};

export default ItemDetail;
