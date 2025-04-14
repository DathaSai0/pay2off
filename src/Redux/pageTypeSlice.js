import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "user", // vendor , marketer
  currentLink: "Home",
};
export const pageTypeSlice = createSlice({
  name: "PAGE_TYPE",
  initialState,
  reducers: {
    handleChangePage: (state, action) => {
      state.type = action.payload;
    },
    setCurrentLink: (state, action) => {
      state.currentLink = action.payload;
    },
  },
});

export const { handleChangePage, setCurrentLink } = pageTypeSlice.actions;

export default pageTypeSlice.reducer;
