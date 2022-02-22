import axios from "axios";

const transformGetData = (data) =>
  Object.entries(data).map(([id, todo]) => ({ ...todo, id }));

axios.defaults.baseURL = "https://bc-13-1a21f-default-rtdb.firebaseio.com";

export const addTodoApi = (todo) => {
  return axios
    .post("/todos.json", todo)
    .then(({ data }) => ({ ...todo, id: data.name }))
    .catch((err) => err);
};

export const getTodosApi = () => {
  return axios
    .get("/todos.json")
    .then(({ data }) => transformGetData(data))
    .catch((err) => err);
};

export const removeTodoApi = (id) => {
  return axios
    .delete(`/todos/${id}.json`)
    .then(() => id)
    .catch((err) => err);
};
