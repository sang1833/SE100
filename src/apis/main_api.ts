import axios from "axios";

export const baseURL = "https://be-se100-cs.onrender.com/api";
// export const baseURL = "http://localhost:9000";

export const mainApi = axios.create({
  baseURL: baseURL,
});
