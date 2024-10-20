import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./authenticationSlice";
import cartSlice from "./cartSlice";
import checkoutSlice from "./checkoutSlice";
import popupSlice from "./popupSlice";
import searchAndSortSlice from "./searchAndSortSlice";
import productListSlice from "./productListSlice";

export const store = configureStore({
  reducer: {
    productList: productListSlice,
    searchAndSort: searchAndSortSlice,
    popup: popupSlice,
    authentication: authenticationSlice,
    cart: cartSlice,
    checkout: checkoutSlice,
  },
});
