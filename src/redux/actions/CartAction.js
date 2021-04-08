import {CART_ADD_ITEM, CART_REMOVE_ITEM} from "../constants/Constants";
import Axios from "../../axios/Axios";

export const AddToCartAction=(id, qty) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/product/public/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data.id,
            name: data.name,
            image: data.image,
            price: data.price,
            stock: data.stock,
            qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const RemoveFromCartAction = (id) => async (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
