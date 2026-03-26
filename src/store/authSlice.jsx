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

    loginTeacher: (state) => {
      state.user = {
        name: "Professor Luan",
        role: "teacher",
      };
    },

    loginManager: (state) => {
      state.user = {
        name: "Gestor Luan",
        role: "manager",
      };
    },

    logout: (state) => {
      state.user = null;
    },
  },
});

export const { loginStudent, loginTeacher, loginManager, logout } = authSlice.actions;
export default authSlice.reducer;