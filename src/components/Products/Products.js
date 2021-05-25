import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ProductAction, ProductSearchAction} from "../../redux/actions/ProductAction";
import { Col, Row} from "react-bootstrap";
import Product from "./Product";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";
import Slider from "../Carousel/Carousel";
import {Route} from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";

const Products=()=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(ProductAction())
    },[dispatch])
    const productList=useSelector(state => state.productList)
    const {products, loading, error}=productList
    return(
        <>
            <Route render={({history}) => <SearchBox history={history}/>}/>
            <Slider/>
            <h1>Product</h1>
            {loading ? (
                <Loader/>
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Row>
                    {products && products.map((product)=> (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product}/>
                        </Col>
                    ))}
                </Row>
            )}
        </>
    )
}
export default Products;
