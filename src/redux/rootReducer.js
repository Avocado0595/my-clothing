import {combineReducers} from 'redux'
import userReducer from "./user/userReducer";
import productReducer from './product/productReducer';


export default combineReducers({
    user: userReducer ,//state name: user
    product: productReducer //state: listItem
})