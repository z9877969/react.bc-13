import { createAsyncThunk } from "@reduxjs/toolkit";
import { refreshToken } from "../auth/authOperations";

export const errorHandler = createAsyncThunk(
  "errorHandler",
  ({ error, cb }, thunkApi) => {
    if (error.request.status === 401 || error.request.status === 400) {
      thunkApi.dispatch(refreshToken(cb));
    }

    return;
  }
);
