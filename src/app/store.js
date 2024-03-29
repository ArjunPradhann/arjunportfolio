// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "../features/tabSlice";

export const store = configureStore({
  reducer: {
    tab: tabReducer,
  },
});
