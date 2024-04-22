// darkModeSlice.ts

import { createSlice } from "@reduxjs/toolkit";

interface DarkModeState {
  isDarkModeOn: boolean;
}

const initialState: DarkModeState = {
  isDarkModeOn: false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDarkModeOn = !state.isDarkModeOn;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
