import { useNavigate } from "react-router-dom";
import DeleteProfile from "./DeleteProfile";
// import { AddEmployeeExcel } from "./AddEmployeeExcel";
import { useState, useEffect, SetStateAction } from "react";
import {
  GetDepartment,
  GetEmployeeByDepartmentCode,
} from "@/apis/api_function";
import { DepartmentType } from "../department/Department";
import EmployeeTable from "./EmployeeTable";

export interface EmployeeProps {
  id: number;
  email: string;
  fullName: string;
  phoneNumber: string;
  avatar: string;
  birth_day: string;
  gender: boolean;
  cmnd: string;
  address: string;
}

const EmployeeList = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState<EmployeeProps[]>([]);
  const [department, setDepartment] = useState<DepartmentType[]>([]);
  const [currentDepartment, setCurrentDepartment] = useState(
    department[0]?.department_code
  );

  // function showModal(type: string) {
  //   const modal = document.getElementById(type) as HTMLDialogElement;
  //   if (modal !== null) {
  //     modal.showModal();
  //   }
  // }

  function getCurrentDepartment(event: {
    target: { value: SetStateAction<string> };
  }) {
    setCurrentDepartment(event.target.value);
  }

  useEffect(() => {
    async function getDepartment() {
      try {
        const res = await GetDepartment();
        setDepartment(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getDepartment();
  }, []);

  useEffect(() => {
    async function getEmployee() {
      try {
        const res = await GetEmployeeByDepartmentCode(currentDepartment);
        setEmployee(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getEmployee();
  }, [currentDepartment]);

  return (
    <div className="flex flex-col gap-4">
      <section className="flex justify-between">
        <h1 className="font-bold text-2xl text-gray-900">Employees</h1>

        <div className="flex justify-center">
          <button
            className="btn bg-tim-color hover:text-black text-white"
            onClick={() => navigate("/employee/create")}
          >
            <p>Add Employees</p>
          </button>
          {/* <AddEmployeeExcel /> */}
        </div>
      </section>
      <section>
        <div className="flex justify-start items-center ">
          <p>Filter by:</p>
          <div className="mx-2 flex gap-2">
            <select
              id="department"
              className="select select-bordered w-full max-w-xs"
              onChange={getCurrentDepartment}
            >
              {/* <option disabled selected>
                Department
              </option> */}
              {department?.map((item: DepartmentType) => (
                <option
                  key={item.department_code}
                  value={item.department_code}
                  className="w-full"
                >
                  {item.name}
                </option>
              ))}
            </select>
            <select
              id="position"
              className="select select-bordered w-full max-w-xs"
              onChange={getCurrentDepartment}
            >
              <option disabled selected>
                Position
              </option>
              {/* {department?.map((item: DepartmentType) => (
                <option key={item.code} value={item.code}>
                  {item.name}
                </option>
              ))} */}
            </select>
          </div>
        </div>
      </section>
      {employee.length === 0 ? (
        <div className="flex justify-center items-center">
          <p className="text-gray-400">Please choose a department</p>
        </div>
      ) : (
        <EmployeeTable employee={employee} />
      )}

      <DeleteProfile />
    </div>
  );
};

export default EmployeeList;
