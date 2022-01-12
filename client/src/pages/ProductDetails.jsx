import React,{useState, useEffect} from "react";
// import { Products } from "../products";
import axios from "axios";
import {
  Button,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

const ProductDetails = ({ match }) => {
  // const product = Products.find((p) => p._id === match.params.id);
  // console.log(match.params.id);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async ()=>{
    try{
      const {data} = await axios.get(`/api/products/${match.params.id}`)
      setProduct(data);
    }
    catch (err) {
      console.error(err);
    }
  }
    fetchProduct()
  },[])
  return (
    <div>
        <Link to="/" style={{textDecoration:'none'}}><i class="fa-solid fa-arrow-left-long"></i> &nbsp;GO BACK</Link>
      <Row style={{ margin: "10% 0%" }}>
        <Col md={6}>
          <Image src={product.image} alt={product.name} width={"400px"} fluid />
        </Col>
        <Col md={6} >
          <ListGroupItem>
            <h3>{product.name}</h3>
            <hr />
            Brand: {product.brand}
          </ListGroupItem>
          <ListGroupItem>
            <Rating
              value={product.rating}
              text={`${product.numReviews} Reviews`}
            />
          </ListGroupItem>
          <ListGroupItem>
            <strong> Price :</strong> &nbsp;{" "}
            <i className="fa-solid fa-indian-rupee-sign"></i>&nbsp;
            {product.price}
          </ListGroupItem>
          <ListGroupItem>{product.description}</ListGroupItem>

          <br />
          <Col md={6} style={{marginLeft:'2rem'}}>
          <ListGroup>
            <ListGroupItem>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </Col>
                <hr />
                <Button
                  className="btn-lg  btn-dark"
                  style={{ borderRadius: "0" }}
                  type="button"
                >
                  Add to Cart
                </Button>
              </Row>
            </ListGroupItem>
          </ListGroup>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
