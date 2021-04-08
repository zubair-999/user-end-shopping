import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {ProductDetailReducer, ProductReducer} from "../reducers/ProductReducer";
import {CartReducer} from "../reducers/CartReducer";




const reducer = combineReducers({
    productList: ProductReducer,
    productDetail: ProductDetailReducer,
    cart: CartReducer
})
const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const middleware = [thunk]
const initialState = {
    cart: { cartItems: cartItemsFromStorage }
};

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
