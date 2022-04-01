import { createSelector } from "@reduxjs/toolkit";

export const getTodosFilter = (state) => state.todos.filter;
export const getIsLoadingTodos = (state) => state.todos.isLoading;
export const getTodosItems = (state) => state.todos.items;
export const getEditingTodo = (state) => state.todos.editingTodo;

export const getFilteredTodos = (state) => {
  const items = getTodosItems(state);
  const filter = getTodosFilter(state);

  if (filter === "all") return items;
  return items.filter((el) => el.priority === filter);
};

export const getFilteredTodosMemo = createSelector(
  [getTodosFilter, getTodosItems],
  (filter, items) => {
    if (filter === "all") return items;
    return items.filter((el) => el.priority === filter);
  }
);
