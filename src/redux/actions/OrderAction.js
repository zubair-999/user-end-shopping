import {ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS} from "../constants/Constants";
import Axios from "../../axios/Axios";

export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_CREATE_REQUEST,
        })

        const { data } = await Axios.post(`/order`, order)

        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data,
        })
        // dispatch({
        //     type: CART_CLEAR_ITEMS,
        //     payload: data,
        // })
        // localStorage.removeItem('cartItems')
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: message,
        })
    }
}
