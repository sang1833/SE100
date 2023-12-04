import {
  MdOutlineDeleteForever,
  MdOutlineEdit,
  MdOutlineAttachMoney,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { EmployeeProps } from "./EmployeeList";

interface EmployeeTableProps {
  employee: EmployeeProps[];
}

const EmployeeTable = ({ employee }: EmployeeTableProps) => {
  const navigate = useNavigate();
  return (
    <section className="bg-white border rounded-lg">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Birth Day</th>
              <th>Gender</th>
              <th>ID Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {employee.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.fullName}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.birth_day}</td>
                <td>{item.gender}</td>
                <td>{item.cmnd}</td>
                <td>{item.address}</td>

                <th className="flex gap-1">
                  <button
                    className="btn btn-ghost btn-xs border text-green-800 border-green-800"
                    key={item.id}
                    onClick={() => navigate(`/employee/${item.id}`)}
                  >
                    <MdOutlineAttachMoney className="h-5 w-5" />
                  </button>
                  <button
                    className="btn btn-ghost btn-xs border text-tim-color border-tim-color-1"
                    key={item.id}
                    onClick={() => navigate(`/employee/${item.id}`)}
                  >
                    <MdOutlineEdit className="h-5 w-5" />
                  </button>
                  <button
                    className="btn btn-ghost btn-xs text-red-600 border border-red-600"
                    key={item.id}
                    // onClick={() => showModal("delete_profile_modal")}
                  >
                    <MdOutlineDeleteForever className="h-5 w-5" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default EmployeeTable;
