import React,{useEffect,useState} from "react";
// import { Products } from "../products";
import { Col, Row } from "react-bootstrap";
import Product from "./Product";
import axios from 'axios';

const Home = () => {
  const [Products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async ()=>{
    try{
      const res = await axios.get('/api/products')
      console.log(res.data);
      setProducts(res.data);
    }
    catch (err) {
      console.error(err);
    }
  }
    fetchProducts()
  },[])
  console.log(Products)
  return (
    <>
      <Row>
        {Products.map((product) => (
          <Col key={product._id} md={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
