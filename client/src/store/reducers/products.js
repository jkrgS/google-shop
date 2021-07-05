import { _products } from '../../interfaces/IProducts';
import * as actionTypes from '../actions/types';

const initialState = {
  products: _products,
  loading: false,
};

const productsDataSuccess = (state, action) => {
  return (
    state,
    {
      products: action.productsData,
      total_elements: action.total_elements,
      loading: false,
      columns: action.columns,
    }
  );
};

const productsDataFail = (state, action) => {
  return (
    state,
    {
      loading: false,
    }
  );
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCTS_DATA_SUCCESS:
      return productsDataSuccess(state, action);
    case actionTypes.PRODUCTS_DATA_FAIL:
      return productsDataFail(state, action);
    default:
      return state;
  }
};

export default reducer;
