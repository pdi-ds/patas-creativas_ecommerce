import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Item = ({ item }) => {
  const { id, name, price, stock, img } = item;

  return (
    <Card style={{ width: "18rem", margin: "2rem" }}>
      <Card.Img src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Precio: ${price}
          <br />
          Inventario: {stock}
        </Card.Text>
        <Button variant="primary">Ver detalles</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
