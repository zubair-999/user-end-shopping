import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Message/Message'
import CheckoutSteps from '../CheckoutStep/CheckoutStep'
import { createOrder } from '../../redux/actions/OrderAction'
import { ORDER_CREATE_RESET } from '../../redux/constants/Constants'
import {ClipLoader} from "react-spinners";
//import { USER_DETAILS_RESET } from '../../redux/constants/Constants'

const PlaceOrder = ({ history }) => {
    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    debugger;
    const {cartItems} = cart
    const backend = cartItems.map(e => {
            return ({
                product: e.product,
                price: e.price,
                quantity: e.qty
            })
        })

    if (!cart.shippingAddress.values.address) {
        history.push('/shippingDetail')
    } else if (!cart.paymentMethod) {
        history.push('/payment')
    }
    //   Calculate prices
    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }

    cart.itemsPrice = addDecimals(
        cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )
    cart.shippingPrice = addDecimals(0)
    cart.totalPrice = (
        Number(cart.itemsPrice) +
        Number(cart.shippingPrice)
    ).toFixed(2)

    const orderCreate = useSelector((state) => state.orderCreate)
    const { order, success, error, loading } = orderCreate

    useEffect(() => {
        if (success) {
            history.push(`/thank-you`)
            //dispatch({ type: USER_DETAILS_RESET })
            // dispatch({ type: ORDER_CREATE_RESET })
        }
        // eslint-disable-next-line
    }, [history, success])

    const placeOrderHandler = () => {
        dispatch(
            createOrder({
                products: backend,
                contact_info: cart.shippingAddress.values,
                payment_mode: cart.paymentMethod,
                total_price: cart.totalPrice,
            })
        )
    }

    return (
        <>
            <CheckoutSteps step1 step2 step3 />
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Address: </strong>
                                {cart.shippingAddress.values.address}{' '}
                                <strong>Phone Number: </strong>
                                {cart.shippingAddress.values.contact_no}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <strong>Method: </strong>
                            {cart.paymentMethod}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            {cart.cartItems.length === 0 ? (
                                <Message>Your cart is empty</Message>
                            ) : (
                                <ListGroup variant='flush'>
                                    {cart.cartItems.map((item, index) => (
                                        <ListGroup.Item key={index}>
                                            <Row>
                                                <Col md={2}>
                                                    <Image
                                                        // src={item.image}
                                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRED1-LycRSyO8NaqjIwHy8z7KRjgr7ocYWfg&usqp=CAU'
                                                        alt={item.name}
                                                        fluid
                                                        rounded
                                                    />
                                                </Col>
                                                <Col>
                                                    <Link to={`/productDetail/${item.product}`}>
                                                        {item.name}
                                                    </Link>
                                                </Col>
                                                <Col md={4}>
                                                    {item.qty} x Rs:{item.price} = Rs:{item.qty * item.price}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Items</Col>
                                    <Col>Rs:{cart.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>Rs:{cart.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>Rs:{cart.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {error && <Message variant='danger'>{error}</Message>}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className='d-flex justify-content-center'>
                                    <Button
                                        type='button'
                                        className='Button'
                                        disabled={cart.cartItems === 0}
                                        onClick={placeOrderHandler}
                                    >
                                        {loading ? <ClipLoader size={15} color="#FFFFFF" loading /> : 'Place Order'}
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default PlaceOrder
