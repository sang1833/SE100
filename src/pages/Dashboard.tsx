import { useEffect, useState } from "react";
import { GetDashboard } from "@/apis/api_function";
import GroupChart from "../components/dashboard/groupChart/GroupChart";
import UnderChart from "../components/dashboard/underChart/UnderChart";
import { useDispatch } from "react-redux";
import { addDashboard } from "@/store/reducers/dashboard_reducers";

export interface AttendanceType {
  thu: number;
  ngay: number;
  on_time: number;
  late_coming: number;
  absent: number;
}

export interface DepartmentCount {
  department_name: string;
  department_code: string;
  emp_count: number;
}

export interface Data {
  employees_Today: AttendanceType;
  total_Employee: {
    man: number;
    woman: number;
    total: number;
  };
  attendance_ByWeek: AttendanceType[];
  emp_perDepts: DepartmentCount[];
}

const Dashboard = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    async function getDashboard() {
      const res = await GetDashboard();
      const dataRes: Data = res.data;
      setData(dataRes);
      dispatch(addDashboard({ data: dataRes }));
    }
    getDashboard();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4">
        <GroupChart />
        <UnderChart />
      </div>
    </>
  );
};

export default Dashboard;
