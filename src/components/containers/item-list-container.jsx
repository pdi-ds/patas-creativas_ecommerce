import React from "react";
import ItemCount from "../item-count/item-count";

export const ItemListContainer = ({ message }) => {
  const onAdd = (count) => {
    alert(`Agregaste ${count} items al carrito`);
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3">
      <h1>{message}</h1> <ItemCount initial={1} stock={50} onAdd={onAdd} />
    </div>
  );
};
export default ItemListContainer;
