import { Button, Card, Form, FormControl, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

/*
react-bootstrap-icons
https://www.npmjs.com/package/react-bootstrap-icons
npm i react-bootstrap-icons
MIT License
*/

import "./styles.css";

function ProductCard() {
  return (
    <Card>
      <Card.Body className="product-card-body">
        <div className="component-product-card-img">
          <img src={require("assets/images/desktop.png")} alt="Desktop" />
        </div>
        <Card.Title>Computador Desktop - Intel Core i7</Card.Title>
        <div className="component-product-card-text">
          <Card.Text className="component-product-card-text-c1">R$</Card.Text>
          <Card.Text className="component-product-card-text-c2">
            2.799
          </Card.Text>
          <Card.Text className="component-product-card-text-c3">,00</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
