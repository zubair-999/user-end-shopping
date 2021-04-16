import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AddToCartAction, RemoveFromCartAction} from "../../redux/actions/CartAction";
import {Button, Card, Col, Form, Image, ListGroup, Row} from "react-bootstrap";
import Message from "../Message/Message";
import {Link, useHistory} from "react-router-dom";

const Cart=({match, location})=>{
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const history =useHistory()
    const dispatch=useDispatch()
    const cart=useSelector(state => state.cart)
    const {cartItems}=cart
    useEffect(()=> {
        if(productId){
            dispatch(AddToCartAction(productId, qty))
        }
    }, [dispatch, productId, qty])
    const removeFromCartHandler=(id)=>{
        dispatch(RemoveFromCartAction(id))
    }
    const checkoutHandler=()=>{
        history.push('/shippingDetail')
    }
    return(
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message>
                        Your cart is empty <Link to='/'>Go Back</Link>
                    </Message>
                ) : (
                    <ListGroup variant='flush'>
                        {cartItems && cartItems.map(item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded/>
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/productDetail/${item.product}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>
                                        {item.price} Rs
                                    </Col>
                                    <Col md={2}>
                                        <Form.Control as='select' value={item.qty} onChange={(e)=>
                                            dispatch(AddToCartAction(productId, Number(e.target.value)))}>
                                            {[...Array(item.stock).keys()].map(x=>(
                                                <option key={x+1} value={x+1}>
                                                    {x+1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button variant='light' type='button' onClick={() => removeFromCartHandler(item.product)}>
                                            <i className="fas fa-trash-alt"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>
                                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                            </h2>
                            {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)} Rs
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type='button' className='btn-block' disabled={cartItems.length === 0} onClick={checkoutHandler}>
                                Proceed To Checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    )
}
export default Cart;
