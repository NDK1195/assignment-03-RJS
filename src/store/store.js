import { configureStore } from "@reduxjs/toolkit";
import searchAndSortSlice from "./searchAndSortSlice";
import popupSlice from "./popupSlice";
import productListSlice from "./productListSlice";

export const store = configureStore({
  reducer: {
    searchAndSort: searchAndSortSlice,
    popup: popupSlice,
    productList: productListSlice,
  },
});
