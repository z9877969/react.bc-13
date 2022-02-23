import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter/counterSlice";
import todos from "./todos/todosSlice";
import lang from "./lang/langReducer";

const store = configureStore({
  reducer: {
    counter,
    todos,
    lang,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
