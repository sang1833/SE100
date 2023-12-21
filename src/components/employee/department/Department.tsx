import { useEffect, useState } from "react";
import AddDepartmentModal from "./AddDepartmentModal";
import { GetDepartment } from "@/apis/api_function";
import { DepartmentRow } from "./DepartmentRow";
import { useDispatch, useSelector } from "react-redux";
// import { addDepartments } from "@/store/reducers/department_reducers";
// import Loading from "@/utils/Loading";
import React from "react";
import { RootState } from "@/store/store";

export interface EmployeeDTO {
  emp_ID: number;
  avatar: string;
  fullName: string;
  email: string;
  gender: boolean;
}

export interface PositionDTO {
  posiition_ID: number;
  title: string;
  position_code: string;
  salary_coeffcient: number;
  employee_DTOs: EmployeeDTO[];
  numberEmployee: number;
}

export interface DepartmentType {
  department_ID: number;
  name: string;
  department_code: string;
  nameBoss: string;
  numberEmployee: number;
  position_DTOs: PositionDTO[];
}

const Department = () => {
  const dispatch = useDispatch();
  const listDepartment = useSelector(
    (state: RootState) => state.department.listDepartment
  );
  const [department, setDepartment] = useState<DepartmentType[]>(
    listDepartment || []
  );
  // const departmentRef = useRef<DepartmentType[]>([]);
  // const [loading, setLoading] = useState(false);

  function showModal(type: string) {
    const modal = document.getElementById(type) as HTMLDialogElement;
    if (modal !== null) {
      modal.showModal();
    }
  }

  useEffect(() => {
    const getDepartment = async () => {
      // setLoading(true);
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
          // setLoading(false);
          return;
        }
        const data = res.data;
        setDepartment(data);
        // departmentRef.current = data;
        console.log("data", data);
        dispatch({
          type: "ADD_DEPARTMENTS",
          payload: { listDepartment: data },
        });

        // setLoading(false);
      } catch (error) {
        dispatch({
          type: "NOTIFY",
          payload: {
            type: "error",
            message: "Server error!",
          },
        });
        // setLoading(false);
        console.log(error);
      }
    };
    // departmentRef.current = listDepartment;

    getDepartment();
  }, [dispatch]);

  // if (loading)
  //   return (
  //     <div>
  //       <Loading />
  //     </div>
  //   );
  return (
    <div className="flex flex-col gap-4">
      <section className="flex justify-between">
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
                <th>Code</th>
                <th>Boss</th>
                <th>Number of Employees</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {department.map((item, index) => (
                <React.Fragment key={item.department_ID}>
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
