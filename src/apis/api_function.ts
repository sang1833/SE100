import { mainApi } from "./main_api";
import * as apiEndpoints from "./api_endpoint";
// import axios from "axios";
// import { baseURL } from "./main_api";

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
    apiEndpoints.UPDATE_DEPARTMENT,
    apiEndpoints.updateDepartmentBody(name, code),
    { params: { id: id } }
  );
};

//Delete Department
export const DeleteDepartment = (code: string) => {
  return mainApi.delete(apiEndpoints.DELETE_DEPARTMENT, {
    params: { code: code },
  });
};

//Get Position by department id
export const GetPositionByDepartmentCode = (departmentCode: string) => {
  return mainApi.get(apiEndpoints.GET_POSITION_BY_DEPARTMENT_ID, {
    params: { departmentCode: departmentCode },
  });
  // return axios.get(baseURL, {
  //   params: { departmentCode: departmentCode },
  // });
};

//New Position
export const NewPosition = (
  title: string,
  code: string,
  coef: number,
  dpCode: string
) => {
  return mainApi.post(
    apiEndpoints.NEW_POSITION,
    apiEndpoints.newPositionBody(title, code, coef),
    {
      params: { departmentCode: dpCode },
    }
  );
};

//Update Position
export const UpdatePosition = (
  id: string,
  title: string,
  code: string,
  coef: number
) => {
  return mainApi.put(
    apiEndpoints.UPDATE_POSITION,
    apiEndpoints.newPositionBody(title, code, coef),
    { params: { id: id } }
  );
};

//Delete Position
export const DeletePosition = (id: string) => {
  return mainApi.delete(apiEndpoints.DELETE_POSITION, {
    params: { id: id },
  });
};

//import to excel
export const ImportToExcel = (file: File, departmentId: string) => {
  return mainApi.post(
    apiEndpoints.IMPORT_TO_EXCEL,
    apiEndpoints.importToExcelBody(file, departmentId)
  );
};

//get Employee by department code
export const GetEmployeeByDepartmentCode = (departmentCode: string) => {
  return mainApi.get(apiEndpoints.GET_EMPLOYEE_BY_DEPARTMENT_CODE, {
    params: { departmentCode: departmentCode },
  });
};

//create new employee
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CreateNewEmployee = (departmentCode: string, data: any) => {
  return mainApi.post(apiEndpoints.CREATE_NEW_EMPLOYEE, data, {
    params: { departmentCode: departmentCode },
  });
};
