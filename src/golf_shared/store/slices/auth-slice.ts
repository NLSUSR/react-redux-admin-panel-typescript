import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signup: {
    resolved: undefined,
    rejected: undefined,
  },
  signin: {
    resolved: undefined,
    rejected: undefined,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.signup.resolved = action.payload.resolved;
      state.signup.rejected = action.payload.rejected;
    },
    signin: (state, action) => {
      state.signin.resolved = action.payload.resolved;
      state.signin.rejected = action.payload.rejected;
    },
  },
});
