import { actiontype } from "./actiontype";

const intialState = {
  products: [],
  amount: 4000
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case actiontype.SET_PRODUCTS:
      return { ...state, products: payload };
    case actiontype.AMOUNT:
      return { ...state, amount: payload };
    default:
      return state;
  }
};

// export const productsReducer = (state = intialState, { type, payload }) => {
//   switch (type) {
//     case actiontype.SET_PRODUCTS:
//       return { ...state, amount: payload };
//     default:
//       return state;
//   }
// };