import axios from "axios";

export const baseURL = "https://se100.azurewebsites.net/api";
// export const baseURL = "http://localhost:5000/api";
export const hostURL = "http://localhost:5000";

export const mainApi = axios.create({
  baseURL: baseURL,
});
