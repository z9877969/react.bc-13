import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodoApi,
  getTodosApi,
  removeTodoApi,
} from "../../utils/firebaseApi";
import { addTodoRequest, addTodoSuccess, addTodoError } from "./todosActions";

export const addTodo = (todo) => (dispatch) => {
  dispatch(addTodoRequest()); // {type: "addTodoRequest" }

  addTodoApi(todo)
    .then((data) => dispatch(addTodoSuccess(data)))
    .catch((err) => dispatch(addTodoError(err.message)));
};

export const getTodos = createAsyncThunk("todos/get", async (_, thunkApi) => {
  //   console.log("thunkApi :>> ", thunkApi);
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

// (_, thunkApi) => {
//   getTodosApi()
//     .then((data) => data)
//     .catch((err) => thunkApi.rejectWithValue(err.message));
// };
