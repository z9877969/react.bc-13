import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addItemApi,
  getItemsApi,
  removeItemApi,
} from "../../utils/servicesApi";
import { addItemError, addItemRequest, addItemSuccess } from "./itemsActions";

export const addItem = (item) => (dispatch) => {
  dispatch(addItemRequest());

  addItemApi(item)
    .then((item) => dispatch(addItemSuccess(item)))
    .catch((err) => dispatch(addItemError(err.message)));
};

export const getItems = createAsyncThunk(
  "notes/getItems",
  async (_, thunkApi) => {
    try {
      const items = await getItemsApi();
      return items;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const removeItem = createAsyncThunk(
  "notes/removeItem",
  async (id, { rejectWithValue }) => {
    try {
      await removeItemApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
