//Login
export const LOGIN = "/user/login";
export const getLoginBody = (email: string, password: string) => ({
  email: email,
  password: password,
});

//Register
export const REGISTER = "/user/register";

//Get Department
export const GET_DEPARTMENT = "/department/all";

//Create Department
export const CREATE_DEPARTMENT = "/department/create";
