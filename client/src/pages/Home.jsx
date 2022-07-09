import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";


const Home = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  console.log(products);
  return (
    <>
      {loading ? (
        <Loader/>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
        <Row>
          {products.map((product) => (    
              <Col key={product._id} md={3} style={{height:'450px'}}>
                <Product product={product} />
              </Col>
          ))}
        </Row>
        <Row>
          <h1>

          Men's Fashion
          </h1>
        </Row>
        </>
      )}
    </>
  );
};

export default Home;
