import React from 'react';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import ProfileScreen from './pages/ProfileScreen';
// import Profile from './pages/ProfileScreen';
import Register from './pages/Register';

const App = () => {
  return (
    <>
    <Router>
      <Header/>
    <main>
      <Container>
        <h1 className='text-center my-3' style={{color:'black'}}>ShoppieShop</h1>
       <Route path="/" component = {Home} exact/>
       <Route path="/products/:id" component = {ProductDetails} exact/>
       <Route path="/cart/:id?" component = {Cart} exact/>
       <Route path="/profile" component = {ProfileScreen} exact/>
       <Route path="/login" component = {Login} exact/>
       <Route path="/register" component = {Register} exact/>
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
