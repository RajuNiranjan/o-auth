// types.ts

import { combineReducers } from "@reduxjs/toolkit";
import darkModeReducer from "@/redux/actions/DarkModeSlice";

// Define RootState type by combining all individual state slices
export type RootState = ReturnType<typeof rootReducer>;

// Combine reducers into a single rootReducer
export const rootReducer = combineReducers({
  darkMode: darkModeReducer,
});
