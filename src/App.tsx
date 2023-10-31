import React, { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
import Error from "./pages/Error";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import Department from "./components/employee/department/Department";
import AdminProfile from "./pages/AdminProfile";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* <Route index element={<Login />} /> */}
      <Route index element={<Home />} />
      <Route path="/" element={<Home />}>
        <Route path="adminprofile" element={<AdminProfile />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="employee" element={<Employee />}>
          <Route path="department" element={<Department />} />
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />

      <Route path="*" element={<Error />} />
    </Route>
  )
);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
