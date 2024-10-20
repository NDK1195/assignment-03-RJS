import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "all",
  searchText: "",
  sortValue: "default",
};
const searchAndSortSlice = createSlice({
  name: "searchAndSort",
  initialState,
  reducers: {
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

export const { setCategory, setSearchText, setSortValue } =
  searchAndSortSlice.actions;
export default searchAndSortSlice.reducer;
