import { createAction } from "@reduxjs/toolkit";

export const changeSelect = createAction("todos/filter", (event) => {
  return {
    payload: event.target.value,
  };
});

export const addTodoRequest = createAction("todos/addTodoRequest");
export const addTodoSuccess = createAction("todos/addTodoSuccess");
export const addTodoError = createAction("todos/addTodoError");
