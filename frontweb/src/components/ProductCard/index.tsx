import ProductPrice from "components/ProductPrice";
import { Button, Card, Form, FormControl, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

/*
react-bootstrap-icons
https://www.npmjs.com/package/react-bootstrap-icons
npm i react-bootstrap-icons
MIT License
*/

import "./styles.css";

function ProductCard() {
  return (
    <Card className="product-card">
      <Card.Body className="product-card-body">
        <div className="component-product-card-img">
          <Link to="/productdetail">
            <img src={require("assets/images/desktop.png")} alt="Desktop" />
          </Link>
        </div>
        <Link to="/productdetail">
          <ProductPrice />
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
