import {combineReducers} from 'redux'
import userReducer from "./user/userReducer";

export default combineReducers({
    user: userReducer //state name: user
})