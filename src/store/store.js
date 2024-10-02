import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./productListSlice";

export const store = configureStore({
  reducer: {
    productList: productListSlice,
  },
});
