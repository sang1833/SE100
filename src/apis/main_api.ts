import axios from "axios";

export const baseURL = "https://se100.onrender.com/api";
// export const baseURL = "http://localhost:9000";

export const mainApi = axios.create({
  baseURL: baseURL,
});
