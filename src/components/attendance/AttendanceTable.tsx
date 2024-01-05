import { useState, useEffect, SetStateAction } from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import DatePicker from "react-datepicker";
import { GetDepartment, GetAttendanceList } from "@/apis/api_function";
import { DepartmentType } from "../employee/department/Department";
import "react-datepicker/dist/react-datepicker.css";

export interface AttendanceType {
  id: number;
  employee_name: string;
  avatar: string;
  time: string;
  attendance_state: string;
  department_name: string;
}

export const AttendanceTable = () => {
  const [date, setDate] = useState(new Date());
  const [employees, setEmployees] = useState<AttendanceType[]>([]);
  const [department, setDepartment] = useState([]);
  const [currentDepartment, setCurrentDepartment] = useState("all");
  const [filteredEmployees, setFilteredEmployees] = useState<AttendanceType[]>(
    []
  );
  const [sortEmployees, setSortEmployees] = useState<AttendanceType[]>([]); // [
  const [loading, setLoading] = useState(false);
  const [sortByTime, setSortByTime] = useState("newest");
  const [filterByState, setFilterByState] = useState("all");

  function getCurrentDepartment(event: {
    target: { value: SetStateAction<string> };
  }) {
    setCurrentDepartment(event.target.value);
  }

  useEffect(() => {
    async function getDepartment() {
      try {
        const res = await GetDepartment(1, 100);
        setDepartment(res.data.list_dep);
      } catch (error) {
        console.log(error);
      }
    }
    getDepartment();
    setFilterByState("all");
  }, [sortByTime]);

  useEffect(() => {
    async function getAttendanceList() {
      try {
        let formattedDate = date.toISOString().slice(0, 10);
        setLoading(true);
        const res = await GetAttendanceList(formattedDate, currentDepartment);
        setEmployees(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getAttendanceList();
  }, [currentDepartment, date]);

  useEffect(() => {
    if (sortByTime === "newest") {
      setSortEmployees(
        employees.sort((a, b) => {
          return new Date(b.time).getTime() - new Date(a.time).getTime();
        })
      );
    }
    if (sortByTime === "oldest") {
      setSortEmployees(
        employees.sort((a, b) => {
          return new Date(a.time).getTime() - new Date(b.time).getTime();
        })
      );
    } else {
      setSortEmployees(employees);
      console.log("employees", employees);
    }
  }, [sortByTime, employees]);

  useEffect(() => {
    if (filterByState === "On time") {
      setFilteredEmployees(
        sortEmployees.filter((item) => item.attendance_state === "On time")
      );
    }
    if (filterByState === "Late") {
      setFilteredEmployees(
        sortEmployees.filter((item) => item.attendance_state === "Late")
      );
    }
    if (filterByState === "Absent") {
      setFilteredEmployees(
        sortEmployees.filter((item) => item.attendance_state === "Absent")
      );
    }
    if (filterByState === "all") {
      setFilteredEmployees(sortEmployees);
    }
    console.log("sortEmployees", sortEmployees);
  }, [sortEmployees, employees, filterByState]);

  return (
    <div>
      <section className="my-2 pt-2 flex justify-start items-center ">
        <div className="flex justify-start items-center ">
          <p>Filter by:</p>
          <div className="mx-2">
            <select
              className="select select-bordered w-full max-w-xs"
              onChange={getCurrentDepartment}
            >
              <option disabled>Department</option>
              <option value={"all"} defaultValue={"all"}>
                All
              </option>
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
          </div>
          <div>
            <select
              className="select select-bordered w-full max-w-xs"
              onChange={(e) => setSortByTime(e.target.value)}
            >
              <option disabled>Time</option>
              <option value={"newest"}>Newest</option>
              <option value={"oldest"}>Oldest</option>
            </select>
          </div>
          <div className="mx-2">
            {/* <select className="select select-bordered w-full max-w-xs">
              <option>21-11-2023</option>
              <option>22-11-2023</option>
  </select> */}

            <DatePicker
              selected={date}
              onChange={(date) => setDate(date as Date)}
              className="input input-bordered max-w-[218px]"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>
        {/* <div className="flex">
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(e) => setFilterByState(e.target.value)}
          >
            <option disabled>State</option>
            <option value={"all"} defaultValue={"all"}>
              All
            </option>
            <option value={"On time"}>On time</option>
            <option value={"Late"}>Late</option>
            <option value={"Absent"}>Absent</option>
          </select>
        </div> */}
      </section>

      <section className="bg-white border rounded-lg">
        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex justify-center items-center">
              <p className="text-gray-400">Loading...</p>
            </div>
          ) : (
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>State</th>
                  <th>Department</th>
                  {/* <th>Action</th> */}
                </tr>
              </thead>
              <tbody>
                {/* rows */}
                {filteredEmployees.map((item, index) => (
                  <tr key={item.time}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="avatar">
                        <div className="w-12 rounded-full">
                          <img
                            src={
                              item.avatar && item.avatar !== "string"
                                ? item.avatar
                                : "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                            }
                            alt="avatar"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{item.employee_name}</td>
                    <td>{`${new Date(item.time).getHours()}:${new Date(
                      item.time
                    ).getMinutes()}`}</td>
                    <td>{item.attendance_state}</td>
                    <td>{item.department_name}</td>
                    {/* <th className="flex gap-1">
                    <button
                      className="btn btn-ghost btn-xs border border-gray-600"
                      key={item.id}
                    >
                      <MdOutlineMoreVert className="h-5 w-5" />
                    </button>
                  </th> */}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </div>
  );
};
