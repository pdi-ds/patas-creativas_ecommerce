import React from "react";
import shoppingCart from "../../imgs/shopping-cart.svg";

const CartWidget = () => {
  return (
    <div>
      <img src={shoppingCart} alt="carrito de compra" />
    </div>
  );
};

export default CartWidget;
