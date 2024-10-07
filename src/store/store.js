import { configureStore } from "@reduxjs/toolkit";
import SearchAndSortSlice from "./SearchAndSortSlice";
import PopupSlice from "./popupSlice";

export const store = configureStore({
  reducer: {
    SearchAndSort: SearchAndSortSlice,
    popup: PopupSlice,
  },
});
