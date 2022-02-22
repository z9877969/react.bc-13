import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counter/counterReducer";
import counter from "./counter/counterSlice";
// import todosReducer from "./todos/todosReducer";
import todos from './todos/todosSlice';

const store = configureStore({
  reducer: {
    counter,
    todos,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
