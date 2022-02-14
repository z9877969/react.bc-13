import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";

export const getGallery = (q = "", page = 1) => {
  axios.defaults.params = {
    key: "13965574-3ae6669f35304ffc6cddc1b72",
    image_type: "photo",
    q,
    page,
    per_page: 8,
  };
  return axios
    .get("/")
    .then(({ data }) => data.hits)
    .catch((err) => {
      throw err;
    });
};

export const getSingleImage = (id) => {
  axios.defaults.params = {
    key: "13965574-3ae6669f35304ffc6cddc1b72",
    image_type: "photo",
    id,
  };
  return axios
    .get("/")
    .then(({ data }) => data.hits)
    .catch((err) => {
      throw err;
    });
};
