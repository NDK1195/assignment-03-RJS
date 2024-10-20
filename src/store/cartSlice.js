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

      if (!state.cart[userEmail]) {
        state.cart[userEmail] = [];
      }

      // find if item already exists in cart
      const itemIndex = state.cart[userEmail].findIndex(
        (item) => item["_id"]["$oid"] === product["_id"]["$oid"],
      );

      // if item exists, increase quantity, if not add quantity property
      if (itemIndex >= 0) {
        state.cart[userEmail][itemIndex].quantity += quantity;
      } else {
        state.cart[userEmail].push({ ...product, quantity });
      }
      // update cart to local storage
      localStorage.setItem("cartList", JSON.stringify(state.cart));
    },

    INCREASE_QUANTITY: (state, action) => {
      const { userEmail, productId } = action.payload;

      const itemIndex = state.cart[userEmail].findIndex(
        (item) => item["_id"]["$oid"] === productId,
      );

      if (itemIndex >= 0) {
        state.cart[userEmail][itemIndex].quantity += 1;
      }

      localStorage.setItem("cartList", JSON.stringify(state.cart));
    },
    DECREASE_QUANTITY: (state, action) => {
      const { userEmail, productId } = action.payload;

      const itemIndex = state.cart[userEmail].findIndex(
        (item) => item["_id"]["$oid"] === productId,
      );

      if (state.cart[userEmail][itemIndex].quantity > 1) {
        state.cart[userEmail][itemIndex].quantity -= 1;
      } else {
        state.cart[userEmail][itemIndex].quantity = 1;
      }

      localStorage.setItem("cartList", JSON.stringify(state.cart));
    },
    REMOVE_ITEM: (state, action) => {
      const { userEmail, productId } = action.payload;

      state.cart[userEmail] = state.cart[userEmail].filter(
        (item) => item["_id"]["$oid"] !== productId,
      );

      localStorage.setItem("cartList", JSON.stringify(state.cart));
    },
    RESET_CART: (state) => {
      state.cart = {};

      localStorage.setItem("cartList", JSON.stringify(state.cart));
    },
  },
});

export const {
  ADD_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_ITEM,
  RESET_CART,
} = cartSlice.actions;
export default cartSlice.reducer;
