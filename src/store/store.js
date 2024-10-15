import { configureStore } from "@reduxjs/toolkit";
import searchAndSortSlice from "./searchAndSortSlice";
import popupSlice from "./popupSlice";
import productListSlice from "./productListSlice";
import authenticationSlice from "./authenticationSlice";

export const store = configureStore({
  reducer: {
    searchAndSort: searchAndSortSlice,
    popup: popupSlice,
    productList: productListSlice,
    authentication: authenticationSlice,
  },
});
