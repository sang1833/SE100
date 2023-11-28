import { useEffect, useState } from "react";
import AddDepartmentModal from "./AddDepartmentModal";
import DeleteDepartmentModal from "./DeleteDepartmentModal";
import ChangeDepartmentModal from "./ChangeDepartmentModal";
import { GetDepartment } from "@/apis/api_function";
import { DepartmentRow } from "./DepartmentRow";
import { useDispatch } from "react-redux";

export interface DepartmentType {
  _id: string;
  departmentName: string;
  idBoss: string;
  nameBoss: string;
  lastUpdate: string;
  numberEmployee: number;
}

const example = [
  {
    _id: "...",
    departmentName: "...",
    idBoss: "...",
    nameBoss: "...",
    lastUpdate: "...",
    numberEmployee: 0,
  },
];

const Department = () => {
  const dispatch = useDispatch();
  const [department, setDepartment] = useState<DepartmentType[]>(example);
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
        if (res.data.list_dto.length === 0) {
          dispatch({
            type: "NOTIFY",
            payload: {
              type: "error",
              message: "Server error!",
            },
          });
          return;
        }
        setDepartment(res.data.list_dto);
        console.log("dp", department);
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
                <th>#</th>
                <th>Name</th>
                <th>Head</th>
                <th>Number of Employees</th>
                <th>Last update</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {department.map((item, index) => (
                <DepartmentRow
                  key={item._id}
                  item={item}
                  itemIndex={index}
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
