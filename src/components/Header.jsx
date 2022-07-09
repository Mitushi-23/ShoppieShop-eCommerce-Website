import React from "react";
import { Nav, Navbar, Container, NavDropdown, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";
import { useState } from "react";
import {productCategory} from '../actions/productActions'

const Header = () => {
  const [category, setcategory] = useState("null")
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    navigate("/login");
    dispatch(logout());
  };
  const handleClick=(e)=>{
    setcategory(e.target.value);
    dispatch(productCategory(e.target.value));
  }
  return (
    <>
      <Navbar bg="" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand>ONLINE SHOP</Navbar.Brand>
          </Link>
          <Form.Select
            aria-label="Default select example"
            style={{ width: "75%", margin: "auto" }}
            onChange={(e)=>{handleClick(e)}}
          >
            <option value="null">Filter By Category</option>
            <option value="men">Men's Fashion</option>
            <option value="women">Women's Fashion</option>
            <option value="electronics">Electronics</option>
            <option value="Kitchen & Dining">Kitchen & Dining</option>
            <option value="jewelery">Jewelery & Watches</option>
            <option value="bags & shoes">Bags & Shoes</option>
            <option value="home & furniture">Home & Furniture</option>
            <option value="tools & hardware">Tools & Hardware</option>
          </Form.Select>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <p
                to=""
                style={{ textDecoration: "none" }}
                onClick={() =>
                  userInfo ? navigate("/cart") : navigate("/login")
                }
              >
                <Nav.Link href="#home" className="text-light">
                  <i className="fa-solid fa-cart-shopping text-dark"></i>
                  &nbsp;Cart
                </Nav.Link>
              </p>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <Link
                    to="/profile"
                    style={{ textDecoration: "none" }}
                    onClick={() => navigate("/profile")}
                  >
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Nav.Link href="#link" className="text-light">
                    <i className="fa-solid fa-user text-dark"></i>
                    &nbsp; SignIn
                  </Nav.Link>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;