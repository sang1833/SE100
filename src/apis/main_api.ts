import axios from "axios";

export const baseURL = "https://be-se100.onrender.com";
// export const baseURL = "http://localhost:9000";

export const mainApi = axios.create({
  baseURL: baseURL,
});
