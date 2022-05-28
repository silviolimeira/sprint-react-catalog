import { Button, Card, Form, FormControl, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

/*
react-bootstrap-icons
https://www.npmjs.com/package/react-bootstrap-icons
npm i react-bootstrap-icons
MIT License
*/

import "./styles.css";

function ProductSearch() {
  return (
    <>
      <div className="product-search-header">Catálogo de Produtos</div>
      <Card className="product-search-card">
        <Card.Body className="product-search-card-body">
          <div className="product-search">
            <InputGroup className="mb-3">
              <div className="product-search-container1">
                <FormControl
                  placeholder="Nome do produto"
                  aria-label="Nome do produto"
                  aria-describedby="basic-addon2"
                />
                <Button variant="light outline-secondary" id="button-addon2">
                  <Search />
                </Button>
              </div>
              <div className="product-search-container2">
                <Form.Select
                  className="light outline-secondary"
                  aria-label="Default select example"
                >
                  <option>Categoria</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Button
                  className="product-search-container2-button"
                  variant="light"
                >
                  LIMPAR FILTRO
                </Button>
              </div>
            </InputGroup>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductSearch;
