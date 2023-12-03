import { useEffect, useState } from "react";
import AddDepartmentModal from "./AddDepartmentModal";
import { GetDepartment } from "@/apis/api_function";
import { DepartmentRow } from "./DepartmentRow";
import { useDispatch } from "react-redux";
import Loading from "@/utils/Loading";
import React from "react";

// export interface DepartmentType {
//   _id: string;
//   departmentName: string;
//   idBoss: string;
//   nameBoss: string;
//   lastUpdate: string;
//   numberEmployee: number;
// }

export interface DepartmentType {
  id: string;
  name: string;
  code: string;
}

// const example = [
//   {
//     _id: "...",
//     departmentName: "...",
//     idBoss: "...",
//     nameBoss: "...",
//     lastUpdate: "...",
//     numberEmployee: 0,
//   },
// ];

const example = [
  {
    id: "...",
    name: "...",
    code: "...",
  },
];

const Department = () => {
  const dispatch = useDispatch();
  const [department, setDepartment] = useState<DepartmentType[]>(example);
  const [loading, setLoading] = useState(false);

  function showModal(type: string) {
    const modal = document.getElementById(type) as HTMLDialogElement;
    if (modal !== null) {
      modal.showModal();
    }
  }

  useEffect(() => {
    const getDepartment = async () => {
      setLoading(true);
      try {
        const res = await GetDepartment();
        if (res.data === 0) {
          dispatch({
            type: "NOTIFY",
            payload: {
              type: "error",
              message: "Server error!",
            },
          });
          setLoading(false);
          return;
        }
        setDepartment(res.data);
        setLoading(false);
      } catch (error) {
        dispatch({
          type: "NOTIFY",
          payload: {
            type: "error",
            message: "Server error!",
          },
        });
        setLoading(false);
        console.log(error);
      }
    };
    getDepartment();
  }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
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
                <React.Fragment key={item.id}>
                  <DepartmentRow item={item} itemIndex={index} />
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <AddDepartmentModal />
    </div>
  );
};

export default Department;
