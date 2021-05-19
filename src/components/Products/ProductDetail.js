import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ProductDetailAction} from "../../redux/actions/ProductAction";
import {Link, useHistory} from "react-router-dom";
import {Button, Card, Col, Form, Image, ListGroup, Row} from "react-bootstrap";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";

const ProductDetail=({match})=>{
    debugger;
    const history=useHistory()
    const [qty, setQty]=useState(1);
    const productId = match.params.id;
    const dispatch=useDispatch()
    const productDetail=useSelector(state => state.productDetail)
    const {product, loading, error}= productDetail
    useEffect(()=>{
        dispatch(ProductDetailAction(productId))
    },[dispatch, productId])
    const addToCartHandler=()=>{
        history.push(`/cart/${productId}?qty=${qty}`)
    }
    return(
        <>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            {loading ? <Loader/> : error ? <Message variant='dander'>{error}</Message> :(
                <Row>
                <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                <ListGroup variant='flush'>
                <ListGroup.Item>
                <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                Price: {product.price} RS
                </ListGroup.Item>
                <ListGroup.Item>
                {/*Category: {product.category.name}*/}
                </ListGroup.Item>
                <ListGroup.Item>
                Description: {product.description}
                </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col md={3}>
                <Card>
                <ListGroup variant='flush'>
                <ListGroup.Item>
                <Row>
                <Col>
                Price:
                </Col>
                <Col>
                <strong>{product.price} RS</strong>
                </Col>
                </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                <Row>
                <Col>
                Status:
                </Col>
                <Col>
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </Col>
                </Row>
                </ListGroup.Item>
            {product.stock > 0 && (
                <ListGroup.Item>
                <Row>
                <Col>
                Qty
                </Col>
                <Col>
                <Form.Control as='select' value={qty} onChange={(e)=>
                setQty(e.target.value)}>
            {[...Array(product.stock).keys()].map(x=>(
                <option key={x+1} value={x+1}>
            {x+1}
                </option>
                ))}
                </Form.Control>
                </Col>
                </Row>
                </ListGroup.Item>
                )}
                <ListGroup.Item>
                <Button onClick={addToCartHandler} className='btn-block' type='button' disabled={product.stock === 0}>
                Add To Cart
                </Button>
                </ListGroup.Item>
                </ListGroup>
                </Card>
                </Col>
                </Row>
            )}
        </>
    )
}
export default ProductDetail;
