import {
  MdOutlineDeleteForever,
  MdOutlineEdit,
  MdOutlineMore,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

interface TableInfo {
  id: number;
  name: string;
  salary: string;
  time: string;
  status: string;
}

const payrollArray = [
  {
    id: 1,
    name: "Nguyen Van A",
    salary: "1.000.000",
    time: "1/1/2021",
    status: "Pending",
  },
  {
    id: 2,
    name: "Nguyen Van B",
    salary: "1.000.000",
    time: "1/1/2021",
    status: "Approved",
  },
  {
    id: 3,
    name: "Nguyen Van C",
    salary: "1.000.000",
    time: "1/1/2021",
    status: "Rejected",
  },
];

const EmployeeList = () => {
  const navigate = useNavigate();
  const [payroll, setPayroll] = useState<TableInfo[]>(payrollArray);

  useEffect(() => {
    async function getEmployee() {
      setPayroll(payrollArray);
    }
    getEmployee();
  }, []);

  function showModal(type: string) {
    const modal = document.getElementById(type) as HTMLDialogElement;
    if (modal !== null) {
      modal.showModal();
    }
  }

  return (
    <div className="flex flex-col gap-4">
      {/* <section className="flex justify-between mt-8">
        <h1 className="font-bold text-2xl text-gray-900">Employees</h1>

        <div className="flex justify-center">
          <button
            className="btn bg-tim-color hover:text-black text-white"
            onClick={() => navigate("/employee/create")}
          >
            <p>Add Employees</p>
          </button>
        </div>
      </section> */}
      <section className="bg-white border rounded-lg">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {payroll.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.salary}</td>
                  <th className="flex gap-1">
                    <button
                      className="btn btn-ghost btn-xs border text-green-800 border-green-800"
                      key={item.id}
                      onClick={() => navigate(`/employee/${item.id}`)}
                    >
                      <MdOutlineMore className="h-5 w-5" />
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
                      onClick={() => showModal("delete_profile_modal")}
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
    </div>
  );
};

export default EmployeeList;
