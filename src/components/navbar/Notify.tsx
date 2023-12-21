import { BellAlertIcon } from "@heroicons/react/20/solid";

function DropdownComponent() {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className=" btn btn-ghost normal-case text-lg m-1">
        <BellAlertIcon className="w-6 h-6" />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-80"
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
  );
}

export default DropdownComponent;
