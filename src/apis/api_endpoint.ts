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

//Get Position by department id
export const GET_POSITION_BY_DEPARTMENT_ID = "/position/getByDepartmentId";
export const getPositionByDepartmentIdBody = (departmentId: string) => ({
  departmentId: departmentId,
});
