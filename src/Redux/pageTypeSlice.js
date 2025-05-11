import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // type: "user", // vendor , marketer
  type:
    typeof window !== "undefined"
      ? localStorage.getItem("pageType") || "user"
      : "user",
  // currentLink: "Home",
  currentLink:
    typeof window !== "undefined"
      ? localStorage.getItem("currentLink") || "Home"
      : "Home",
};
export const pageTypeSlice = createSlice({
  name: "PAGE_TYPE",
  initialState,
  reducers: {
    handleChangePage: (state, action) => {
      state.type = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("pageType", action.payload); // ✅ Save to localStorage
      }
    },
    setCurrentLink: (state, action) => {
      // state.currentLink = action.payload;
      state.currentLink = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("currentLink", action.payload);
      }
    },
  },
});

export const { handleChangePage, setCurrentLink } = pageTypeSlice.actions;

export default pageTypeSlice.reducer;
