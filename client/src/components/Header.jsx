import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand>ONLINE SHOP</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/cart"style={{ textDecoration: "none" }}>
                <Nav.Link href="#home" className="text-light">
                  <i className="fa-solid fa-cart-shopping text-dark"></i>
                  &nbsp;Cart
                </Nav.Link>
              </Link>
              <Link to="/signin"style={{ textDecoration: "none" }}>
                <Nav.Link href="#link" className="text-light">
                  <i className="fa-solid fa-user text-dark"></i>
                  &nbsp; SignIn
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
