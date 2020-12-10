import productReducer from './productReducer';
import cartReducer from './cartReducer'
import {combineReducers} from 'redux';



export default combineReducers({
    productReducer: productReducer,
    cartReducer: cartReducer
}); 

