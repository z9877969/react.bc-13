import { combineReducers } from "redux";

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "todos/add":
      return [...state, payload];
    case "todos/remove":
      return state.filter((el) => el.id !== payload);
    default:
      return state;
  }
};

const filterReducer = (state = "all", { type, payload }) => {
  switch (type) {
    case "todos/filter":
      return payload;
    default:
      return state;
  }
};

const todosReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default todosReducer;
