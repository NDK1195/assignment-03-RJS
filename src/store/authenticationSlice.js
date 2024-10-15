import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    isLogin: false,
  },
  reducers: {
    ON_LOGIN: (state) => {
      state.isLogin = true;
    },
    ON_LOGOUT: (state) => {
      state.isLogin = false;
    },
  },
});

export const { ON_LOGIN, ON_LOGOUT } = authenticationSlice.actions;
export default authenticationSlice.reducer;
