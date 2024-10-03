import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: false,
  data: {
    image: "",
    name: "",
    price: "",
    description: "",
  },
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    SHOW_POPUP: (state, action) => {
      state.isShow = true;
      state.data = action.payload;
    },
    HIDE_POPUP: () => initialState,
  },
});

export const { SHOW_POPUP, HIDE_POPUP } = popupSlice.actions;
export default popupSlice.reducer;
