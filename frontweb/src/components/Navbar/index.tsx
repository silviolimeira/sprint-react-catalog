import { Container, Nav, Navbar } from "react-bootstrap";

import "./styles.css";

function NavbarC() {
  return (
    <>
      <Navbar bg="primary" className="navbar navbar-dark bg-dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">DS Catalog</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "500px" }}
              navbarScroll
            >
              <Nav.Link href="home">HOME</Nav.Link>
              <Nav.Link href="#action2">CATÁLOGO</Nav.Link>
              <Nav.Link href="#action2">ADM</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarC;
