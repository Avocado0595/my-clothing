import {combineReducers} from 'redux'
import userReducer from "./user/userReducer";
import cartReducer from './cart/cartReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from './directory/directoryReducer';
import categoryReducer from './category/categoryReducer';
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']

}
const rootReducer = combineReducers({
    user: userReducer ,//state name: user
    cart: cartReducer, //state: listItem
    directory: directoryReducer,
    category: categoryReducer,
})

export default persistReducer(persistConfig, rootReducer);