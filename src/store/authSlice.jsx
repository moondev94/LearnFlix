import { createSlice } from "@reduxjs/toolkit";

let storedUser = null;

try {
  const rawUser = localStorage.getItem("currentUser");
  storedUser = rawUser ? JSON.parse(rawUser) : null;
} catch (error) {
  storedUser = null;
  localStorage.removeItem("currentUser");
}

const initialState = {
  user: storedUser,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.error = null;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },

    setAuthError: (state, action) => {
      state.error = action.payload;
    },

    clearAuthError: (state) => {
      state.error = null;
    },

    logout: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem("currentUser");
    },
  },
});

export const { setUser, setAuthError, clearAuthError, logout } =
  authSlice.actions;

export default authSlice.reducer;