import { createSlice } from "@reduxjs/toolkit";

// 🧠 Load from localStorage
const storedAuth = JSON.parse(localStorage.getItem("auth"));

const initialState = {
  isAuthenticated: storedAuth?.isAuthenticated || false,
  user: storedAuth?.user || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload || null;

      // 💾 Save to localStorage
      localStorage.setItem(
        "auth",
        JSON.stringify({
          isAuthenticated: true,
          user: state.user,
        })
      );
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;

      // ❌ Remove from localStorage
      localStorage.removeItem("auth");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;