import React, { useEffect } from "react";
import { useState } from "react";
import ItemCount from "../item-count/item-count";
import ItemList from "../item-list/item-list";

import Item1 from "../../imgs/branding_item1.webp";
import Item2 from "../../imgs/icons_item1.webp";
import Item3 from "../../imgs/illustration_item1.webp";

export const ItemListContainer = ({ message }) => {
  const [items, setItems] = useState([]);
  const productos = [
    { id: 1, name: "Branding", price: 1500, stock: 287, img: Item1 },
    { id: 2, name: "Iconos", price: 900, stock: 42, img: Item2 },
    { id: 3, name: "Ilustraciones", price: 1200, stock: 87, img: Item3 },
  ];

  const wait = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });

  useEffect(() => {
    wait.then((res) => setItems(res)).catch((error) => console.log(error));
  }, []);

  const onAdd = (count) => {
    alert(`Agregaste ${count} items al carrito`);
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3">
      <h1>{message}</h1> <ItemCount initial={1} stock={50} onAdd={onAdd} />
      <ItemList items={items} />
    </div>
  );
};
export default ItemListContainer;
