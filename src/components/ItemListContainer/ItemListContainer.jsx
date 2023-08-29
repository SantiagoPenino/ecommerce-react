import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../back";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  //HOOKS PARA MOSTRAR TODOS LOS PRODUCTOS SEGUN CATEGORIA
  useEffect(() => {
    setIsLoading(true);
    getProducts(categoryId).then((response) => {
      setItems(response);
      setIsLoading(false);
    });
  }, [categoryId]);

  return <ItemList items={items} isLoading={isLoading} />;
};

export default ItemListContainer;
