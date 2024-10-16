import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalCartPrice: 0,
  },
  reducers: {
    ADD_CART: (state, action) => {
      state.totalCartPrice += action.payload.totalPrice;

      // find if item already exists in cart
      const itemIndex = state.cart.findIndex(
        (item) => item["_id"]["$oid"] === action.payload["_id"]["$oid"],
      );

      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += action.payload.quantity;
        state.cart[itemIndex].totalPrice =
          state.cart[itemIndex].quantity * Number(state.cart[itemIndex].price);
      } else {
        state.cart.push(action.payload);
      }
    },

    DELETE_CART: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { ADD_CART, UPDATE_CART, DELETE_CART } = cartSlice.actions;
export default cartSlice.reducer;
