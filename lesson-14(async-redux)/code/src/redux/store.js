import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterReducer from "./counter/counterReducer";
import todosReducer from "./todos/todosReducer";

// == custom middleware as loger
// const myLogger = (store) => (next) => (action) => {
//   console.group("action", action.type);

//   console.log("prevState", store.getState());
//   console.log("action", action);
//   next(action);
//   console.log("nextState", store.getState());

//   console.groupEnd();
// };

// == call middlewares
// myLogger(store)(next)(action);
// logger(store)(next)(action);

// == custom thunk
// const thunk = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     action(store.dispatch, store.getState);
//     return;
//   }
//   next(action);
// };

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // .concat(logger, thunk), // [m1, m2, m3, ..., logger, thunk] -> reducer()
  devTools: process.env.NODE_ENV === "development",
});

export default store;

// dispatch(addTodo(todo));

// const addTodo = (todoParam) => {
//   return (dispatch, getState) => {
//     dispatch(addTodoRequest()); // arg -> object
//     fetch()
//       .then((data) => dispatch(addTodoSuccess(data)))
//       .catch((err) => dispatch(addTodoError(err)));
//   };
// };
