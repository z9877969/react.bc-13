import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodoApi,
  getTodosApi,
  removeTodoApi,
} from "../../utils/firebaseApi";

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (todo, { rejectWithValue }) => {
    try {
      const newTodo = await addTodoApi(todo);
      return newTodo;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTodos = createAsyncThunk("todos/get", async (_, thunkApi) => {
  try {
    const todos = await getTodosApi();
    return todos;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const removeTodo = createAsyncThunk(
  "todos/remove",
  async (id, thunkApi) => {
    try {
      await removeTodoApi(id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
