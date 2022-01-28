import { actiontype } from "./actiontype";
export const setProducts = (products) => {
    return {
      type: actiontype.SET_PRODUCTS,
      payload: products,
    };
  };

  export const payment = (amount) => {
    return {
      type: actiontype.AMOUNT,
      payload: amount,
    };
  };
