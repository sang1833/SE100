import { mainApi } from "./main_api";
import * as apiEndpoints from "./api_endpoint";

//Login
export const Login = (email: string, password: string) => {
  return mainApi.post(
    apiEndpoints.LOGIN,
    apiEndpoints.getLoginBody(email, password)
  );
};

//Get Department
export const GetDepartment = () => {
  return mainApi.get(apiEndpoints.GET_DEPARTMENT);
};

//Create Department
export const CreateDepartment = (name: string) => {
  return mainApi.post(apiEndpoints.CREATE_DEPARTMENT, { name: name });
};
