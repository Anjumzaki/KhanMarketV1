import {
    GET_CART_DATA,
    GET_CART_DATA_LOADING,
    GET_CART_DATA_ERROR,
  } from "../actions";
  
  const cartData = {
    cartData: [],
    cartLoading: false,
    cartError: "",
  };
  
  export default (state = cartData, action) => {
    switch (action.type) { 
      case GET_CART_DATA:
        return {
          ...state,
          cartData: action.payload
        };
      case GET_CART_DATA_LOADING:
        return {
          ...state,
          cartLoading: action.payload
        };
      case GET_CART_DATA_ERROR:
        return {
          ...state,
          cartError: action.payload
        };
      default:
        return state;
    }
  };
  