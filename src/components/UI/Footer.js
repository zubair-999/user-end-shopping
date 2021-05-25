import React from "react";
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <footer style={{backgroundColor:"lightgray"}}>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; Techling(Pvt)Ltd
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;
