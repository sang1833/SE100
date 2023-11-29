import { useState, useEffect } from "react";
import TableInfor from "./TableInfor";

export const PayrollTable = () => {
  // const [showTable, setShowTable] = useState(false);
  const [year, setYear] = useState<string>("");

  useEffect(() => {
    console.log("year", year);
  }, []);

  return (
    <div>
      <div className="mb-4 flex justify-start items-center gap-4">
        <div className="min-w-[4rem]">
          <span>Filter by: </span>
        </div>
        <div className="flex gap-2 w-full w-max-[5rem]">
          <select
            onChange={(e) => {
              setYear(e.target.value);
            }}
            className="select select-bordered w-full min-w-fit max-w-xs"
          >
            <option disabled selected>
              Year
            </option>
            <option>2023</option>
            <option>2022</option>
          </select>
          <select className="select select-bordered w-full min-w-fit max-w-xs">
            <option disabled selected>
              Month
            </option>
            <option>11</option>
            <option>12</option>
          </select>
          <select className="select select-bordered w-full min-w-fit max-w-xs">
            <option disabled selected>
              Department
            </option>
            <option>IT</option>
            <option>Marketing</option>
          </select>
        </div>
      </div>
      <div>
        <TableInfor />
      </div>
    </div>
  );
};
