import React from "react";
import Item from "../item/item";

const ItemList = ({ items }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ItemList;
