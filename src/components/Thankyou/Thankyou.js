import React from "react";
import {Card, Col, ListGroup, Row} from "react-bootstrap";
import Message from "../Message/Message";
import {useSelector} from "react-redux";

const ThankYou = () => {
    const orderCreate = useSelector(state => state.orderCreate)
    const {order} = orderCreate
    return(
        <>
           <Row>
               <Col>
                   <ListGroup variant='flush'>
                       <ListGroup.Item>
                           <h1>Thank you for shopping</h1>
                       </ListGroup.Item>
                       <ListGroup.Item>
                           <h3>Order Number</h3>
                           <Message variant='info'><h4>Your order number is: {order.order_id && order.order_id}</h4></Message>
                           <p>Please save or take snapshot your order number to track your order </p>
                       </ListGroup.Item>
                       <ListGroup.Item>
                           <h3>Contact Us</h3>
                           <p>Please feel free to contact us and get update your order and also register complaint</p>
                               <h5>HR:03001234567</h5>
                               <h5>Sales:03211234567</h5>
                       </ListGroup.Item>
                   </ListGroup>
               </Col>
           </Row>
        </>
    )
}
export default ThankYou;
