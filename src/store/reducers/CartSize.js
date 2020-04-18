import {
    GET_CART_SIZE_DATA,
    GET_CART_SIZE_DATA_LOADING,
    GET_CART_SIZE_DATA_ERROR,
  } from "../actions";
  
  const cartSizeData = {
    cartSizeData: 0,
    cartSizeLoading: false,
    cartSizeError: "",
  };
  
  export default (state = cartSizeData, action) => {
    switch (action.type) { 
      case GET_CART_SIZE_DATA:
        return {
          ...state,
          cartSizeData: action.payload
        };
      case GET_CART_SIZE_DATA_LOADING:
        return {
          ...state,
          cartSizeLoading: action.payload
        };
      case GET_CART_SIZE_DATA_ERROR:
        return {
          ...state,
          cartSizeError: action.payload
        };
      default:
        return state;
    }
  };
  