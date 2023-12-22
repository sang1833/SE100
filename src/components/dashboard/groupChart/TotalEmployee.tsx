import { RootState } from "@/store/store";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

const TotalEmployee = () => {
  const employees = useSelector(
    (state: RootState) => state.dashboard.data.total_Employee
  );
  const data = {
    labels: ["Woman", "Man"],
    datasets: [
      {
        label: "Number",
        data: [employees.woman, employees.man],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold py-4">Total Employees</h3>
        <p className="text-lg p-4">{employees.total}</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-[14rem]">
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
};

export default TotalEmployee;
