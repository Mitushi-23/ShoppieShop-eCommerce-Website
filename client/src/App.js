import React from 'react';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

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
