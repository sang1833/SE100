import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Root from "./pages/Root";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Employee from "./pages/Employee";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* <Route index element={<Login />} /> */}
      <Route index element={<Home />} />
      <Route path="/" element={<Home />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="employee" element={<Employee />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />

      <Route path="*" element={<Error />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
