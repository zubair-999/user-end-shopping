import React from 'react';
import { Card, CardImg} from "react-bootstrap";
import {Link} from "react-router-dom";


const Product=({product})=>{

    return(
        <Card className="my-3 p-3 rounded">
            <Link to={`/productDetail/${product._id}`}>
                <CardImg src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRED1-LycRSyO8NaqjIwHy8z7KRjgr7ocYWfg&usqp=CAU' variant='top' />
                {/*<CardImg src={product.image} variant='top' />*/}
            </Link>

            <Card.Body>
                <Link to={`/productDetail/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text>
                     {product.price} Rs
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product;
