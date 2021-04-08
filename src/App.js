import React from 'react';
import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";
import { Container } from "react-bootstrap";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Products from "./components/Products/Products";
import ProductDetail from "./components/Products/ProductDetail";
import Cart from "./components/Cart/Cart";

const App=()=> {
  return (
      <Router>
        <Header/>
        <main className='py-3'>
            <Container>
                <Route path="/" exact component={Products} />
                <Route path="/productDetail/:id" excat component={ProductDetail}/>
                <Route path="/cart/:id?" excat component={Cart}/>
            </Container>
        </main>
        <Footer/>
      </Router>
  );
}

export default App;
