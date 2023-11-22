import { MdOutlineDeleteForever, MdOutlineEdit } from "react-icons/md";
import AddDepartmentModal from "./AddDepartmentModal";
import DeleteDepartmentModal from "./DeleteDepartmentModal";
import ChangeDepartmentModal from "./ChangeDepartmentModal";
import { GetDepartment } from "@/apis/api_function";
import { useEffect, useState } from "react";

// const department = [
//   {
//     id: 1,
//     description: "IT Department",
//     head: "Nguyen Van A",
//     number: 10,
//   },
//   {
//     id: 2,
//     description: "HR Department",
//     head: "Nguyen Van B",
//     number: 8,
//   },
//   {
//     id: 3,
//     description: "Marketing Department",
//     head: "Nguyen Van C",
//     number: 12,
//   },
// ];
export interface DepartmentType {
  _id: string;
  departmentName: string;
  idBoss: string;
  lastUpdate: string;
}

const Department = () => {
  const [department, setDepartment] = useState<DepartmentType[]>([]);
  function showModal(type: string) {
    const modal = document.getElementById(type) as HTMLDialogElement;
    if (modal !== null) {
      modal.showModal();
    }
  }

  useEffect(() => {
    const getDepartment = async () => {
      const res = await GetDepartment();
      setDepartment(res.data.departments);
    };
    getDepartment();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <section className="flex justify-between mt-8">
        <h1 className="font-bold text-2xl text-gray-900">Departments</h1>
        <button
          className="btn bg-tim-color hover:text-black text-white"
          onClick={() => showModal("add_department_modal")}
        >
          <p>Add Departments</p>
        </button>
      </section>
      <section className="bg-white border rounded-lg">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Head</th>
                <th>Number of Employees</th>
                <th>Last update</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {department.map((item) => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.departmentName}</td>
                  <td>{item.idBoss}</td>
                  <td>0</td>
                  <td>{item.lastUpdate.toString().split("T")[0]}</td>
                  <th className="flex gap-1">
                    <button
                      className="btn btn-ghost btn-xs border border-gray-600"
                      key={item._id}
                      onClick={() => showModal("change_department_modal")}
                    >
                      <MdOutlineEdit className="h-5 w-5" />
                    </button>
                    <button
                      className="btn btn-ghost btn-xs text-red-600 border border-red-600"
                      key={item._id}
                      onClick={() => showModal("delete_department_modal")}
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
      <AddDepartmentModal />
      <DeleteDepartmentModal />
      <ChangeDepartmentModal />
    </div>
  );
};

export default Department;
