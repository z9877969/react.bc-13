import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter/counterSlice";
import todos from './todos/todosSlice';

const store = configureStore({
  reducer: {
    counter,
    todos,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
