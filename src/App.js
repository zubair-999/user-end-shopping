import React from 'react';
import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";
import { Container } from "react-bootstrap";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Products from "./components/Products/Products";
import ProductDetail from "./components/Products/ProductDetail";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Shipping/Shipping";
import Payment from "./components/Payment/Payment";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import ThankYou from "./components/Thankyou/Thankyou";
import SearchProducts from "./components/SearchProducts/SearchProducts";
import SearchBox from "./components/SearchBox/SearchBox";

const App=()=> {
  return (
      <Router>
        <Header/>
        <main  >
            <Container>
                <Route path="/productDetail/:id" excat component={ProductDetail}/>
                <Route path="/cart/:id?" excat component={Cart}/>
                <Route path="/shippingDetail" exact component={Shipping}/>
                <Route path="/payment" exact component={Payment}/>
                <Route path="/placeorder" exact component={PlaceOrder}/>
                <Route path="/thank-you" exact component={ThankYou}/>
                <Route path="/search" exact component={SearchProducts} />
                <Route path="/" exact component={Products} />
            </Container>
        </main>
        <Footer/>
      </Router>
  );
}

export default App;
