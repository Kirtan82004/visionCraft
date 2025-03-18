// src/slices/adminAuthSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
  admin: null,
  loading: false,
  error: null,
};

const adminAuthSlice = createSlice({
  name: 'adminAuth',
  initialState,
  reducers: {
    adminLoginStart: (state) => {
      state.loading = true;
    },
    adminLoginSuccess: (state, action) => {
      state.loading = false;
      state.status = true;
      state.admin = action.payload;
    },
    adminLoginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    adminLogout: (state) => {
      state.status = false;
      state.admin = null;
    },
    signupStart: (state) => {
      state.loading = true;
  },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.admin = action.payload;
  },
  signupFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
  },
  },
});

export const { 
  adminLoginStart, 
  adminLoginSuccess, 
  adminLoginFailure, 
  adminLogout,
  signupStart,
  signupSuccess,
  signupFailure
} = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
