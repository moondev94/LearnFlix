import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import calendarReducer from "./calendarSlice";
import progressReducer from "./progressSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    calendar: calendarReducer,
    progress: progressReducer,
  },
});

