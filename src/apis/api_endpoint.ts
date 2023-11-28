//Login
export const LOGIN = "/user/login";
export const getLoginBody = (email: string, password: string) => ({
  email: email,
  password: password,
});

//Register
export const REGISTER = "/user/register";

//Import user by excel
export const IMPORT_USER = "/user/importToExcel";

//Get Department
export const GET_DEPARTMENT = "/department/all";

//Create Department
export const CREATE_DEPARTMENT = "/department/create";

//Get Position by department id
export const GET_POSITION_BY_DEPARTMENT_ID = "/position/getByDepartmentId";
export const getPositionByDepartmentIdBody = (departmentId: string) => ({
  departmentId: departmentId,
});

//New Position
export const NEW_POSITION = "/position/new";
export const newPositionBody = (
  title: string,
  departmentId: string,
  coef: number
) => ({
  title: title,
  departmentId: departmentId,
  coef: coef,
});

//import to excel
export const IMPORT_TO_EXCEL = "/user/importToExcel";
export const importToExcelBody = (file: File, departmentId: string) => {
  const formData = new FormData();
  formData.append("import", file);
  formData.append("departmentID", departmentId);
  return formData;
};
