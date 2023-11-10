import { useEffect, useState, startTransition } from "react";
import { Outlet, Link, Navigate, useNavigate } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import Navbar from "./Navbar";
import { FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { MdArrowCircleRight, MdArrowCircleLeft } from "react-icons/md";

const Home = () => {
  const [clpSidebar, setClpSidebar] = useState(true);
  const navigate = useNavigate();
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const [arrow, setArrow] = useState(false);

  function handleSidebar() {
    setArrow(!arrow);
    startTransition(() => {
      setClpSidebar(!clpSidebar);
    });
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        handleSidebar();
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return currentUser ? (
    <section className="w-full flex bg-[#fafafa]">
      <div className="h-[100vh] flex fixed z-[1]">
        <Sidebar
          collapsed={clpSidebar}
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              backgroundColor: "rgb(72, 76, 127)",
            },
          }}
        >
          <aside className="flex items-center text-white font-semibold">
            <div
              onClick={() => navigate("/")}
              className="cursor-pointer mx-[14px] my-[30px]"
            >
              <div className="inline-block rounded-full bg-white">
                <img
                  src="/logo_nobg.png"
                  alt="logo"
                  className="h-10 w-18 rounded-full"
                />
              </div>
            </div>
            {clpSidebar ? "" : <p className="text-lg">E management</p>}
          </aside>
          <Menu>
            <MenuItem
              icon={<FaHome />}
              component={<Link to="/" />}
              className="text-white hover:text-tim-color"
            >
              <p>Dashboard</p>
            </MenuItem>
            <SubMenu
              label="Employees"
              className="text-white hover:text-black hover:bg-tim-color"
              icon={<FaPeopleGroup />}
            >
              <MenuItem
                component={<Link to="/employee/department" />}
                className="bg-tim-color text-white hover:text-tim-color"
              >
                <p>Department</p>
              </MenuItem>
              <MenuItem className="bg-tim-color text-white hover:text-tim-color">
                <p>2</p>
              </MenuItem>
            </SubMenu>
            <div
              className="bg-tim-color absolute bottom-0 left-0 w-full text-white text-center py-2 cursor-pointer"
              onClick={handleSidebar}
            >
              {arrow ? (
                <MdArrowCircleLeft className="w-8 h-8 inline-block" />
              ) : (
                <MdArrowCircleRight className="w-8 h-8 inline-block" />
              )}
            </div>
          </Menu>
        </Sidebar>
      </div>

      <main
        className={`pt-[1rem] md:px-6 w-full overflow-y-scroll ${
          clpSidebar ? "ml-[4rem]" : "ml-[14rem]"
        }`}
      >
        <Navbar />
        <div className="mx-2">
          <Outlet />
        </div>
      </main>
    </section>
  ) : (
    <Navigate to="/login" />
  );
};

export default Home;
