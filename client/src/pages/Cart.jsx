import React, { useEffect } from "react";
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart , removeFromCart } from "../actions/cartActions";
import Message from "../components/shared/Message";

const Cart = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const cart = useSelector((state) => state.cart);
  const { cartItems} = cart;
  console.log(cartItems);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkOut=()=>{
      history.push('/login?redirect=shipping');
  }

  return (
    <>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty !&nbsp;<Link to="/">GO BACK</Link>
            </Message>
            // <h1>Your Cart is empty!<Link to="/">GO BACK</Link></h1>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroupItem>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link
                        to={`/products/${item.product}`}
                        style={{ textDecoration: "none" }}
                      >
                        {item.name}
                      </Link>
                    </Col>
                    <Col md={2}>
                      &nbsp; <i className="fa-solid fa-indian-rupee-sign"></i>
                      &nbsp;
                      {item.price}
                    </Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option
                            key={x + 1}
                            value={x + 1}
                            style={{ color: "black" }}
                          >
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h4>
                  Total Products : {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                </h4>
                Total Price:&nbsp;
                <i className="fa-solid fa-indian-rupee-sign"></i>&nbsp;
                {cartItems.reduce((acc,item)=> acc + item.qty*item.price ,0).toFixed(2)}
              </ListGroupItem>
     
          <Button type="button"  disabled={ cartItems.length === 0} style={{borderRadius:'0'}} onClick={checkOut}>Proceed to CheckOut</Button>
            
            </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default Cart;
