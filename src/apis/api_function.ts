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
export const CreateDepartment = (name: string, code: string) => {
  return mainApi.post(
    apiEndpoints.CREATE_DEPARTMENT,
    apiEndpoints.createDepartmentBody(name, code)
  );
};

//Update Department
export const UpdateDepartment = (id: string, name: string, code: string) => {
  return mainApi.put(
    apiEndpoints.UPDATE_DEPARTMENT(id),
    apiEndpoints.updateDepartmentBody(name, code)
  );
};

//Delete Department
export const DeleteDepartment = (code: string) => {
  return mainApi.delete(apiEndpoints.DELETE_DEPARTMENT(code));
};

//Get Position by department id
export const GetPositionByDepartmentId = (departmentId: string) => {
  return mainApi.post(apiEndpoints.GET_POSITION_BY_DEPARTMENT_ID, {
    departmentId: departmentId,
  });
};

//New Position
export const NewPosition = (
  name: string,
  departmentId: string,
  coef: number
) => {
  return mainApi.post(
    apiEndpoints.NEW_POSITION,
    apiEndpoints.newPositionBody(name, departmentId, coef)
  );
};

//import to excel
export const ImportToExcel = (file: File, departmentId: string) => {
  return mainApi.post(
    apiEndpoints.IMPORT_TO_EXCEL,
    apiEndpoints.importToExcelBody(file, departmentId)
  );
};
