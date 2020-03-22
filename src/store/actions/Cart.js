
export const GET_CART_DATA = "GET_CART_DATA";
export const GET_CART_DATA_LOADING = "GET_CART_DATA_LOADING";
export const GET_CART_DATA_ERROR = "GET_CART_DATA_ERROR";

export const cartAsync = (cart) => {
  return (dispatch, getState) => {
   
    dispatch(cartLoading(true))

   
      dispatch(cartFunction(cart));
      dispatch(cartLoading(false))
    
  };
};



export const cartFunction = (payload) => {
  return {
    type: GET_CART_DATA,
    payload
  };
};

export const cartLoading = (payload) => {
  return {
    type: GET_CART_DATA_LOADING,
    payload
  };
};

export const cartError = (payload) => {
  return {
    type: GET_CART_DATA_ERROR,
    payload
  };
}; 


