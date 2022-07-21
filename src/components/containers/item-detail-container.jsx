import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../json/productos";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(false);
  let { id } = useParams();
  useEffect(() => {
    getFetch()
      .then((res) => setProducto(res.filter((prod) => prod.id === id)))
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <div>
      {producto && producto.length > 0 ? (
        <div>{producto[0].name}</div>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default ItemDetailContainer;
