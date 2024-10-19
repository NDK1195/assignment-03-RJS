import { configureStore } from "@reduxjs/toolkit";
import searchAndSortSlice from "./searchAndSortSlice";
import popupSlice from "./popupSlice";
import productListSlice from "./productListSlice";
import authenticationSlice from "./authenticationSlice";
import cartSlice from "./cartSlice";
import checkoutSlice from "./checkoutSlice";

export const store = configureStore({
  reducer: {
    searchAndSort: searchAndSortSlice,
    popup: popupSlice,
    productList: productListSlice,
    authentication: authenticationSlice,
    cart: cartSlice,
    checkout: checkoutSlice,
  },
});
