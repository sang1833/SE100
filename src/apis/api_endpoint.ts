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
export const GET_DEPARTMENT = "/Department/getAll";

//Create Department
export const CREATE_DEPARTMENT = "/Department/createNew";
export const createDepartmentBody = (name: string, code: string) => ({
  name: name,
  code: code,
});

//Update Department
export const UPDATE_DEPARTMENT = `/Department/updateOne`;
export const updateDepartmentBody = (name: string, code: string) => ({
  name: name,
  code: code,
});

//Delete Department
export const DELETE_DEPARTMENT = `/Department/deleteOne`;

//Get Position by department code
export const GET_POSITION_BY_DEPARTMENT_ID = "/Position/getByDepartmentCode";
export const getPositionByDepartmentIdBody = (departmentCode: string) => ({
  departmentCode: departmentCode,
});

//New Position
export const NEW_POSITION = "/Position/createNew";
export const newPositionBody = (title: string, code: string, coef: number) => ({
  title: title,
  code: code,
  salary_coeffcient: coef,
});

//Update Position
export const UPDATE_POSITION = "/Position/updateOne";

//Delete Position
export const DELETE_POSITION = "/Position/deleteOne";

//import to excel
export const IMPORT_TO_EXCEL = "/user/importToExcel";
export const importToExcelBody = (file: File, departmentId: string) => {
  const formData = new FormData();
  formData.append("import", file);
  formData.append("departmentID", departmentId);
  return formData;
};
