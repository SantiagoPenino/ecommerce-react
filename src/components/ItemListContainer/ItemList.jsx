import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return (
      <div className="loader">
        <PacmanLoader color="#ffc107" size={50} />
      </div>
    );
  }
  return (
    <div className="container">
      <ul className="col-12 row justify-content-center">
        {items.map((item) => (
          <li key={item.id} className="card col-3 border-0 p-1 text-center">
            <Link
              className="text-decoration-none text-dark"
              to={`/item/${item.id}`}
            >
              <img src={item.image} alt={item.name} className="card-img-top" />
              <div className="card-body text-center">
                <h3 className="card-title">{item.name}</h3>
                <p className="card-text text-danger fw-bold fs-1">
                  ${item.price}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

ItemList.propTypes = {
  items: propTypes.array.isRequired,
  isLoading: propTypes.bool,
};

export default ItemList;
