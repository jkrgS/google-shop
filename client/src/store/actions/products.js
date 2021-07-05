import { _products } from '../../interfaces/IProducts';
import * as actionTypes from './types';

export const productsDataSuccess = (
  products = _products,
  total = 0,
  columns
) => {
  return {
    type: actionTypes.PRODUCTS_DATA_SUCCESS,
    productsData: products,
    total_elements: total,
    columns,
  };
};

export const productsDataFail = (error) => {
  return {
    type: actionTypes.PRODUCTS_DATA_FAIL,
    error,
  };
};

export const getProductsData = (args) => {};
