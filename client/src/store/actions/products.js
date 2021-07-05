import { _products } from '../../interfaces/IProducts';
import { getProducts } from '../../services/products';
import * as actionTypes from './types';

export const productsDataSuccess = (products = _products, total = 0) => {
  return {
    type: actionTypes.PRODUCTS_DATA_SUCCESS,
    productsData: products,
    total_elements: total,
  };
};

export const productsDataFail = (error) => {
  return {
    type: actionTypes.PRODUCTS_DATA_FAIL,
    error,
  };
};

export const getProductsData = (args) => {
  const { page, size, sorting } = args;
  return (dispatch) => {
    getProducts(page, size, sorting)
      .then(({ data }) => {
        const { products, count } = data;
        dispatch(productsDataSuccess(products, count));
      })
      .catch((e) => dispatch(productsDataFail(e)));
  };
};
