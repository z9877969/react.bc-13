import { createSlice } from "@reduxjs/toolkit";
import { addTodo, getTodos, removeTodo } from "./todosOperations";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    filter: "all",
    isLoading: false,
    error: null,
  },
  reducers: {
    changeSelect(state, { payload }) {
      return {
        ...state,
        filter: payload,
      };
    },
    // lang
  },
  extraReducers: {
    [addTodo.pending]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [addTodo.fulfilled]: (state, { payload }) => ({
      ...state,
      items: [...state.items, payload],
      isLoading: false,
    }),
    [addTodo.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
    [getTodos.pending]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [getTodos.fulfilled]: (state, { payload }) => ({
      ...state,
      items: payload,
      isLoading: false,
    }),
    [getTodos.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
    [removeTodo.pending]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [removeTodo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter((el) => el.id !== payload);
    },
    [removeTodo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { changeSelect } = todosSlice.actions;
export default todosSlice.reducer;
