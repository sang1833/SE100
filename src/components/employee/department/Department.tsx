import AddDepartmentModal from "./AddDepartmentModal";
import DeleteDepartmentModal from "./DeleteDepartmentModal";
import ChangeDepartmentModal from "./ChangeDepartmentModal";
import { GetDepartment } from "@/apis/api_function";
import { useEffect, useState } from "react";
import { DepartmentRow } from "./DepartmentRow";

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

  function ShowChangeModal() {
    showModal("change_department_modal");
  }
  function ShowDeleteModal() {
    showModal("delete_department_modal");
  }

  useEffect(() => {
    const getDepartment = async () => {
      try {
        const res = await GetDepartment();
        setDepartment(res.data.departments);
      } catch (error) {
        console.log(error);
      }
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
                <DepartmentRow
                  key={item._id}
                  item={item}
                  ShowChangeModal={ShowChangeModal}
                  ShowDeleteModal={ShowDeleteModal}
                />
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
