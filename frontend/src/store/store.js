import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../reducer/productSlice";
import productSlice2 from "../reducer/ProductSlice2";
import cartSlice from "../reducer/cartSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    product2: productSlice2,
    cart: cartSlice,
  },
});
