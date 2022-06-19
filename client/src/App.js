import React from 'react';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Payment from './pages/Payment';
import ProductDetails from './pages/ProductDetails';
import ProfileScreen from './pages/ProfileScreen';
// import Profile from './pages/ProfileScreen';
import Register from './pages/Register';
import ShippingSreen from './pages/ShippingSreen';

const App = () => {
  return (
    <>
    <Router>
      <Header/>
    <main>
      <Container>
        <h1 className='text-center my-3' style={{color:'black'}}>ShoppieShop</h1>
        <Routes>
       <Route path="/"  element = {<Home/>} exact/>
       <Route path="/products/:id" element= {<ProductDetails/>} exact/>
       <Route path="/cart/:id" element= {<Cart/>} exact/>
       <Route path="/cart" element= {<Cart/>} exact/>
       <Route path="/profile" element= {<ProfileScreen/>} exact/>
       <Route path="/login" element= {<Login/>} exact/>
       <Route path="/login/shipping" element= {<ShippingSreen/>} exact/>
       <Route path="/register" element= {<Register/>} exact/>
       <Route path="/shipping" element= {<ShippingSreen/>} exact/>
       <Route path="/payment" element= {<Payment/>} exact/>
       </Routes>
      </Container>
      </main>
      <hr />
      <Footer/>
      <br />
      </Router>
    </>
  )
}

export default App
