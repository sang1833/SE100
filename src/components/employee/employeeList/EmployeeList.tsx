import {
  MdOutlineDeleteForever,
  MdOutlineEdit,
  MdOutlineAttachMoney,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import DeleteProfile from "./DeleteProfile";
import { AddEmployeeExcel } from "./AddEmployeeExcel";

const department = [
  {
    id: 1,
    name: "Nguyen Van A",
    description: "IT Department",
    position: "IT Manager",
  },
  {
    id: 2,
    name: "Nguyen Van B",
    description: "HR Department",
    position: "HR Manager",
  },
  {
    id: 3,
    name: "Nguyen Van C",
    description: "Marketing Department",
    position: "",
  },
];

const EmployeeList = () => {
  const navigate = useNavigate();

  function showModal(type: string) {
    const modal = document.getElementById(type) as HTMLDialogElement;
    if (modal !== null) {
      modal.showModal();
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <section className="flex justify-between mt-8">
        <h1 className="font-bold text-2xl text-gray-900">Employees</h1>

        <div className="flex justify-center">
          <button
            className="btn bg-tim-color hover:text-black text-white"
            onClick={() => navigate("/employee/create")}
          >
            <p>Add Employees</p>
          </button>
          <AddEmployeeExcel />
        </div>
      </section>
      <section className="bg-white border rounded-lg">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Department</th>
                <th>Position</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {department.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.position}</td>
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
      <DeleteProfile />
    </div>
  );
};

export default EmployeeList;
