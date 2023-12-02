import { Link } from "react-router-dom";
import SearchBar from "../components/navbar/SearchBar";
import AvatarGroup from "../components/navbar/AvatarGroup";
import { BellAlertIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Navbar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.auth);
  function handleLogout(): void {
    dispatch({ type: "LOGOUT" });
  }

  return (
    <>
      <div className="navbar ">
        <section className="md:flex-1 max-md:hidden">
          {/* <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          /> */}
          <SearchBar />
        </section>
        <section className="flex-none gap-2">
          <div className="flex items-center">
            <div className="">
              <AvatarGroup />
            </div>
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className=" btn btn-ghost normal-case text-lg m-1"
              >
                <BellAlertIcon className="w-6 h-6" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>
                    <div role="alert" className="alert alert-info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="stroke-current shrink-0 w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>New software update available.</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <p>{currentUser.email}</p>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-12 h-12 rounded-full">
                <img src="/woman (1).png" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/adminprofile"}>Profile</Link>
              </li>
              <li>
                <Link to={"/changepassword"}>Password</Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Navbar;
