import axios from "axios";

// https://newsapi.org/v2/everything?q=bitcoin&apiKey=42ee593af8484a5a82756cb35b09ccd6&pageSize=6

axios.defaults.baseURL = "https://newsapi.org/v2";

const setParams = ({ q, page }) =>
  (axios.defaults.params = {
    q,
    page,
    apiKey: "42ee593af8484a5a82756cb35b09ccd6",
    pageSize: 6,
  });

export const getNews = (q = "bitcoin", page = 1) => {
  setParams({ q, page });
  return axios
    .get("/everything")
    .then((res) => {
      if (!res.data.articles.length) {
        throw new Error("Not found");
      }
      return res.data.articles;
    })
    .catch((err) => {
      throw err;
    });
};
