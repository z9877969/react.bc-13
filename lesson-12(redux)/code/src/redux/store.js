import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import counterReducer from "./counter/counterReducer";
import todosReducer from "./todos/todosReducer";

const reducerA = (state = [], action) => state;
const reducerB = (state = false, action) => state;

const rootReducer = combineReducers({
  a: reducerA,
  b: reducerB,
  counter: counterReducer,
  todos: todosReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

console.log("store :>> ", store);

export default store;
