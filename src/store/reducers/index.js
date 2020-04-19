import { combineReducers } from 'redux';
import user from './user';
import Cart from './Cart';
import Store from './Store';
import CartSize from './CartSize';



export default combineReducers({
    user,
    Cart,
    Store,
    CartSize
})
