import { useState } from "react";
import propTypes from "prop-types";
import { motion } from "framer-motion";

const ItemCount = ({ initial, onAdd, stock }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="">
      <div className="d-flex justify-content-between">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="btn btn-warning"
          onClick={decrement}
        >
          -
        </motion.button>
        <h4 className="number">{quantity}</h4>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="btn btn-warning"
          onClick={increment}
        >
          +
        </motion.button>
      </div>
      <hr />
      <div>
        <button
          className="btn btn-warning"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;

ItemCount.propTypes = {
  initial: propTypes.number,
  stock: propTypes.number,
  onAdd: propTypes.func,
};
