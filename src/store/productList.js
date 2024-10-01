import { createSlice } from "@reduxjs/toolkit";

const productList = createSlice({
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

export const { setProductList } = productList.actions;
export default productList.reducer;
