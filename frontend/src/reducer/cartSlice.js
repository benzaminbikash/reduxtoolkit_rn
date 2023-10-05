import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "CART",
  initialState: [],
  reducers: {
    ADDCART: (state, action) => {
      state.push(action.payload);
    },
    INCREASECART: (state, action) => {
      const findCart = state.find((item) => item.id === action.payload.id);
      findCart.qty++;
    },
    DECREASECART: (state, action) => {
      const findCart = state.find((item) => item.id === action.payload.id);
      if (findCart.qty > 1) {
        findCart.qty--;
      }
    },
    REMOVECART: (state, action) => {
      let filterItem = state.filter((item) => item.id !== action.payload.id);
      state = filterItem;
    },
  },
});

export const { ADDCART, INCREASECART, DECREASECART, REMOVECART } =
  cartSlice.actions;

export default cartSlice.reducer;
