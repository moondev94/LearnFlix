import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import calendarReducer from "./calendarSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    calendar: calendarReducer,
  },
});

