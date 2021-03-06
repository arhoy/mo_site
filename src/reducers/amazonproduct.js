import { GET_AMAZON_PRODUCT, AMAZON_PRODUCTS_ERROR } from '../actions/types';

const initialState = {
  amazonproduct: null,
  amazonproducts: {},
  amazontools: {},
  amazonelectronics: {},
  amazonautomotive: {},
  amazonhomeanddecore: {},
  loading: true,
  error: {},
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case `GET_AMAZON_PRODUCTS_amazonproducts`:
      return {
        ...state,
        amazonproducts: payload,
        loading: false,
      };
    case `GET_AMAZON_PRODUCTS_amazon-tools`:
      return {
        ...state,
        amazontools: payload,
        loading: false,
      };
    case `GET_AMAZON_PRODUCTS_amazon-electronics`:
      return {
        ...state,
        amazonelectronics: payload,
        loading: false,
      };
    case `GET_AMAZON_PRODUCTS_amazon-automotive`:
      return {
        ...state,
        amazonautomotive: payload,
        loading: false,
      };
    case `GET_AMAZON_PRODUCTS_amazon-home-and-decore`:
      return {
        ...state,
        amazonhomeanddecore: payload,
        loading: false,
      };
    case GET_AMAZON_PRODUCT:
      return {
        ...state,
        amazonproduct: payload,
        loading: false,
      };

    case AMAZON_PRODUCTS_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
}
