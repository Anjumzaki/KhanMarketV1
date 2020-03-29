import { combineReducers } from 'redux';
import user from './user';
import Cart from './Cart';
import Store from './Store';



export default combineReducers({
    user,
    Cart,
    Store
})
