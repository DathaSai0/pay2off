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
  location: {
    latitude: null,
    longitude: null,
    locationData: "",
  },
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
    setLocation: (state, action) => {
      const { latitude, longitude, locationData } = action.payload;
      state.location = { latitude, longitude, locationData };
    },
  },
});

export const { handleChangePage, setCurrentLink, setLocation } =
  pageTypeSlice.actions;

export default pageTypeSlice.reducer;
