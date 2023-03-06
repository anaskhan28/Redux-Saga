import {combineReducers} from 'redux'
import {cartData} from './reducer'
import {productData} from './ProductReducer'


export default combineReducers({
    cartData,
    productData
})