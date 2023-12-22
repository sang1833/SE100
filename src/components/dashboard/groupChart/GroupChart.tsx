import Attendance from "./Attendance";
import TotalEmployee from "./TotalEmployee";
import EmployeeByDepartment from "./EmployeeByDepartment";

export const GroupChart = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 border rounded-xl">
        <Attendance></Attendance>
      </div>
      <div className="bg-white p-4 border rounded-xl">
        <TotalEmployee />
      </div>
      <div className="bg-white p-4 border rounded-xl">
        <EmployeeByDepartment />
      </div>
    </div>
  );
};

export default GroupChart;
