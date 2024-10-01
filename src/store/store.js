import { configureStore } from "@reduxjs/toolkit";
import productList from "./productList";

export const store = configureStore({
  reducer: {
    productList: productList.reducer,
  },
});
