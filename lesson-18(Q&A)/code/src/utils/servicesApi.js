import axios from "axios";

axios.defaults.baseURL = "http://localhost:3004";

export const addItemApi = (item) => {
  return axios.post("/items", item).then(({ data }) => data);
};

export const getItemsApi = async () => {
  try {
    const { data } = await axios.get("/items");
    return data;
  } catch (error) {
    throw error;
  }
};

export const removeItemApi = async (id) => {
  try {
    await axios.delete("/items/" + id);
    return id;
  } catch (error) {
    throw error;
  }
};
