import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addTodo, removeTodo, changeSelect } from "./todosActions";

// const getTodosFromLS = () => JSON.parse(localStorage.getItem("todos")) || [];
// const setTodoToLS = (todos) =>
//   localStorage.setItem("todos", JSON.stringify(todos));

const initialItems = []; // getTodosFromLS();

const itemsReducer = createReducer(initialItems, {
  [addTodo]: (state, { payload }) => {
    const todos = [...state, payload];
    // setTodoToLS(todos);
    return todos;
  },
  [removeTodo]: (state, { payload }) => {
    const todos = state.filter((el) => el.id !== payload);
    // setTodoToLS(todos);
    return todos;
  },
});

const filterReducer = createReducer("all", {
  [changeSelect]: (_, { payload }) => payload,
});

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case "todos/add":
//       return [...state, payload];
//     case "todos/remove":
//       return state.filter((el) => el.id !== payload);
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = "all", { type, payload }) => {
//   switch (type) {
//     case "todos/filter":
//       return payload;
//     default:
//       return state;
//   }
// };

const todosReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default todosReducer;
