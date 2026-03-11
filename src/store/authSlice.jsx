import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStudent: (state) => {
      state.user = {
        name: "Luan Martins",
        role: "student",
      };
    },

    logout: (state) => {
      state.user = null;
    },
  },
});

export const { loginStudent, logout } = authSlice.actions;
export default authSlice.reducer;