import { configureStore } from "@reduxjs/toolkit";
import DarkMode from "@/redux/actions/DarkModeSlice";

const store = configureStore({
  reducer: {
    darkMode: DarkMode,
  },
});

export default store;
