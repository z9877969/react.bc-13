import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

export const addTodo = createAction("todos/add", (dataForm) => {
  return {
    payload: { ...dataForm, isDone: false, id: shortid.generate() },
  };
});
export const removeTodo = createAction("todos/remove");

export const changeSelect = createAction("todos/filter", (event) => {
  return {
    payload: event.target.value,
  };
});

// changeSelect(event)

// export const addTodo = (todo) => ({
//   type: "todos/add",
//   payload: todo,
// });

// export const removeTodo = (id) => ({
//   type: "todos/remove",
//   payload: id,
// });

// export const changeSelect = (value) => ({
//   type: "todos/filter",
//   payload: value,
// });
