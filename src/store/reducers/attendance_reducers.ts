import { createReducer, createAction } from "@reduxjs/toolkit";

interface DataInterface {
  employee_name: string;
  avatar: string;
  time: string;
  attendance_state: string;
  department_name: string;
}

interface AttendanceState {
  numberOfNotify: number;
  data: DataInterface[];
}

// Initial State
const initialState = {
  numberOfNotify: 0,
  data: [
    {
      employee_name: "Someone",
      avatar: "",
      time: "01/01/2024",
      attendance_state: "",
      department_name: "",
    },
  ],
} as AttendanceState;

// Actions
export const attendance = createAction<AttendanceState>("ATTENDANCE");
export const unAttendance = createAction("UN_ATTENDANCE");
export const addNotify = createAction("ADD_NOTIFY");
export const removeNotify = createAction("REMOVE_NOTIFY");

// Reducer
const attendanceReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(attendance, (state, action) => {
      state.numberOfNotify = action.payload.numberOfNotify;
      state.data = action.payload.data;
    })
    .addCase(unAttendance, (state) => {
      state.numberOfNotify = 0;
      state.data = [];
    })
    .addCase(addNotify, (state) => {
      state.numberOfNotify = state.numberOfNotify + 1;
    })
    .addCase(removeNotify, (state) => {
      state.numberOfNotify = 0;
    });
});

export default attendanceReducer;
