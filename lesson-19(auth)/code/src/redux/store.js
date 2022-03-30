import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counter/counterReducer";
import counterReducer from "./counter/counterSlice";
import authReducer from "./auth/authSlice";
import todosReducer from "./todos/todosSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    todos: todosReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
