import { createSlice } from "@reduxjs/toolkit";
import { mockClasses } from "../data/mockClasses";

const teacherSlice = createSlice({
  name: "teacher",
  initialState: {
    classes: mockClasses,
  },
  reducers: {},
});

export default teacherSlice.reducer;