import { useState, useEffect } from "react";
import TableInfor from "./TableInfor";
import Datepicker from "react-tailwindcss-datepicker";
import { GetDepartment, GetPayrollDepartment } from "@/apis/api_function";
import { DepartmentType } from "../../employee/department/Department";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { useDispatch } from "react-redux";
import { notify } from "@/store/reducers/notify_reducers";

export interface PayrollInterface {
  employee_ID: number;
  avatar: string;
  name: string;
  position: string;
  coefficient: number;
  day_of_work: number;
  bonus_penalty: number;
  salary: number;
}

export const PayrollTable = () => {
  const dispatch = useDispatch();
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  // const [showTable, setShowTable] = useState(false);
  const [departments, setDepartments] = useState<DepartmentType[]>([]);
  const [payrolls, setPayrolls] = useState<PayrollInterface[]>([]);
  const [value, setValue] = useState({
    startDate: new Date().toISOString().slice(0, 10),
    endDate: new Date().toISOString().slice(0, 10),
  });
  const [currentDepartment, setCurrentDepartment] = useState("all");

  useEffect(() => {
    async function getDepartment() {
      try {
        const res = await GetDepartment(1, 100);
        setDepartments(res.data.list_dep);
      } catch (error) {
        console.log(error);
      }
    }
    getDepartment();
  }, [currentDepartment]);

  const handleValueChange = (newValue: any) => {
    setValue(newValue);
  };

  // function formatDate(date: Date) {
  //   const day = ("0" + date.getDate()).slice(-2);
  //   const month = ("0" + (date.getMonth() + 1)).slice(-2);
  //   const year = date.getFullYear();

  //   return `${day}-${month}-${year}`;
  // }

  function formatDate(dateString: string) {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  }

  async function getPayrollDepartment() {
    try {
      const start = formatDate(value.startDate);
      const end = formatDate(value.endDate);
      const res = await GetPayrollDepartment(currentDepartment, start, end);
      setPayrolls(res.data);
      console.table(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleGetPayroll() {
    getPayrollDepartment();
  }

  function handleExport() {
    if (payrolls.length === 0) {
      dispatch(notify({ message: "Please choose a date.", type: "error" }));
      return;
    }
    const saveData = payrolls.map((item) => {
      return {
        "Employee ID": item.employee_ID,
        Avatar: item.avatar,
        Name: item.name,
        Position: item.position,
        Coefficient: item.coefficient,
        "Day of work": item.day_of_work,
        "Bonus/Penalty": item.bonus_penalty,
        Salary: item.salary,
      };
    });
    const fileName = "Payroll" + "_" + value.startDate + "_" + value.endDate;
    const ws = XLSX.utils.json_to_sheet(saveData); // data what we want to write to the file will be here
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <section className="flex justify-between">
          <h1 className="font-bold text-2xl text-gray-900">Payroll</h1>
          <section className="flex justify-start max-w-ms mb-8">
            <button
              className="btn bg-tim-color hover:text-black text-white"
              onClick={() => handleExport()}
            >
              <p>Export Payroll</p>
            </button>
          </section>
        </section>
      </div>
      <section className="flex justify-between gap-2">
        <div className="w-full">
          <div className="mb-4 flex justify-start items-center gap-4">
            <div className="min-w-[4rem]">
              <span>Filter by: </span>
            </div>
            <div className="flex gap-2 w-full">
              <select
                className="select select-bordered w-full min-w-fit max-w-[10rem]"
                onChange={(e) => setCurrentDepartment(e.target.value)}
              >
                <option value={"all"}>All</option>
                {departments?.map((department) => (
                  <option
                    key={department.department_code}
                    value={department.department_code}
                  >
                    {department.name}
                  </option>
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
              <button
                className="btn bg-tim-color hover:text-black text-white"
                onClick={() => handleGetPayroll()}
              >
                <span>Apply</span>
              </button>
            </div>
          </div>
          <div>
            <TableInfor payrolls={payrolls} />
            {payrolls.length === 0 && (
              <div className="flex justify-center items-center py-8">
                <p>Please choose a date.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
