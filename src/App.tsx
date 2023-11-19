import { lazy } from "react";
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
import ChangePassword from "./pages/ChangePassword";
import EmployeeList from "./components/employee/employeeList/EmployeeList";
import EmployeeProfile from "./components/employee/employeeProfile/EmployeeProfile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* <Route index element={<Login />} /> */}
      {/* <Route index element={<Home />} /> */}
      <Route path="/" element={<Home />}>
        <Route index element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="changepassword" element={<ChangePassword />} />
        <Route path="adminprofile" element={<AdminProfile />} />
        <Route path="employee" element={<Employee />}>
          <Route path=":id" element={<EmployeeProfile />}></Route>
          <Route path="department" element={<Department />} />
          <Route path="list" element={<EmployeeList />} />
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
