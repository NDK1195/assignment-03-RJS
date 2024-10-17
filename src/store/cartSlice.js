import { createSlice } from "@reduxjs/toolkit";

const cart = localStorage.getItem("cartList")
  ? JSON.parse(localStorage.getItem("cartList"))
  : {};

const initialState = {
  cart,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_CART: (state, action) => {
      const { userEmail, product, quantity } = action.payload;
      console.log(action.payload);

      if (!state.cart[userEmail]) {
        state.cart[userEmail] = [];
      }

      // find if item already exists in cart
      const itemIndex = state.cart[userEmail].findIndex(
        (item) => item["_id"]["$oid"] === product["_id"]["$oid"],
      );

      if (itemIndex >= 0) {
        state.cart[userEmail][itemIndex].quantity += quantity;
      } else {
        state.cart[userEmail].push({ ...product, quantity });
      }

      localStorage.setItem("cartList", JSON.stringify(state.cart));
    },
  },
});

export const { ADD_CART, UPDATE_CART, DELETE_CART, RESET_CART } =
  cartSlice.actions;
export default cartSlice.reducer;
