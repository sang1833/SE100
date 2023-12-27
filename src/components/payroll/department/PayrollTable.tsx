import { useState, useEffect } from "react";
import TableInfor from "./TableInfor";

interface DepartmentsInterface {
  id: number;
  name: string;
}

export const PayrollTable = () => {
  // const [showTable, setShowTable] = useState(false);
  const [year, setYear] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departments, setDepartments] = useState<DepartmentsInterface[]>([]);

  useEffect(() => {
    console.log("year", departments);
  }, []);

  return (
    <div>
      <div className="mb-4 flex justify-start items-center gap-4">
        <div className="min-w-[4rem]">
          <span>Filter by: </span>
        </div>
        <div className="flex gap-2 w-full w-max-[5rem]">
          <select className="select select-bordered w-full min-w-fit max-w-[10rem]">
            <option disabled selected>
              Department
            </option>
            {departments?.map((department) => (
              <option value={department.id}>{department.name}</option>
            ))}
          </select>
          <select
            onChange={(e) => {
              setFrom(e.target.value);
            }}
            className="select select-bordered w-full min-w-fit max-w-[10rem]"
          >
            <option disabled selected>
              From
            </option>
            <option>2023</option>
            <option>2022</option>
          </select>
          <select className="select select-bordered w-full min-w-fit max-w-[10rem]">
            <option disabled selected>
              To
            </option>
            <option>11</option>
            <option>12</option>
          </select>

          {/*  */}
          <button className="btn bg-tim-color hover:text-black text-white ">
            <span>Apply</span>
          </button>
        </div>
      </div>
      <div>
        <TableInfor />
      </div>
    </div>
  );
};
