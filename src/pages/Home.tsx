import React, { useEffect, useState, startTransition } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import Navbar from "./Navbar";

const Home = () => {
  const [clpSidebar, setClpSidebar] = useState(false);

  function handleSidebar() {
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

  return (
    <section className="w-full flex">
      <div className="h-[100vh] flex ">
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
              onClick={handleSidebar}
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
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              }
              component={<Link to="dashboard" />}
              className="text-white hover:text-tim-color"
            >
              <p>Dashboard</p>
            </MenuItem>
            <SubMenu
              label="Employees"
              className="text-white hover:text-black hover:bg-tim-color"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              }
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
          </Menu>
        </Sidebar>
      </div>

      <main className="pt-[1rem] md:px-6 w-full">
        <Navbar />
        <Outlet />
      </main>
    </section>
  );
};

export default Home;
