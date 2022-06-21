import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails , updateUserProfile } from "../actions/userAction";
import Message from "../components/shared/Message";
import Loader from "../components/shared/Loader";
import FormContainer from "../components/shared/FormContainer";
// import Loader from "../components/shared/Loader";


const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const userDetails = useSelector((state)=> state.userDetails);
  const {loading, error,user} = userDetails
  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;
  const userUpdateProfile = useSelector((state)=>state.userUpdateProfile)
  const {success} = userUpdateProfile

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
        {error && <Message variant="danger">{error}</Message>}
        {success && <Message variant="success">Profile Updated</Message>}
        {loading && <Loader/>}
        {message && <Message variant="danger">{message}</Message>}
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
          <Col md={8}>
          </Col>
      </Row>
    </>
  );
};

export default ProfileScreen;
