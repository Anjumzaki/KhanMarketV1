
export const SINGLE_CAT_DATA = "SINGLE_CAT_DATA";
export const SINGLE_CAT_DATA_LOADING = "SINGLE_CAT_DATA_LOADING";
export const SINGLE_CAT_DATA_ERROR = "SINGLE_CAT_DATA_ERROR";

export const singleCatAsync = (name) => {
  return (dispatch, getState) => {
   
    dispatch(singleCatLoading(true))

   
      dispatch(singleCatFunction(name));
      dispatch(singleCatLoading(false))
    
  };
};



export const singleCatFunction = (payload) => { 
  return {
    type: SINGLE_CAT_DATA,
    payload
  };
};

export const singleCatLoading = (payload) => {
  return {
    type: SINGLE_CAT_DATA_LOADING,
    payload
  };
};

export const singleCatError = (payload) => {
  return {
    type: SINGLE_CAT_DATA_ERROR,
    payload
  };
}; 


