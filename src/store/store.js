import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./productListSlice";
import PopupSlice from "./PopupSlice";

export const store = configureStore({
  reducer: {
    productList: productListSlice,
    popup: PopupSlice,
  },
});
