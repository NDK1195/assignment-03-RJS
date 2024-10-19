import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    checkoutInfo: {},
    isCheckout: false,
  },
  reducers: {
    setCheckoutInfo: (state, action) => {
      state.checkoutInfo = action.payload;
    },
    setIsCheckout: (state, action) => {
      state.isCheckout = action.payload;
    },
  },
});

export const { setCheckoutInfo, setIsCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
