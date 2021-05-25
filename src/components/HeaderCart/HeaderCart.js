import React from 'react'
import './HeaderCart.css'
import {useSelector} from "react-redux";
import CartIcon from "./CartIcon";
import {Button} from "antd";

const HeaderCart=()=> {
    debugger;
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart
    return (
        <Button className='button'>
           <span className='icon'>
               <CartIcon/>
           </span>
            <span>
                {cartItems.length}
            </span>
        </Button>
    )
}
export default HeaderCart;
