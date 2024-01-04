import { useState, useEffect } from "react";
import TableInfor from "./TableInfor";
import Datepicker from "react-tailwindcss-datepicker";

interface DepartmentsInterface {
  id: number;
  name: string;
}

export const PayrollTable = () => {
  // const [showTable, setShowTable] = useState(false);
  const [departments, setDepartments] = useState<DepartmentsInterface[]>([]);
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(new Date().getFullYear(), 11, 31),
  });

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  useEffect(() => {
    console.log("year", departments);
    setDepartments([
      {
        id: 1,
        name: "Department 1",
      },
      {
        id: 2,
        name: "Department 2",
      },
      {
        id: 3,
        name: "Department 3",
      },
    ]);
  }, []);

  return (
    <div>
      <div className="mb-4 flex justify-start items-center gap-4">
        <div className="min-w-[4rem]">
          <span>Filter by: </span>
        </div>
        <div className="flex gap-2 w-full">
          <select className="select select-bordered w-full min-w-fit max-w-[10rem]">
            <option disabled selected>
              Department
            </option>
            {departments?.map((department) => (
              <option value={department.id}>{department.name}</option>
            ))}
          </select>
          <div className="max-w-lg my-auto">
            <Datepicker
              useRange={false}
              value={value}
              onChange={handleValueChange}
              showShortcuts={true}
            />
          </div>

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
