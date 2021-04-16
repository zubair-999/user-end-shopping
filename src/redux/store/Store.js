import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {ProductDetailReducer, ProductReducer} from "../reducers/ProductReducer";
import {CartReducer} from "../reducers/CartReducer";
import {OrderCreateReducer} from "../reducers/OrderReducer";




const reducer = combineReducers({
    productList: ProductReducer,
    productDetail: ProductDetailReducer,
    cart: CartReducer,
    orderCreate: OrderCreateReducer
})
const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {}

const middleware = [thunk]
const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    }
}


const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
