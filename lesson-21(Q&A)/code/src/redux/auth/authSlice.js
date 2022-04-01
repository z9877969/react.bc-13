import { createSlice } from "@reduxjs/toolkit";
import {
  getCurUser,
  loginUser,
  refreshToken,
  registerUser,
} from "./authOperations";

const getFromLS = (key) => {
  const valueFromLS = localStorage.getItem(key);
  return typeof valueFromLS === "string"
    ? valueFromLS
    : JSON.parse(valueFromLS);
};

const initialState = {
  user: {
    email: "",
    localId: null,
  },
  idToken: getFromLS("token"),
  refreshToken: getFromLS("refreshToken"),
  isLoading: false,
  error: null,
};

const authSlise = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, { payload }) {
      state.idToken = payload;
    },
    logOut(state) {
      state.user = {
        email: "",
        localId: null,
      };
      state.idToken = null;
      state.isLoading = false;
      state.error = null;
      localStorage.setItem("token", JSON.stringify(null));
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      localStorage.setItem("token", payload.idToken);
      localStorage.setItem("refreshToken", payload.refreshToken);
      state.isLoading = false;
      state.user.email = payload.email;
      state.user.localId = payload.localId;
      state.idToken = payload.idToken;
      state.refreshToken = payload.refreshToken;
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
      localStorage.setItem("refreshToken", payload.refreshToken);
      state.isLoading = false;
      state.user.email = payload.email;
      state.user.localId = payload.localId;
      state.idToken = payload.idToken;
      state.refreshToken = payload.refreshToken;
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
    [refreshToken.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [refreshToken.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.idToken = payload.idToken;
      state.refreshToken = payload.refreshToken;
    },
    [getCurUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      // state.idToken = null;
      // state.refreshToken = null;
    },
  },
});

export const { setToken, logOut } = authSlise.actions;
export default authSlise.reducer;
