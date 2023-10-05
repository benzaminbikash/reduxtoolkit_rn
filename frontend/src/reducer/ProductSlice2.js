import { createSlice } from "@reduxjs/toolkit";

export const productSlice2 = createSlice({
  name: "Product2",
  initialState: [],
  reducers: {
    ALLPRODUCT: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { ALLPRODUCT } = productSlice2.actions;

export default productSlice2.reducer;
