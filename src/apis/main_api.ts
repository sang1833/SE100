import axios from "axios";

export const baseURL = "https://be-se100.onrender.com";

export const mainApi = axios.create({
  baseURL: baseURL,
});
