import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails , updateUserProfile } from "../actions/userAction";
import Message from "../components/shared/Message";
import Loader from "../components/shared/Loader";
import { listOrders } from "../actions/orderAction";
import {LinkContainer} from 'react-router-bootstrap'


const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  // const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const userDetails = useSelector((state)=> state.userDetails);
  const {loading, error,user} = userDetails
  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;
  const userUpdateProfile = useSelector((state)=>state.userUpdateProfile)
  const {success} = userUpdateProfile

  const orderList = useSelector((state)=>state.orderList);
  const {loading:loadingOrders , orders , error:errorOrders} = orderList

 let navigate  =  useNavigate();

  useEffect(()=>{
      if(!userInfo)
      {
          navigate("/login");
      }
      else
      {
          if(!user.name)
          {
            dispatch(listOrders())
              dispatch(getUserDetails("profile"))
          }
          else
          {
              setName(user.name);
              setEmail(user.email);
          }
      }
  },[navigate, userInfo, user, dispatch])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile({id:user._id, name, email,password}))
  };

  return (
    <>
    
      <Row>
          <Col md={3}>
          <h1>UPDATE PROFILE</h1>
      
        {loading && <Loader/>}
      {error && <Message variant="danger">{error}</Message>}
        {success && <Message variant="success">Profile Updated</Message>}
        {/* {message && <Message variant="danger">{message}</Message>} */}
        <Form
        onSubmit={submitHandler}
        >
            <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <br />
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <br />
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <br />
          <Form.Group controlId="confirmpassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-Enter Password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <br />
          <Button type="submit" variant="dark">
            Update
          </Button>
        </Form>
          </Col>
          <Col md={9}>
            <h1>My Orders</h1>
            {loadingOrders ? <Loader/> : errorOrders ? <Message variant="danger">{errorOrders}</Message>:(
              <Table striped bordered hover responsive className="table-sm">
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>DATE</td>
                    <td>TOTAL</td>
                    <td>PAID</td>
                    <td>DELIVERED</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {
                    orders.map(order=>(
                      <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.createdAt.substring(0,10)}</td>
                        <td>{order.totalPrice}</td>
                        <td>{order.isPaid ? order.paidAt.substring(0,10):(
                          <i className="fas fa-times" style={{color:'red'}}></i>
                        )}</td>
                        <td>{order.isDelivered ? order.deliveredAt.substring(0,10):(
                          <i className="fas fa-times" style={{color:'red'}}></i>
                        )}</td>
                        <td>
                          <LinkContainer to={`/order/${order._id}`}>
                            <Button variant="light">Details</Button>
                          </LinkContainer>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
            )}
          </Col>
      </Row>
    </>
  );
};

export default ProfileScreen;
