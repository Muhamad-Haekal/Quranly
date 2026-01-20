import axios from "axios";

const api = axios.create({
  baseURL: "https://equran.id/api/v2"
});

export default api;
