import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import counterReducer from "./counter/counterReducer";
import todosReducer from "./todos/todosReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
