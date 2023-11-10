import { createReducer, createAction } from "@reduxjs/toolkit";

// State
interface IAuthState {
  currentUser: string;
  name: string;
  avatar: string;
}
const initialState = {
  currentUser: "",
  name: "",
  avatar: "",
} as IAuthState;

// Actions
export const login = createAction<IAuthState>("LOGIN");
export const logout = createAction("LOGOUT");
export const gglogin = createAction<IAuthState>("GGLOGIN");

// Reducer
const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => {
      state.currentUser = action.payload.currentUser;
      state.name = action.payload.name;
      state.avatar = action.payload.avatar;
    })
    .addCase(logout, (state) => {
      state.currentUser = "";
      state.name = "";
      state.avatar = "";
    })
    .addCase(gglogin, (state, action) => {
      state.currentUser = action.payload.currentUser;
      state.name = action.payload.name;
      state.avatar = action.payload.avatar;
    });
});

export default authReducer;
