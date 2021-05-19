import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { ProductSearchAction} from "../../redux/actions/ProductAction";
import { Col, Row} from "react-bootstrap";
import Product from "../Products/Product";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";

const SearchProducts=()=>{
    debugger;
    //  const key = match.params.name
    // const dispatch=useDispatch()
    // useEffect(()=>{
    //     dispatch(ProductSearchAction(key))
    // }, [dispatch,key])
    const searchList=useSelector(state => state.searchList)
    const {searchProducts, loading, error}=searchList
    return(
        <>
            <h1>Search Product</h1>
            {loading ? (
                <Loader/>
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Row>
                    {searchProducts && searchProducts.map((product)=> (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product}/>
                        </Col>
                    ))}
                </Row>
            )}
        </>
    )
}
export default SearchProducts;
