import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./productListSlice";
import PopupSlice from "./popupSlice";

export const store = configureStore({
  reducer: {
    productList: productListSlice,
    popup: PopupSlice,
  },
});
