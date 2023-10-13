import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";

const Home = () => {
  const [clpSidebar, setClpSidebar] = useState(false);

  function handleSidebar() {
    setClpSidebar(!clpSidebar);
  }

  return (
    <div className="h-[100vh] flex from-indigo-400">
      <Sidebar
        collapsed={clpSidebar}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundImage:
              "linear-gradient(white, rgb(231, 215, 247), rgb(215, 187, 242));",
          },
        }}
      >
        {/* <div onClick={handleSidebar} className="mx-[10px] my-[30px]">
          {clpSidebar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </div> */}
        <Menu>
          <MenuItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                />
              </svg>
            }
            component={<Link to="dashboard" />}
            className="text-primary-0"
          >
            {" "}
            Dashboard
          </MenuItem>
          <MenuItem component={<Link to="employee" />}> Employee</MenuItem>
          <MenuItem component={<Link to="error" />}> Error</MenuItem>
        </Menu>
      </Sidebar>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
