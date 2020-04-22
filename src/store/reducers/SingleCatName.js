import {
    SINGLE_CAT_DATA,
    SINGLE_CAT_DATA_LOADING,
    SINGLE_CAT_DATA_ERROR,
  } from "../actions";
  
  const singleCatData = {
    singleCatData: "",
    singleCatLoading: false,
    singleCatError: "",
  };
  
  export default (state = singleCatData, action) => {
    switch (action.type) { 
      case SINGLE_CAT_DATA:
        return {
          ...state,
          singleCatData: action.payload
        }; 
      case SINGLE_CAT_DATA_LOADING:
        return {
          ...state,
          singleCatLoading: action.payload
        };
      case SINGLE_CAT_DATA_ERROR:
        return {
          ...state,
          singleCatError: action.payload
        };
      default:
        return state;
    }
  };
  