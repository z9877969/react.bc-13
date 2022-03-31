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
      refreshToken: data.refreshToken,
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
      refreshToken: data.refreshToken,
    }));
};

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

export const refreshTokenApi = (refreshToken) => {
  axios.defaults.baseURL = "https://securetoken.googleapis.com/v1";
  axios.defaults.params = { key: API_KEY };
  return axios
    .post("/token", {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    })
    .then(({ data }) => ({
      idToken: data.id_token,
      refreshToken: data.refresh_token,
    }));
};

// const fetch = (token) => {
//   axios.defaults.headers.common.Authorization = "Bearer " + token;
//   return axios.get("/some-path").then(({ data }) => data);
// };

// const oper = () => async (disp) => {
//   disp();
//   try {
//     const arr = await fetch();
//     return arr; // oper.fullfiled
//   } catch (error) {}
// };
