import { createSlice } from "@reduxjs/toolkit";
import { getCurUser, loginUser, registerUser } from "./authOperations";

const authSlise = createSlice({
  name: "auth",
  initialState: {
    user: {
      email: "",
      localId: null,
    },
    idToken: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setToken(state, { payload }) {
      state.idToken = payload;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      localStorage.setItem("token", payload.idToken);
      state.isLoading = false;
      state.user.email = payload.email;
      state.user.localId = payload.localId;
      state.idToken = payload.idToken;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      localStorage.setItem("token", payload.idToken);
      state.isLoading = false;
      state.user.email = payload.email;
      state.user.localId = payload.localId;
      state.idToken = payload.idToken;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getCurUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getCurUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user.email = payload.email;
      state.user.localId = payload.localId;
    },
    [getCurUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.idToken = null;
    },
  },
});

export const { setToken } = authSlise.actions;
export default authSlise.reducer;
