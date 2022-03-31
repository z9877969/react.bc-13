import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodoApi,
  getTodosApi,
  removeTodoApi,
} from "../../utils/firebaseApi";
import { errorHandler } from "../error/errorHandler";

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (todo, { rejectWithValue, getState, dispatch }) => {
    const {
      idToken,
      user: { localId },
    } = getState().auth;

    try {
      const newTodo = await addTodoApi({ todo, idToken, localId });
      return newTodo;
    } catch (error) {
      setTimeout(() => {
        dispatch(errorHandler({ error, cb: () => addTodo(todo) }));
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);

export const getTodos = createAsyncThunk("todos/get", async (_, thunkApi) => {
  const {
    idToken,
    user: { localId },
  } = thunkApi.getState().auth;
  try {
    const todos = await getTodosApi({ idToken, localId });
    return todos;
  } catch (error) {
    setTimeout(() => {
      thunkApi.dispatch(errorHandler({ error, cb: getTodos }));
    }, 0);
    return thunkApi.rejectWithValue(error.message);
  }
});

export const removeTodo = createAsyncThunk(
  "todos/remove",
  async (id, thunkApi) => {
    const {
      idToken,
      user: { localId },
    } = thunkApi.getState().auth;
    try {
      await removeTodoApi({ id, idToken, localId });
      return id;
    } catch (error) {
      setTimeout(() => {
        thunkApi.dispatch(errorHandler({ error, cb: () => removeTodo(id) }));
      }, 0);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
