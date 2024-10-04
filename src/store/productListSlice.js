import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  category: "all",
  searchText: "",
  sortValue: "default",
};
const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    setProductList(state, action) {
      state.productList = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
    setSortValue(state, action) {
      state.sortValue = action.payload;
    },
  },
});

export const { setProductList, setCategory, setSearchText, setSortValue } =
  productListSlice.actions;
export default productListSlice.reducer;
