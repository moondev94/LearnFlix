import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import calendarReducer from "./calendarSlice";
import progressReducer from "./progressSlice";
import teacherReducer from "./teacherSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    calendar: calendarReducer,
    progress: progressReducer,
    teacher: teacherReducer,
    
  },
});

