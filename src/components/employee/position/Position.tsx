import { MdOutlineDeleteForever, MdOutlineEdit } from "react-icons/md";
import AddPositionModal from "./AddPositionModal";
import ChangePositionModal from "./ChangePositionModal";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetPositionByDepartmentId } from "@/apis/api_function";

const departments = [
  {
    _id: 1,
    title: "Manager",
    departmentId: "5862",
    coef: 2,
  },
];

const Position = () => {
  const location = useLocation();
  const departmentId = location.pathname.split("/")[2];
  const [department, setDepartment] = useState(departments);
  function showModal(type: string) {
    const modal = document.getElementById(type) as HTMLDialogElement;
    if (modal !== null) {
      modal.showModal();
    }
  }

  useEffect(() => {
    async function getPosition() {
      const res = await GetPositionByDepartmentId(departmentId);
      setDepartment(res.data.positions);
    }
    getPosition();
  }, [departmentId]);

  return (
    <div className="flex flex-col gap-4">
      <section className="flex justify-between mt-8">
        <h1 className="font-bold text-2xl text-gray-900">Positions</h1>
        <button
          className="btn bg-tim-color hover:text-black text-white"
          onClick={() => showModal("add_position_modal")}
        >
          <p>Add Positions</p>
        </button>
      </section>
      <section className="bg-white border rounded-lg">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                {/* <th>#</th> */}
                <th>Id</th>
                <th>Title</th>
                <th>Department</th>
                <th>Coefficient</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {department.map((item) => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.title}</td>
                  <td>{item.departmentId}</td>
                  <td>{item.coef}</td>
                  <th className="flex gap-1">
                    <button
                      className="btn btn-ghost btn-xs border border-gray-600"
                      key={item._id}
                      onClick={() => showModal("change_position_modal")}
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
      <AddPositionModal />
      <ChangePositionModal />
    </div>
  );
};

export default Position;
