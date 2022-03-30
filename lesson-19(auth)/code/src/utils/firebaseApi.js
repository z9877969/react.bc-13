import axios from "axios";

const API_KEY = "AIzaSyDk6YTAzzuBhdLdWQW4_ZFbbNOGpLP_5PI";

const transformGetData = (data) =>
  Object.entries(data).map(([id, todo]) => ({ ...todo, id }));

export const addTodoApi = ({ todo, idToken, localId }) => {
  axios.defaults.baseURL = "https://bc-13-1a21f-default-rtdb.firebaseio.com";
  axios.defaults.params = { auth: idToken };
  return axios
    .post(`/users/${localId}/todos.json`, todo)
    .then(({ data }) => ({ ...todo, id: data.name }))
    .catch((err) => err);
};

export const getTodosApi = ({ idToken, localId }) => {
  axios.defaults.baseURL = "https://bc-13-1a21f-default-rtdb.firebaseio.com";
  axios.defaults.params = { auth: idToken };
  return axios
    .get(`/users/${localId}/todos.json`)
    .then(({ data }) => (data ? transformGetData(data) : []))
    .catch((err) => err);
};

export const removeTodoApi = ({ id, idToken, localId }) => {
  axios.defaults.baseURL = "https://bc-13-1a21f-default-rtdb.firebaseio.com";
  axios.defaults.params = { auth: idToken };
  return axios
    .delete(`/users/${localId}/todos/${id}.json`)
    .then(() => id)
    .catch((err) => err);
};

export const registerUserApi = (userData) => {
  axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";
  axios.defaults.params = { key: API_KEY };
  return axios
    .post("/accounts:signUp", {
      ...userData,
      returnSecureToken: true,
    })
    .then(({ data }) => ({
      idToken: data.idToken,
      localId: data.localId,
      email: data.email,
    }));
};

export const loginUserApi = (userData) => {
  axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";
  axios.defaults.params = { key: API_KEY };
  return axios
    .post("/accounts:signInWithPassword", {
      ...userData,
      returnSecureToken: true,
    })
    .then(({ data }) => ({
      idToken: data.idToken,
      localId: data.localId,
      email: data.email,
    }));
};

// /accounts:lookup
export const getCurUserApi = (idToken) => {
  axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";
  axios.defaults.params = { key: API_KEY };
  return axios
    .post("/accounts:lookup", {
      idToken,
    })
    .then(({ data }) => {
      const { localId, email } = data.users[0];
      return { localId, email };
    });
};

// https://connections-api.herokuapp.com/users/signup - reg
// https://connections-api.herokuapp.com/users/login - login

// https://connections-api.herokuapp.com/contacts - GET -> получаем контакты
// https://connections-api.herokuapp.com/contacts - POST -> записывает контакт
// https://connections-api.herokuapp.com/contacts/{contactId} - DELETE -> удаляет контакт по ID
