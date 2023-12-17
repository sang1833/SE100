import { createReducer, createAction } from "@reduxjs/toolkit";
import { DepartmentType } from "../../components/employee/department/Department";
// State

interface IDepartmentState {
  listDepartment: DepartmentType[];
}

const initialState: IDepartmentState = {
  listDepartment: [],
};

// Actions
export const addDepartments = createAction<IDepartmentState>("ADD_DEPARTMENTS");
export const removeDepartments = createAction("REMOVE_DEPARTMENTS");

// Reducer
const departmentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addDepartments, (state, action) => {
      state.listDepartment = action.payload.listDepartment;
    })
    .addCase(removeDepartments, (state) => {
      state.listDepartment = [];
    });
});

export default departmentReducer;
