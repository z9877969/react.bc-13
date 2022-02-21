import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  changeSelect,
  addTodoSuccess,
  addTodoRequest,
  addTodoError,
} from "./todosActions";
import { getTodos, removeTodo } from "./todosOperations";

const itemsReducer = createReducer([], {
  [addTodoSuccess]: (state, { payload }) => [...state, payload],
  [getTodos.fulfilled]: (_, { payload }) => payload,
  [removeTodo.fulfilled]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
});

const filterReducer = createReducer("all", {
  [changeSelect]: (_, { payload }) => payload,
});

const isLoadingReducer = createReducer(false, {
  [addTodoRequest]: () => true,
  [addTodoSuccess]: () => false,
  [addTodoError]: () => false,
  [getTodos.pending]: () => true,
  [getTodos.fulfilled]: () => false,
  [getTodos.rejected]: () => false,
  [removeTodo.pending]: () => true,
  [removeTodo.fulfilled]: () => false,
  [removeTodo.rejected]: () => false,
});

const setError = (_, { payload }) => payload;
const resetError = () => null;

const errorReducer = createReducer(null, {
  [addTodoError]: setError,
  [addTodoRequest]: resetError,
  [getTodos.rejected]: setError,
  [getTodos.pending]: resetError,
  [removeTodo.rejected]: setError,
  [removeTodo.pending]: resetError,
});

const todosReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default todosReducer;



