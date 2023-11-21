import { mainApi } from "./main_api";
import * as apiEndpoints from "./api_endpoint";

//Login
export const Login = (email: string, password: string) => {
  return mainApi.post(
    apiEndpoints.LOGIN,
    apiEndpoints.getLoginBody(email, password)
  );
};
