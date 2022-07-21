import React, { useEffect } from "react";
import { useState } from "react";
import ItemCount from "../item-count/item-count";
import ItemList from "../item-list/item-list";
import ItemDetail from "../item-detail/item-detail";
import { getFetch } from "../../json/productos";

export const ItemListContainer = ({ message }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [productos, setProductos] = useState([]); /* Placeholder */

  useEffect(() => {
    getFetch()
      .then((res) => setItems(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const onAdd = (count) => {
    alert(`Agregaste ${count} items al carrito`);
  };
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3">
      <h1>{message}</h1> <ItemCount initial={1} stock={50} onAdd={onAdd} />
      <ItemList items={items} />
      <ItemDetail />
    </div>
  );
};
export default ItemListContainer;
