import { createSlice } from "@reduxjs/toolkit";

const productListSlice = createSlice({
  name: "productList",
  initialState: {
    productList: [],
  },
  reducers: {
    setProductList(state, action) {
      state.productList = action.payload;
    },
  },
});

export const { setProductList } = productListSlice.actions;
export default productListSlice.reducer;
