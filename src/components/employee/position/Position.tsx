/* eslint-disable @typescript-eslint/no-unused-vars */
import AddPositionModal from "./AddPositionModal";
import ChangePositionModal from "./ChangePositionModal";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// import { GetPositionByDepartmentCode } from "@/apis/api_function";
import { PositionRow } from "./PositionRow";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { PositionDTO } from "../department/Department";

const positionArray = [
  {
    posiition_ID: 1,
    title: "...",
    position_code: "...",
    salary_coeffcient: 0,
    employee_DTOs: [],
    numberEmployee: 0,
  },
];

const Position = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const departmentCode = location.pathname.split("/")[3];
  const name = location.pathname.split("/")[2];
  // const departmentName = name.replace(/%20/g, " ");
  const departments = useSelector(
    (state: RootState) => state.department.listDepartment
  );
  const departmentName = decodeURIComponent(name.replace(/%20/g, " "));

  const [positions, setPositions] = useState<PositionDTO[]>(positionArray);

  function showModal(type: string) {
    const modal = document.getElementById(type) as HTMLDialogElement;
    if (modal !== null) {
      modal.showModal();
    }
  }

  useEffect(() => {
    async function getPosition() {
      const positions = departments?.filter(
        (item) => item.department_code === departmentCode
      );

      const mappedPositions = positions[0].position_DTOs.map((item) => ({
        posiition_ID: item.posiition_ID,
        title: item.title,
        position_code: item.position_code,
        salary_coeffcient: item.salary_coeffcient,
        employee_DTOs: item.employee_DTOs,
        numberEmployee: item.numberEmployee,
      }));

      setPositions(mappedPositions);
    }
    getPosition();
  }, [positionArray, departments, departmentCode]);

  if (name === "...") return <Navigate to="/employee/department" />;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-start">
        <button
          onClick={() => {
            navigate("/employee/department");
          }}
          className="flex btn btn-link items-center gap-2"
        >
          <MdKeyboardBackspace />
          <p>Back</p>
        </button>
      </div>
      <section className="flex justify-between mt-4">
        <h1 className="font-bold text-2xl text-gray-900 flex gap-2">
          <p>Positions in</p>
          <p>{departmentName}</p>
        </h1>
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
                <th>#</th>
                <th>Code</th>
                <th>Title</th>
                <th>Coefficient</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {positions?.map((item, index) => (
                <PositionRow
                  key={item.posiition_ID}
                  item={item}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <AddPositionModal departmentId={departmentCode} />
      <ChangePositionModal />
    </div>
  );
};

export default Position;
