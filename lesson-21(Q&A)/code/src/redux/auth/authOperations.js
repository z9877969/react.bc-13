import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurUserApi,
  loginUserApi,
  refreshTokenApi,
  registerUserApi,
} from "../../utils/firebaseApi";
import { errorHandler } from "../error/errorHandler";
import { logOut, setToken } from "./authSlice";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkApi) => {
    try {
      const data = await registerUserApi(userData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkApi) => {
    try {
      const data = await loginUserApi(userData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCurUser = createAsyncThunk(
  "auth/curUser",
  async (_, thunkApi) => {
    const { idToken } = thunkApi.getState().auth;
    try {
      const data = await getCurUserApi(idToken);
      return data;
    } catch (error) {
      setTimeout(() => {
        thunkApi.dispatch(errorHandler({ error, cb: getCurUser }));
      }, 0);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (cb, { getState, rejectWithValue, dispatch }) => {
    const { refreshToken } = getState().auth;

    try {
      const newTokens = await refreshTokenApi(refreshToken);
      setTimeout(() => {
        dispatch(cb());
      }, 0);
      return newTokens;
    } catch (error) {
      dispatch(logOut());
      return rejectWithValue(error.message);
    }
  }
);
