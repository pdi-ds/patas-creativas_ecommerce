import React, { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const add = () => {
    count < stock
      ? setCount(count + 1)
      : alert(`La compra máxima es de ${stock} items`);
  };

  const subtract = () => {
    count > initial
      ? setCount(count - 1)
      : alert(`La compra minima es de ${initial} items`);
  };

  const reset = () => {
    setCount(initial);
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-center align-items-center gap-2">
        <h1>{count}</h1>
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
          <div className="d-flex flex-row justify-content-center gap-2">
            <button onClick={subtract}>-</button>
            <button onClick={add}>+</button>
          </div>
          <div className="d-flex flex-row justify-content-center gap-2">
            <button onClick={() => onAdd(count)}>Añandir al carrito</button>
            <button onClick={reset}>Borrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
