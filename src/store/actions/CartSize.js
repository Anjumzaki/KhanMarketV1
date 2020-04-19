
export const GET_CART_SIZE_DATA = "GET_CART_SIZE_DATA";
export const GET_CART_SIZE_DATA_LOADING = "GET_CART_SIZE_DATA_LOADING";
export const GET_CART_SIZE_DATA_ERROR = "GET_CART_SIZE_DATA_ERROR";

export const cartSizeAsync = (cartSize) => {
  return (dispatch, getState) => {
   
    dispatch(cartSizeLoading(true))

   
      dispatch(cartSizeFunction(cartSize));
      dispatch(cartSizeLoading(false))
    
  };
};



export const cartSizeFunction = (payload) => {
  return {
    type: GET_CART_SIZE_DATA,
    payload
  };
};

export const cartSizeLoading = (payload) => {
  return {
    type: GET_CART_SIZE_DATA_LOADING,
    payload
  };
};

export const cartSizeError = (payload) => {
  return {
    type: GET_CART_SIZE_DATA_ERROR,
    payload
  };
}; 


