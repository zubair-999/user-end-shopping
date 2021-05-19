import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAIL,
    PRODUCT_SEARCH_REQUEST,
    PRODUCT_SEARCH_SUCCESS,
    PRODUCT_SEARCH_FAIL
} from "../constants/Constants";
import Axios from "../../axios/Axios";

export const ProductAction = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const { data } = await Axios.get(`/product/public`)
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
export const ProductSearchAction = ({name}) => async (dispatch) => {
    debugger;
    try {
        dispatch({ type: PRODUCT_SEARCH_REQUEST })
        const { data } = await Axios.post('/product/search/public',{name})
        dispatch({
            type: PRODUCT_SEARCH_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_SEARCH_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
export const ProductDetailAction = (id) => async (dispatch) => {
    debugger;
    try {
        dispatch({ type: PRODUCT_DETAIL_REQUEST })
        const { data } = await Axios.get(`/product/public/${id}`)
        dispatch({
            type: PRODUCT_DETAIL_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAIL_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
