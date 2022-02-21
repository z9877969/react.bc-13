import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterReducer";
import todosReducer from "./todos/todosReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
