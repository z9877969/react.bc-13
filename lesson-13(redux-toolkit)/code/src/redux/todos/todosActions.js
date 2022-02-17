export const addTodo = (todo) => ({
  type: "todos/add",
  payload: todo,
});

export const removeTodo = (id) => ({
  type: "todos/remove",
  payload: id,
});

export const changeSelect = (value) => ({
  type: "todos/filter",
  payload: value,
});
